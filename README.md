# Dance Motion Marketing Dashboard

Real-time reporting dashboard combining Meta Ads + GoHighLevel data from BigQuery.

---

## Quick Start (on your own computer)

### 1. Prerequisites
- Node.js 18+ installed (https://nodejs.org)
- The `dance-reporting-933b7df6288c.json` BigQuery credentials file

### 2. Install dependencies
```bash
cd dance-dashboard
npm run setup
```

### 3. Add BigQuery credentials
Place your service account JSON file at:
```
dance-dashboard/config/bigquery-credentials.json
```
The file `dance-reporting-933b7df6288c.json` you already have — just copy it to that path and rename it.

### 4. Start the app
```bash
npm start
```

This starts both the backend server (port 3001) and React frontend (port 3000) simultaneously.
Open your browser to: **http://localhost:3000**

---

## What the Dashboard Shows

### Overview Header
- Total active accounts, total spend (30-day), average CPL, total appointments

### Account Cards (color-coded)
- GREEN  — CPL less than $25 AND 3+ appointments booked
- YELLOW — CPL $25-45 or 1-2 appointments
- RED    — CPL over $45 or zero appointments with active spend
- GRAY   — No ad spend data in BigQuery yet

### Account Drill-Down
Click any card to see:
- All active campaigns with CPL, CTR, offer type
- 14-day performance chart (spend + leads trend)

---

## Architecture

```
BigQuery (dance-reporting project)
  facebook_ads.basic_campaign   -- Meta Ads spend/impressions/CTR (via Fivetran)
  ghl_data.Contacts             -- GHL leads by locationId (via Airbyte)
  ghl_data.Opportunities        -- GHL appointments by locationId (via Airbyte)

server/client-mapping.js        -- 196 clients: GHL locationId to Meta account_id
server/bigquery.js              -- All BigQuery queries + 5-min caching
server/index.js                 -- Express API server (port 3001)
client/src/                     -- React frontend (port 3000)
```

---

## API Endpoints

- GET /api/health              Server and BigQuery connection status
- GET /api/accounts            All 196 client accounts with health status
- GET /api/accounts/:id        Single account detail + campaigns
- GET /api/accounts/:id/campaigns  Campaign list for an account
- GET /api/campaigns/:id       Specific campaign with 14-day daily metrics
- GET /api/overview            Aggregate stats across all accounts

---

## Demo Mode

If the BigQuery credentials file is missing or the connection fails, the server
automatically falls back to demo data with sample accounts. The dashboard will
show "DEMO" in the mode indicator.

---

## Data Notes

- Leads: Counted from ghl_data.Contacts.dateAdded (last 30 days)
- Appointments: Counted from ghl_data.Opportunities.createdAt (last 30 days)
- Spend/CTR: Aggregated from facebook_ads.basic_campaign (last 30 days)
- Attribution: Linked via client-mapping.js -- 7 Meta ad accounts mapped to GHL locations
- Cache: Account data cached for 5 minutes to reduce BigQuery query costs

## Meta Ad Account Mapping

The 7 Facebook ad accounts we identified:
- 12372313  -> Dance Gallery of South Dakota
- 13114121  -> Dancebox Studio
- 15336975  -> Rise Mvmt Studio
- 17975469  -> Elements Urban Arts Collective
- 27430259  -> Norwalk Academy of Dance
- 27485683  -> Ovation Performing Arts/Dance
- 40863703  -> Creative Dance Studio

All remaining clients in client-mapping.js have their own Meta account IDs
from the DMM Clients Master Sheet.
