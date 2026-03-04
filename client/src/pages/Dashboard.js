import React, { useState, useEffect } from 'react';
import OverviewCards from '../components/OverviewCards';
import StatusFilter from '../components/StatusFilter';
import AccountCard from '../components/AccountCard';
import { getAccounts, getOverview } from '../utils/api';

function Dashboard() {
  const [accounts, setAccounts] = useState([]);
  const [summary, setSummary] = useState(null);
  const [filteredAccounts, setFilteredAccounts] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedManager, setSelectedManager] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [accountsList, overviewData] = await Promise.all([
        getAccounts(),
        getOverview(),
      ]);

      setAccounts(accountsList);
      setSummary(overviewData);
      setError(null);
    } catch (err) {
      console.error('Failed to fetch data:', err);
      setError('Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let filtered = [...accounts];

    // Filter by status
    if (selectedStatus !== 'All') {
      filtered = filtered.filter(
        (acc) => acc.status.toLowerCase() === selectedStatus.toLowerCase()
      );
    }

    // Filter by manager
    if (selectedManager) {
      filtered = filtered.filter((acc) => acc.accountManager === selectedManager);
    }

    // Sort
    switch (sortBy) {
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'status':
        const statusOrder = { red: 0, yellow: 1, green: 2 };
        filtered.sort(
          (a, b) =>
            statusOrder[a.status.toLowerCase()] -
            statusOrder[b.status.toLowerCase()]
        );
        break;
      case 'cpl':
        filtered.sort((a, b) => a.metrics.costPerLead - b.metrics.costPerLead);
        break;
      case 'spend':
        filtered.sort((a, b) => b.metrics.monthlySpend - a.metrics.monthlySpend);
        break;
      default:
        break;
    }

    setFilteredAccounts(filtered);
  }, [accounts, selectedStatus, selectedManager, sortBy]);

  const getManagers = () => {
    return [...new Set(accounts.map((acc) => acc.accountManager))].sort();
  };

  const getStatusCounts = () => {
    return {
      all: accounts.length,
      green: accounts.filter((a) => a.status.toLowerCase() === 'green').length,
      yellow: accounts.filter((a) => a.status.toLowerCase() === 'yellow').length,
      red: accounts.filter((a) => a.status.toLowerCase() === 'red').length,
    };
  };

  if (loading) {
    return (
      <div className="dashboard-container">
        <div className="loading">Loading dashboard...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard-container">
        <div className="error-message">{error}</div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <OverviewCards summary={summary} />

      <div className="dashboard-controls">
        <StatusFilter
          selectedStatus={selectedStatus}
          onStatusChange={setSelectedStatus}
          selectedManager={selectedManager}
          onManagerChange={setSelectedManager}
          managers={getManagers()}
          statusCounts={getStatusCounts()}
        />

        <div className="sort-control">
          <label htmlFor="sort-select">Sort by:</label>
          <select
            id="sort-select"
            className="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="name">Client Name</option>
            <option value="status">Status Severity</option>
            <option value="cpl">Cost Per Lead</option>
            <option value="spend">Monthly Spend</option>
          </select>
        </div>
      </div>

      <div className="accounts-grid">
        {filteredAccounts.length > 0 ? (
          filteredAccounts.map((account) => (
            <AccountCard key={account.id} account={account} />
          ))
        ) : (
          <div className="empty-state">No accounts match your filters</div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
