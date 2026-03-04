import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';

function AccountCard({ account }) {
  const navigate = useNavigate();

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

  const getStatusClass = (status) => {
    return `status-${status.toLowerCase()}`;
  };

  const handleClick = () => {
    navigate(`/accounts/${account.id}`);
  };

  const statusColor = getStatusColor(account.status);

  return (
    <div
      className={`account-card ${getStatusClass(account.status)}`}
      onClick={handleClick}
      style={{ borderLeftColor: statusColor }}
    >
      <div className="card-top">
        <div className="card-main">
          <h2 className="account-name">{account.name}</h2>
          <p className="account-manager">{account.accountManager}</p>
        </div>
        <div className="status-indicator-wrapper">
          <div
            className={`status-indicator ${account.status.toLowerCase()}`}
            style={{
              backgroundColor: statusColor,
            }}
          />
          {account.status.toLowerCase() === 'red' && (
            <AlertCircle className="status-alert-icon" />
          )}
        </div>
      </div>

      <p className="status-reason">{account.statusReason}</p>

      <div className="metrics-grid">
        <div className="metric">
          <span className="metric-label">Monthly Spend</span>
          <span className="metric-value">
            ${account.metrics.monthlySpend.toLocaleString('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
        </div>
        <div className="metric">
          <span className="metric-label">CPL</span>
          <span className="metric-value">${account.metrics.costPerLead.toFixed(2)}</span>
        </div>
        <div className="metric">
          <span className="metric-label">Leads</span>
          <span className="metric-value">{account.metrics.leads}</span>
        </div>
        <div className="metric">
          <span className="metric-label">Appointments</span>
          <span className="metric-value">{account.metrics.appointmentsBooked}</span>
        </div>
        <div className="metric">
          <span className="metric-label">ROAS</span>
          <span className="metric-value">{account.metrics.roas.toFixed(2)}x</span>
        </div>
      </div>
    </div>
  );
}

export default AccountCard;
