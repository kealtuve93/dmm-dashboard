// Dance Motion Marketing Dashboard - Express Backend Server
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');
const bigquery = require('./bigquery');

// Constants
const PORT = process.env.PORT || 3001;
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// In production: serve the built React app as static files
if (IS_PRODUCTION) {
  const buildPath = path.join(__dirname, '../client/build');
  app.use(express.static(buildPath));
}

// Track operation mode
let operationMode = 'LOADING';

/**
 * Startup - Initialize BigQuery and determine operation mode
 */
async function startup() {
  console.log('');
  console.log('=========================================');
  console.log('Dance Motion Marketing Dashboard Server');
  console.log('=========================================');
  console.log('Starting up...');

  try {
    // initialize() is called on module load; call again here to await it and get the result
    const bigqueryAvailable = await bigquery.initialize();

    if (bigqueryAvailable) {
      operationMode = 'BIGQUERY';
      console.log('[MODE] Operating with LIVE BigQuery data');
    } else {
      operationMode = 'DEMO';
      console.log('[MODE] Operating in Demo Mode (BigQuery not available)');
      console.log('[HINT] Add bigquery-credentials.json to /config/ for live data');
    }

    console.log(`[PORT] Listening on http://localhost:${PORT}`);
    console.log('');
    console.log('Available endpoints:');
    console.log('  GET  /api/health');
    console.log('  GET  /api/accounts');
    console.log('  GET  /api/accounts/:id');
    console.log('  GET  /api/accounts/:id/campaigns');
    console.log('  GET  /api/campaigns/:id');
    console.log('  GET  /api/overview');
    console.log('=========================================');
    console.log('');
  } catch (error) {
    console.error('Startup error:', error);
    operationMode = 'DEMO';
    console.log('[MODE] Falling back to Demo Mode');
  }
}

// ============================================
// API Routes
// ============================================

/**
 * GET /api/health
 * Server health check endpoint
 */
app.get('/api/health', async (req, res) => {
  const bigqueryConnected = await bigquery.isConnected();

  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    operationMode,
    bigqueryConnected,
    version: '1.0.0'
  });
});

/**
 * GET /api/accounts
 * Returns all client accounts with health status
 */
app.get('/api/accounts', async (req, res) => {
  try {
    const accounts = await bigquery.getAllAccounts();

    // Format response with summary metrics
    const accountsSummary = accounts.map(account => ({
      id: account.id,
      name: account.name,
      accountManager: account.accountManager,
      status: account.status,
      statusReason: account.statusReason,
      metrics: {
        monthlySpend: account.metrics.monthlySpend,
        leads: account.metrics.leads,
        costPerLead: account.metrics.costPerLead,
        appointmentsBooked: account.metrics.appointmentsBooked,
        conversionRate: account.metrics.conversionRate,
        roas: account.metrics.roas
      }
    }));

    res.json({
      success: true,
      mode: operationMode,
      count: accountsSummary.length,
      accounts: accountsSummary
    });
  } catch (error) {
    console.error('Error fetching accounts:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch accounts',
      message: error.message
    });
  }
});

/**
 * GET /api/accounts/:id
 * Returns single account details
 */
app.get('/api/accounts/:id', async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        error: 'Account ID is required'
      });
    }

    const account = await bigquery.getAccountById(id);

    if (!account) {
      return res.status(404).json({
        success: false,
        error: `Account with ID ${id} not found`
      });
    }

    res.json({
      success: true,
      mode: operationMode,
      account
    });
  } catch (error) {
    console.error(`Error fetching account ${req.params.id}:`, error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch account',
      message: error.message
    });
  }
});

/**
 * GET /api/accounts/:id/campaigns
 * Returns campaigns for an account
 */
app.get('/api/accounts/:id/campaigns', async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        error: 'Account ID is required'
      });
    }

    const campaigns = await bigquery.getAccountCampaigns(id);

    if (!campaigns) {
      return res.status(404).json({
        success: false,
        error: `No campaigns found for account ${id}`
      });
    }

    res.json({
      success: true,
      mode: operationMode,
      accountId: id,
      count: campaigns.length,
      campaigns
    });
  } catch (error) {
    console.error(`Error fetching campaigns for account ${req.params.id}:`, error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch campaigns',
      message: error.message
    });
  }
});

/**
 * GET /api/campaigns/:id
 * Returns detailed campaign metrics
 */
app.get('/api/campaigns/:id', async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        error: 'Campaign ID is required'
      });
    }

    const campaign = await bigquery.getCampaignById(id);

    if (!campaign) {
      return res.status(404).json({
        success: false,
        error: `Campaign with ID ${id} not found`
      });
    }

    res.json({
      success: true,
      mode: operationMode,
      campaign
    });
  } catch (error) {
    console.error(`Error fetching campaign ${req.params.id}:`, error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch campaign',
      message: error.message
    });
  }
});

/**
 * GET /api/overview
 * Returns summary stats (total accounts, total spend, avg CPL, etc.)
 */
app.get('/api/overview', async (req, res) => {
  try {
    const stats = await bigquery.getOverviewStats();

    res.json({
      success: true,
      mode: operationMode,
      overview: stats
    });
  } catch (error) {
    console.error('Error fetching overview stats:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch overview stats',
      message: error.message
    });
  }
});

/**
 * Catch-all: serve React app for any non-API route (production only)
 * In development, React dev server handles this instead
 */
app.use((req, res) => {
  if (IS_PRODUCTION) {
    const buildPath = path.join(__dirname, '../client/build', 'index.html');
    res.sendFile(buildPath);
  } else {
    res.status(404).json({
      success: false,
      error: 'Endpoint not found',
      path: req.path,
      availableEndpoints: [
        'GET /api/health',
        'GET /api/accounts',
        'GET /api/accounts/:id',
        'GET /api/accounts/:id/campaigns',
        'GET /api/campaigns/:id',
        'GET /api/overview'
      ]
    });
  }
});

/**
 * Error handler
 */
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    success: false,
    error: 'Internal server error',
    message: err.message
  });
});

// ============================================
// Start Server
// ============================================

startup().then(() => {
  app.listen(PORT, () => {
    // Server started successfully
  });
});

module.exports = app;
