import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import CampaignRow from '../components/CampaignRow';
import PerformanceChart from '../components/PerformanceChart';
import { getAccountById, getCampaigns } from '../utils/api';

function AccountDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [account, setAccount] = useState(null);
  const [campaigns, setCampaigns] = useState([]);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAccountData();
  }, [id]);

  useEffect(() => {
    if (selectedCampaign && selectedCampaign.dailyMetrics) {
      setChartData(selectedCampaign.dailyMetrics);
    }
  }, [selectedCampaign]);

  const fetchAccountData = async () => {
    try {
      setLoading(true);
      const [accountData, campaignsList] = await Promise.all([
        getAccountById(id),
        getCampaigns(id),
      ]);

      setAccount(accountData);
      setCampaigns(campaignsList);

      // Auto-select first campaign
      if (campaignsList.length > 0) {
        setSelectedCampaign(campaignsList[0]);
      }

      setError(null);
    } catch (err) {
      console.error('Failed to fetch account data:', err);
      setError('Failed to load account details');
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'green':
        return '#22c55e';
      case 'yellow':
        return '#eab308';
      case 'red':
        return '#ef4444';
      default:
        return '#6b7280';
    }
  };

  if (loading) {
    return (
      <div className="detail-container">
        <div className="loading">Loading account details...</div>
      </div>
    );
  }

  if (error || !account) {
    return (
      <div className="detail-container">
        <button className="back-button" onClick={() => navigate('/')}>
          <ArrowLeft size={20} />
          Back to Dashboard
        </button>
        <div className="error-message">{error || 'Account not found'}</div>
      </div>
    );
  }

  return (
    <div className="detail-container">
      <button className="back-button" onClick={() => navigate('/')}>
        <ArrowLeft size={20} />
        Back to Dashboard
      </button>

      <div className="account-header">
        <div className="header-left">
          <h1 className="account-title">{account.name}</h1>
          <p className="account-manager-detail">
            Account Manager: {account.accountManager}
          </p>
        </div>
        <div className="header-status">
          <div
            className="status-badge-large"
            style={{ backgroundColor: getStatusColor(account.status) }}
          >
            {account.status}
          </div>
          <p className="status-text">{account.statusReason}</p>
        </div>
      </div>

      <div className="metrics-row">
        <div className="metric-card">
          <span className="metric-label">Monthly Spend</span>
          <span className="metric-value">
            ${(account.metrics.monthlySpend ?? 0).toLocaleString('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
        </div>
        <div className="metric-card">
          <span className="metric-label">Cost Per Lead</span>
          <span className="metric-value">${(account.metrics.costPerLead ?? 0).toFixed(2)}</span>
        </div>
        <div className="metric-card">
          <span className="metric-label">Total Leads</span>
          <span className="metric-value">{account.metrics.leads}</span>
        </div>
        <div className="metric-card">
          <span className="metric-label">Appointments Booked</span>
          <span className="metric-value">{account.metrics.appointmentsBooked}</span>
        </div>
        <div className="metric-card">
          <span className="metric-label">ROAS</span>
          <span className="metric-value">{(account.metrics.roas ?? 0).toFixed(2)}x</span>
        </div>
      </div>

      <div className="campaigns-section">
        <h2 className="section-title">Campaigns</h2>
        <div className="campaigns-list">
          {campaigns.map((campaign) => (
            <CampaignRow
              key={campaign.id}
              campaign={campaign}
              onSelect={() => setSelectedCampaign(campaign)}
              isSelected={selectedCampaign?.id === campaign.id}
            />
          ))}
        </div>
      </div>

      {selectedCampaign && chartData.length > 0 && (
        <div className="chart-section">
          <h2 className="section-title">
            Performance: {selectedCampaign.name} (Last 14 Days)
          </h2>
          <PerformanceChart data={chartData} chartType="line" />
        </div>
      )}
    </div>
  );
}

export default AccountDetail;
