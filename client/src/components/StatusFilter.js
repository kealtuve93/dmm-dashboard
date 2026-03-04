import React from 'react';

function StatusFilter({
  selectedStatus,
  onStatusChange,
  selectedManager,
  onManagerChange,
  managers,
  statusCounts,
}) {
  const statuses = ['All', 'Green', 'Yellow', 'Red'];

  return (
    <div className="status-filter">
      <div className="filter-section">
        <div className="status-buttons">
          {statuses.map((status) => (
            <button
              key={status}
              className={`status-button ${selectedStatus === status ? 'active' : ''}`}
              onClick={() => onStatusChange(status)}
            >
              {status}
              <span className="badge">
                {statusCounts[status.toLowerCase()] || 0}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <label htmlFor="manager-select" className="filter-label">
          Account Manager
        </label>
        <select
          id="manager-select"
          className="manager-select"
          value={selectedManager}
          onChange={(e) => onManagerChange(e.target.value)}
        >
          <option value="">All Managers</option>
          {managers.map((manager) => (
            <option key={manager} value={manager}>
              {manager}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default StatusFilter;
