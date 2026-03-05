import React from 'react';
import { TrendingUp, DollarSign, Target, Calendar } from 'lucide-react';

function OverviewCards({ summary }) {
  const cards = [
    {
      title: 'Total Active Accounts',
      value: summary?.totalAccounts || 0,
      icon: TrendingUp,
      color: 'blue',
    },
    {
      title: 'Total Monthly Spend',
      value: `$${(summary?.totalSpend || 0).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`,
      icon: DollarSign,
      color: 'green',
    },
    {
      title: 'Average Cost Per Lead',
      value: `$${(summary?.avgCPL || 0).toFixed(2)}`,
      icon: Target,
      color: 'purple',
    },
    {
      title: 'Total Opportunities',
      value: summary?.totalOpportunities || 0,
      icon: Calendar,
      color: 'orange',
    },
  ];

  return (
    <div className="overview-cards">
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <div key={index} className={`overview-card overview-card-${card.color}`}>
            <div className="card-header">
              <h3 className="card-title">{card.title}</h3>
              <Icon className="card-icon" />
            </div>
            <div className="card-value">{card.value}</div>
          </div>
        );
      })}
    </div>
  );
}

export default OverviewCards;
