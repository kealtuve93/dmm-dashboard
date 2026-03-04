import React from 'react';
import { Pause, Play } from 'lucide-react';

function CampaignRow({ campaign, onSelect, isSelected }) {
  const getStatusBadgeColor = (status) => {
    return status.toLowerCase() === 'active' ? '#22c55e' : '#ef4444';
  };

  const getHealthColor = (cpl) => {
    if (cpl < 25) return '#22c55e';
    if (cpl < 40) return '#eab308';
    return '#ef4444';
  };

  const statusIcon = campaign.status.toLowerCase() === 'active' ? <Play size={14} /> : <Pause size={14} />;

  // Compute totals from dailyMetrics if available
  const totalSpend = campaign.dailyMetrics
    ? campaign.dailyMetrics.reduce((sum, d) => sum + d.spend, 0)
    : 0;
  const totalLeads = campaign.dailyMetrics
    ? campaign.dailyMetrics.reduce((sum, d) => sum + d.leads, 0)
    : 0;
  const totalAppointments = campaign.dailyMetrics
    ? campaign.dailyMetrics.reduce((sum, d) => sum + d.appointments, 0)
    : 0;

  return (
    <div
      className={`campaign-row ${isSelected ? 'selected' : ''}`}
      onClick={onSelect}
    >
      <div className="campaign-name-section">
        <div className="campaign-name">{campaign.name}</div>
        <div className="campaign-info">
          <span
            className="status-badge"
            style={{ backgroundColor: getStatusBadgeColor(campaign.status) }}
          >
            {statusIcon}
            {campaign.status}
          </span>
          <span className="offer-type">{campaign.offerType}</span>
        </div>
      </div>

      <div className="campaign-metrics">
        <div className="metric-item">
          <span className="metric-label">Spend</span>
          <span className="metric-value">
            ${totalSpend.toLocaleString('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
        </div>
        <div className="metric-item">
          <span className="metric-label">CPL</span>
          <span className="metric-value">${campaign.currentCPL.toFixed(2)}</span>
        </div>
        <div className="metric-item">
          <span className="metric-label">Leads</span>
          <span className="metric-value">{totalLeads}</span>
        </div>
        <div className="metric-item">
          <span className="metric-label">Appointments</span>
          <span className="metric-value">{totalAppointments}</span>
        </div>
        <div className="metric-item">
          <span className="metric-label">CTR</span>
          <span className="metric-value">{campaign.currentCTR.toFixed(2)}%</span>
        </div>
        <div className="metric-item">
          <span className="metric-label">ROAS</span>
          <span className="metric-value">{campaign.currentRoas.toFixed(2)}x</span>
        </div>
      </div>

      <div
        className="campaign-health"
        style={{ backgroundColor: getHealthColor(campaign.currentCPL) }}
        title={`CPL: $${campaign.currentCPL.toFixed(2)}`}
      />
    </div>
  );
}

export default CampaignRow;
