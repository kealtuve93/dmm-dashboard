# Dance Motion Marketing Dashboard - Backend Server

Express.js backend server for the Dance Motion Marketing dashboard. Manages Meta (Facebook/Instagram) ad campaigns for dance studios with real-time health monitoring and metrics.

## Files Overview

### 1. **package.json**
Core project configuration with dependencies:
- `express` - Web framework
- `cors` - Cross-Origin Resource Sharing
- `@google-cloud/bigquery` - BigQuery integration
- `dotenv` - Environment variable management

### 2. **index.js** (7.0 KB)
Main Express server with 6 API endpoints:
- `GET /api/health` - Server health check (returns connection status, mode, version)
- `GET /api/accounts` - All client accounts with status badges
- `GET /api/accounts/:id` - Single account details
- `GET /api/accounts/:id/campaigns` - All campaigns for an account
- `GET /api/campaigns/:id` - Detailed campaign metrics and daily performance
- `GET /api/overview` - Summary statistics across all accounts

**Features:**
- Auto-detects BigQuery availability on startup
- Logs operation mode (BIGQUERY or DEMO)
- CORS-enabled for frontend integration
- Comprehensive error handling
- Request validation

### 3. **bigquery.js** (8.4 KB)
BigQuery connector module with seamless fallback to demo data:

**Key Functions:**
- `initialize()` - Loads credentials from `../config/bigquery-credentials.json`
- `isConnected()` - Tests connection status
- `getAllAccounts()` - Retrieves all accounts
- `getAccountById(id)` - Single account lookup
- `getAccountCampaigns(id)` - Account's campaigns with metrics
- `getCampaignById(id)` - Full campaign details
- `getOverviewStats()` - Dashboard summary statistics

**Fallback Behavior:**
- If credentials file not found → Demo Mode
- If BigQuery connection fails → Demo Mode
- All queries automatically use demo data when BigQuery unavailable
- No manual switching required

### 4. **demo-data.js** (26 KB)
Realistic demo dataset for 15 dance studio accounts:

**Accounts Include:**
- **Rhythm & Flow Dance Academy** (green) - $2,800/month, 3.2 ROAS
- **Elite Dance Studio** (green) - $4,200/month, 2.8 ROAS
- **Grace Dance Center** (yellow) - CPL rising ($29.03), needs optimization
- **Urban Groove Dance** (green) - Strong hip hop focus, 3.1 ROAS
- **Pirouette Academy** (red) - High spend, low conversion ($56.18 CPL)
- **DanceFit Studios** (green) - Fitness-focused, 3.4 ROAS
- **Star Step Dance School** (yellow) - Declining appointments
- **Motion Arts Academy** (green) - Multi-style focus, 3.3 ROAS
- **Ballroom Bliss** (green) - Niche market strength, 2.9 ROAS
- **Hip Hop Haven** (red) - No leads in 3 days
- **Tiny Dancers Academy** (green) - Kids segment, 3.2 ROAS
- **Salsa Soul Studio** (yellow) - Moderate performance, 1.9 ROAS
- **Jazz Hands Academy** (green) - 3.1 ROAS
- **Contemporary Edge** (green) - Modern dance niche, 3.0 ROAS
- **Dance Dynasty** (green) - Family appeal, 3.2 ROAS

**Account Manager Assignments:**
- Sarah Mitchell
- Jake Rivera
- Priya Patel

**Account Structure:**
```javascript
{
  id: "acc_001",
  name: "Rhythm & Flow Dance Academy",
  accountManager: "Sarah Mitchell",
  status: "green|yellow|red",
  statusReason: "explanation",
  metrics: {
    monthlySpend: 2800,
    leads: 156,
    costPerLead: 17.95,
    appointmentsBooked: 34,
    conversionRate: 21.79,
    roas: 3.2
  },
  campaigns: [
    {
      id: "camp_001_a",
      name: "Summer Intensive Program",
      status: "active|paused",
      objective: "Lead Generation",
      offerType: "Summer Camp|Free Class|Intro Offer|Competition Prep|Wedding Package",
      currentCPL: 16.50,
      currentCTR: 4.2,
      currentRoas: 3.5,
      dailyMetrics: [
        { date: "2026-02-19", spend: 120.50, impressions: 3250, clicks: 96, leads: 8.2, appointments: 1.9 },
        ...
      ],
      adSets: [
        { id: "ads_001_a1", name: "Ages 8-12 Target", targeting: "Parents, ages 25-45, interested in dance" }
      ]
    }
  ]
}
```

**Health Status Thresholds:**
- **Green** ✓: CPL < $25, appointments > 5/week, ROAS > 2.0
- **Yellow** ⚠**: CPL $25-40, OR appointments 2-5/week, OR ROAS 1.0-2.0
- **Red** ✗: CPL > $40, OR appointments < 2/week, OR ROAS < 1.0

**Realistic Metrics:**
- Monthly budgets: $500-$5,000
- CPL range: $8-$50
- Daily metrics generated with realistic variance
- 2-4 campaigns per account
- 14-day historical data per campaign
- Multiple ad sets with targeting details

### 5. **.env.example**
Environment configuration template:
```
PORT=3001
BIGQUERY_PROJECT_ID=dance-reporting
BIGQUERY_CREDENTIALS_PATH=../config/bigquery-credentials.json
DEMO_MODE=auto
```

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Environment**
   ```bash
   cp .env.example .env
   ```

3. **Add BigQuery Credentials (Optional)**
   - Create `../config/bigquery-credentials.json` for real BigQuery connection
   - Without this file, server automatically runs in Demo Mode

4. **Start Server**
   ```bash
   npm start
   # or for development
   npm run dev
   ```

5. **Verify Health**
   ```bash
   curl http://localhost:3001/api/health
   ```

## API Response Format

All endpoints return consistent JSON structure:

**Success Response:**
```json
{
  "success": true,
  "mode": "BIGQUERY|DEMO",
  "data": { ... }
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "Human-readable error message",
  "message": "Technical details"
}
```

## Operation Modes

**BIGQUERY Mode:**
- Queries live data from BigQuery database
- Requires valid `bigquery-credentials.json`
- Project ID: `dance-reporting`

**DEMO Mode:**
- Uses realistic demo dataset (15 accounts, 30+ campaigns)
- No external dependencies needed
- Perfect for development and testing
- Automatically activated if BigQuery unavailable

## Sample API Calls

### Get Health Status
```bash
curl http://localhost:3001/api/health
```

### List All Accounts
```bash
curl http://localhost:3001/api/accounts
```

### Get Account Details
```bash
curl http://localhost:3001/api/accounts/acc_001
```

### Get Account's Campaigns
```bash
curl http://localhost:3001/api/accounts/acc_001/campaigns
```

### Get Campaign Details
```bash
curl http://localhost:3001/api/campaigns/camp_001_a
```

### Get Dashboard Overview
```bash
curl http://localhost:3001/api/overview
```

## Key Features

- **Automatic Mode Detection** - Seamlessly switches between BigQuery and Demo data
- **Comprehensive Error Handling** - Detailed error messages for debugging
- **CORS-Enabled** - Ready for frontend integration
- **Request Validation** - Validates all inputs
- **Realistic Demo Data** - 15 accounts with varied performance scenarios
- **Daily Metrics** - 14-day historical data for trend analysis
- **Multiple Account Managers** - Sarah Mitchell, Jake Rivera, Priya Patel
- **Diverse Offer Types** - Summer Camp, Free Class, Intro Offer, Competition Prep, Wedding Package
- **Health Status System** - Green/Yellow/Red indicators with thresholds

## Technology Stack

- Node.js/Express.js - Web framework
- Google Cloud BigQuery - Data warehouse (optional)
- CORS - Cross-origin request handling
- Dotenv - Configuration management

## Port

Default: `3001` (configurable via PORT environment variable)

## Notes

- All timestamps in ISO 8601 format
- Metrics calculations performed server-side
- Demo data includes realistic variance in daily metrics
- No authentication required for demo/evaluation purposes
