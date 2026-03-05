const { BigQuery } = require('@google-cloud/bigquery');
const path = require('path');
const fs = require('fs');
const { CLIENTS } = require('./client-mapping');

// Demo data for fallback when BigQuery is unavailable
const DEMO_DATA = {
  accounts: [
    {
      id: "XtCzILIa9eFaETToCeLN",
      name: "4.0. Movement Studios",
      accountManager: "Katie Dunphy",
      status: "green",
      statusReason: "Good CPL and solid lead generation",
      metrics: {
        monthlySpend: 2450.50,
        leads: 127,
        costPerLead: 19.29,
        appointmentsBooked: 42,
        conversionRate: 33.07,
        roas: 2.8
      }
    },
    {
      id: "c4lAjQFMy5MT6MfKNSp4",
      name: "Absolute Dance Center",
      accountManager: "Kelly Steffen",
      status: "yellow",
      statusReason: "Moderate CPL, opportunities room for improvement",
      metrics: {
        monthlySpend: 1875.00,
        leads: 63,
        costPerLead: 29.76,
        appointmentsBooked: 18,
        conversionRate: 28.57,
        roas: 1.9
      }
    },
    {
      id: "gTNyIqCsysVeg6IA9FB5",
      name: "Academy of Dance Arts (Wisconsin)",
      accountManager: "Kelly Steffen",
      status: "red",
      statusReason: "High CPL and low opportunity conversion",
      metrics: {
        monthlySpend: 3200.00,
        leads: 52,
        costPerLead: 61.54,
        appointmentsBooked: 8,
        conversionRate: 15.38,
        roas: 0.9
      }
    }
  ]
};

let bigqueryClient = null;
let isConnected = false;
let cacheTimestamp = 0;
let cachedAccounts = null;
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

async function initialize() {
  // Guard: if already initialized, return current status
  if (bigqueryClient !== null) {
    return isConnected;
  }

  try {
    let credentials = null;

    // Option 1: Read from BIGQUERY_CREDENTIALS environment variable (for Railway/cloud hosting)
    if (process.env.BIGQUERY_CREDENTIALS) {
      try {
        credentials = JSON.parse(process.env.BIGQUERY_CREDENTIALS);
        console.log('BigQuery credentials loaded from environment variable');
      } catch (e) {
        console.error('Failed to parse BIGQUERY_CREDENTIALS env var:', e.message);
      }
    }

    // Option 2: Read from credentials file (for local development)
    if (!credentials) {
      const credentialsPath = path.join(__dirname, '../config/bigquery-credentials.json');
      if (fs.existsSync(credentialsPath)) {
        credentials = JSON.parse(fs.readFileSync(credentialsPath, 'utf8'));
        console.log('BigQuery credentials loaded from file');
      }
    }

    if (!credentials) {
      console.log('No BigQuery credentials found — using demo data');
      console.log('  To connect: set BIGQUERY_CREDENTIALS env var (Railway) or add config/bigquery-credentials.json');
      isConnected = false;
      return false;
    }

    bigqueryClient = new BigQuery({
      projectId: credentials.project_id || 'dance-reporting',
      credentials: credentials
    });

    // Test connection
    await testConnection();
    isConnected = true;
    console.log('Connected to BigQuery project:', credentials.project_id);
    return true;
  } catch (error) {
    console.error('BigQuery connection failed:', error.message);
    console.log('Falling back to demo data');
    isConnected = false;
    bigqueryClient = null;
    return false;
  }
}

async function testConnection() {
  if (!bigqueryClient) throw new Error('BigQuery client not initialized');

  const query = 'SELECT 1 as test';
  const options = { query };

  const [rows] = await bigqueryClient.query(options);
  return rows;
}

function inferOfferType(campaignName) {
  const name = (campaignName || '').toLowerCase();

  if (name.includes('summer')) return 'Summer Camp';
  if (name.includes('trial') || name.includes('free')) return 'Free Trial';
  if (name.includes('intro')) return 'Intro Offer';
  if (name.includes('winter') || name.includes('mini')) return 'Mini Session';
  if (name.includes('fall')) return 'Fall Enrollment';
  if (name.includes('competition') || name.includes('comp')) return 'Competition Prep';

  return 'General';
}

function getHealthStatus(spend, leads, opportunities) {
  // Gray/unknown: no spend data
  if (!spend || spend === 0) {
    return 'unknown';
  }

  const cpl = leads > 0 ? spend / leads : Infinity;

  // Green: CPL < 25 AND opportunities >= 3
  if (cpl < 25 && opportunities >= 3) {
    return 'green';
  }

  // Red: CPL > 45 OR no opportunities with active spend
  if (cpl > 45 || opportunities === 0) {
    return 'red';
  }

  // Yellow: moderate performance
  return 'yellow';
}

function getStatusReason(status, cpl, opportunities, spend) {
  if (status === 'unknown') {
    return 'No ad spend data available';
  }

  if (status === 'green') {
    return `Excellent efficiency (CPL: $${cpl.toFixed(2)}) with strong lead conversion`;
  }

  if (status === 'red') {
    if (cpl > 45) {
      return `High cost per lead ($${cpl.toFixed(2)}) - optimize ad targeting`;
    }
    return 'No opportunities booked - review campaign messaging or audience';
  }

  // Yellow
  return `Moderate performance (CPL: $${cpl.toFixed(2)}) - monitor opportunities`;
}

async function getAllAccounts() {
  try {
    // Check cache
    if (cachedAccounts && Date.now() - cacheTimestamp < CACHE_TTL) {
      console.log('Returning cached account data');
      return cachedAccounts;
    }

    if (!isConnected || !bigqueryClient) {
      console.log('BigQuery not connected, using demo data');
      return DEMO_DATA.accounts;
    }

    const startTime = Date.now();

    // Query 1: Leads per locationId (count opportunities as leads)
    const leadsQuery = `
      SELECT locationId, COUNT(*) as leads
      FROM \`dance-reporting.dataform.ghl_opportunities\`
      WHERE createdAt >= FORMAT_TIMESTAMP('%Y-%m-%dT%H:%M:%S', TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL 30 DAY))
      GROUP BY locationId
    `;

    // Query 2: Booked appointments per locationId
    const opportunitiesQuery = `
      SELECT locationId, SUM(total_appts_booked) as opportunities
      FROM \`dance-reporting.dataform.ghl_opportunities\`
      WHERE createdAt >= FORMAT_TIMESTAMP('%Y-%m-%dT%H:%M:%S', TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL 30 DAY))
      GROUP BY locationId
    `;

    // Query 3: Spend per account
    const spendQuery = `
      SELECT CAST(account_id AS STRING) as metaAccountId,
             ROUND(SUM(spend), 2) as totalSpend,
             SUM(impressions) as totalImpressions,
             SUM(inline_link_clicks) as totalClicks,
             ROUND(AVG(ctr), 4) as avgCtr
      FROM \`dance-reporting.facebook_ads.basic_campaign\`
      WHERE date >= DATE_SUB(CURRENT_DATE(), INTERVAL 30 DAY)
      GROUP BY account_id
    `;

    const [leadsData, opportunitiesData, spendData] = await Promise.all([
      bigqueryClient.query({ query: leadsQuery }),
      bigqueryClient.query({ query: opportunitiesQuery }),
      bigqueryClient.query({ query: spendQuery })
    ]);

    const leads = leadsData[0];
    const opportunities = opportunitiesData[0];
    const spend = spendData[0];

    // Create lookup maps
    const leadsMap = {};
    const opportunitiesMap = {};
    const spendMap = {};

    leads.forEach(row => {
      leadsMap[row.locationId] = row.leads || 0;
    });

    opportunities.forEach(row => {
      opportunitiesMap[row.locationId] = row.opportunities || 0;
    });

    spend.forEach(row => {
      spendMap[row.metaAccountId] = {
        totalSpend: parseFloat(row.totalSpend) || 0,
        totalImpressions: row.totalImpressions || 0,
        totalClicks: row.totalClicks || 0,
        avgCtr: parseFloat(row.avgCtr) || 0
      };
    });

    // Build results
    const results = [];

    CLIENTS.forEach(client => {
      const clientLeads = leadsMap[client.ghlLocationId] || 0;
      const clientOpportunities = opportunitiesMap[client.ghlLocationId] || 0;
      const clientSpend = spendMap[client.metaAccountId] || { totalSpend: 0, totalImpressions: 0, totalClicks: 0, avgCtr: 0 };

      const totalSpend = clientSpend.totalSpend;
      const cpl = clientLeads > 0 ? totalSpend / clientLeads : null;
      const status = getHealthStatus(totalSpend, clientLeads, clientOpportunities);

      // Calculate additional metrics
      const conversionRate = clientLeads > 0 ? (clientOpportunities / clientLeads) * 100 : 0;
      const roas = totalSpend > 0 ? (clientOpportunities * 150) / totalSpend : 0; // Assume $150 value per appointment

      results.push({
        id: client.id,
        name: client.name,
        accountManager: client.accountManager,
        status: status,
        statusReason: getStatusReason(status, cpl || 0, clientOpportunities, totalSpend),
        metrics: {
          monthlySpend: totalSpend,
          leads: clientLeads,
          costPerLead: cpl ? parseFloat(cpl.toFixed(2)) : null,
          appointmentsBooked: clientOpportunities,
          conversionRate: parseFloat(conversionRate.toFixed(2)),
          roas: parseFloat(roas.toFixed(2))
        }
      });
    });

    const queryTime = Date.now() - startTime;
    console.log(`BigQuery query completed in ${queryTime}ms`);

    // Cache results
    cachedAccounts = results;
    cacheTimestamp = Date.now();

    return results;
  } catch (error) {
    console.error('Error fetching accounts from BigQuery:', error.message);
    console.log('Falling back to demo data');
    return DEMO_DATA.accounts;
  }
}

async function getAccountById(id) {
  try {
    const allAccounts = await getAllAccounts();
    const account = allAccounts.find(a => a.id === id);

    if (!account) {
      throw new Error(`Account ${id} not found`);
    }

    // Add campaigns for this account
    const campaigns = await getAccountCampaigns(id);
    account.campaigns = campaigns;

    return account;
  } catch (error) {
    console.error('Error fetching account by ID:', error.message);
    throw error;
  }
}

async function getAccountCampaigns(locationId) {
  try {
    const client = CLIENTS.find(c => c.ghlLocationId === locationId);

    if (!client) {
      throw new Error(`Client with location ${locationId} not found`);
    }

    if (!isConnected || !bigqueryClient) {
      return [];
    }

    // Query per-day rows so we can build a proper dailyMetrics array per campaign
    const query = `
      SELECT campaign_id, campaign_name,
             date,
             ROUND(SUM(spend), 2) as dailySpend,
             SUM(impressions) as dailyImpressions,
             SUM(inline_link_clicks) as dailyClicks,
             ROUND(AVG(ctr), 4) as avgCtr
      FROM \`dance-reporting.facebook_ads.basic_campaign\`
      WHERE CAST(account_id AS STRING) = @metaAccountId
      AND date >= DATE_SUB(CURRENT_DATE(), INTERVAL 30 DAY)
      GROUP BY campaign_id, campaign_name, date
      ORDER BY campaign_id, date ASC
    `;

    const options = {
      query: query,
      params: {
        metaAccountId: client.metaAccountId
      }
    };

    const [rows] = await bigqueryClient.query(options);

    // Group rows by campaign_id, building dailyMetrics array
    const campaignMap = {};
    rows.forEach(row => {
      const id = String(row.campaign_id);
      if (!campaignMap[id]) {
        campaignMap[id] = {
          id,
          name: row.campaign_name,
          totalSpend: 0,
          totalClicks: 0,
          totalImpressions: 0,
          lastDate: null,
          lastAvgCtr: 0,
          dailyMetrics: []
        };
      }
      const c = campaignMap[id];
      const daySpend = parseFloat(row.dailySpend) || 0;
      const dayClicks = parseInt(row.dailyClicks) || 0;
      c.dailyMetrics.push({
        date: row.date,
        spend: daySpend,
        leads: 0,
        appointments: 0
      });
      c.totalSpend += daySpend;
      c.totalClicks += dayClicks;
      c.totalImpressions += parseInt(row.dailyImpressions) || 0;
      c.lastDate = row.date; // rows ordered ASC, so last = most recent
      c.lastAvgCtr = parseFloat(row.avgCtr) || 0;
    });

    return Object.values(campaignMap).map(c => {
      const cpl = c.totalClicks > 0 ? c.totalSpend / c.totalClicks : null;
      const roas = c.totalSpend > 0 ? (c.totalClicks * 30) / c.totalSpend : 0;
      const daysAgo = c.lastDate
        ? Math.floor((new Date() - new Date(c.lastDate)) / (1000 * 60 * 60 * 24))
        : 999;
      const isActive = daysAgo <= 7;

      return {
        id: c.id,
        name: c.name,
        status: isActive ? 'active' : 'paused',
        offerType: inferOfferType(c.name),
        currentCPL: cpl ? parseFloat(cpl.toFixed(2)) : null,
        currentCTR: parseFloat((c.lastAvgCtr * 100).toFixed(2)),
        currentRoas: parseFloat(roas.toFixed(2)),
        dailyMetrics: c.dailyMetrics
      };
    }).sort((a, b) => {
      const spendA = a.dailyMetrics.reduce((s, d) => s + d.spend, 0);
      const spendB = b.dailyMetrics.reduce((s, d) => s + d.spend, 0);
      return spendB - spendA;
    });
  } catch (error) {
    console.error('Error fetching campaigns:', error.message);
    return [];
  }
}

async function getDailyMetrics(metaAccountId, campaignId = null) {
  try {
    if (!isConnected || !bigqueryClient) {
      return [];
    }

    let query = `
      SELECT date,
             ROUND(SUM(spend), 2) as spend,
             SUM(impressions) as impressions,
             SUM(inline_link_clicks) as clicks
      FROM \`dance-reporting.facebook_ads.basic_campaign\`
      WHERE CAST(account_id AS STRING) = @metaAccountId
    `;

    const params = {
      metaAccountId: metaAccountId
    };

    if (campaignId) {
      query += ` AND campaign_id = @campaignId`;
      params.campaignId = campaignId;
    }

    query += `
      AND date >= DATE_SUB(CURRENT_DATE(), INTERVAL 14 DAY)
      GROUP BY date
      ORDER BY date ASC
    `;

    const options = {
      query: query,
      params: params
    };

    const [rows] = await bigqueryClient.query(options);

    return rows.map(row => ({
      date: row.date,
      spend: row.spend || 0,
      impressions: row.impressions || 0,
      clicks: row.clicks || 0
    }));
  } catch (error) {
    console.error('Error fetching daily metrics:', error.message);
    return [];
  }
}

async function getOverviewStats() {
  try {
    const accounts = await getAllAccounts();

    const stats = {
      totalAccounts: accounts.filter(a => a.status !== 'unknown').length,
      accountsByStatus: {
        green: 0,
        yellow: 0,
        red: 0,
        unknown: 0
      },
      totalSpend: 0,
      totalLeads: 0,
      avgCPL: 0,
      totalAppointments: 0
    };

    accounts.forEach(account => {
      stats.accountsByStatus[account.status]++;
      stats.totalSpend += account.metrics.monthlySpend || 0;
      stats.totalLeads += account.metrics.leads || 0;
      stats.totalAppointments += account.metrics.appointmentsBooked || 0;
    });

    // Calculate average CPL
    if (stats.totalLeads > 0) {
      stats.avgCPL = parseFloat((stats.totalSpend / stats.totalLeads).toFixed(2));
    }

    stats.totalSpend = parseFloat(stats.totalSpend.toFixed(2));

    return stats;
  } catch (error) {
    console.error('Error fetching overview stats:', error.message);
    throw error;
  }
}

async function getCampaignById(campaignId) {
  try {
    if (!isConnected || !bigqueryClient) {
      return null;
    }

    const query = `
      SELECT campaign_id, campaign_name,
             date,
             ROUND(SUM(spend), 2) as dailySpend,
             SUM(impressions) as dailyImpressions,
             SUM(inline_link_clicks) as dailyClicks,
             ROUND(AVG(ctr), 4) as dailyAvgCtr
      FROM \`dance-reporting.facebook_ads.basic_campaign\`
      WHERE CAST(campaign_id AS STRING) = @campaignId
      AND date >= DATE_SUB(CURRENT_DATE(), INTERVAL 14 DAY)
      GROUP BY campaign_id, campaign_name, date
      ORDER BY date ASC
    `;

    const [rows] = await bigqueryClient.query({
      query,
      params: { campaignId: String(campaignId) }
    });

    if (rows.length === 0) return null;

    const dailyMetrics = rows.map(row => ({
      date: row.date,
      spend: parseFloat(row.dailySpend) || 0,
      impressions: parseInt(row.dailyImpressions) || 0,
      clicks: parseInt(row.dailyClicks) || 0,
      leads: 0 // Leads from GHL, not in Meta data per day
    }));

    const totalSpend = dailyMetrics.reduce((sum, d) => sum + d.spend, 0);
    const totalClicks = dailyMetrics.reduce((sum, d) => sum + d.clicks, 0);
    const avgCtr = rows.length > 0 ? parseFloat(rows[rows.length - 1].dailyAvgCtr) : 0;

    return {
      id: String(rows[0].campaign_id),
      name: rows[0].campaign_name,
      offerType: inferOfferType(rows[0].campaign_name),
      status: 'active',
      currentCPL: null,
      currentCTR: parseFloat((avgCtr * 100).toFixed(2)),
      currentRoas: null,
      totalSpend: parseFloat(totalSpend.toFixed(2)),
      totalClicks,
      dailyMetrics
    };
  } catch (error) {
    console.error('Error fetching campaign by ID:', error.message);
    return null;
  }
}

function getConnectedStatus() {
  return isConnected;
}

module.exports = {
  initialize,
  isConnected: getConnectedStatus,
  getAllAccounts,
  getAccountById,
  getAccountCampaigns,
  getCampaignById,
  getDailyMetrics,
  getOverviewStats,
  testConnection
};
