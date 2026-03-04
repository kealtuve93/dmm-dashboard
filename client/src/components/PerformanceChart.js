import React from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

function PerformanceChart({ data, chartType = 'line' }) {
  if (!data || data.length === 0) {
    return (
      <div className="chart-container">
        <div className="chart-empty">No data available</div>
      </div>
    );
  }

  // Compute CPL from spend/leads for each day
  const enrichedData = data.map((d) => ({
    ...d,
    cpl: d.leads > 0 ? Math.round((d.spend / d.leads) * 100) / 100 : 0,
  }));

  if (chartType === 'line') {
    return (
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={enrichedData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey="date"
              stroke="#6b7280"
              style={{ fontSize: '12px' }}
            />
            <YAxis
              yAxisId="left"
              stroke="#6366f1"
              style={{ fontSize: '12px' }}
              label={{ value: 'CPL ($)', angle: -90, position: 'insideLeft', style: { fontSize: '11px' } }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              stroke="#22c55e"
              style={{ fontSize: '12px' }}
              label={{ value: 'Leads', angle: 90, position: 'insideRight', style: { fontSize: '11px' } }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1a1a2e',
                border: '1px solid #6366f1',
                borderRadius: '6px',
                color: '#fff',
              }}
              formatter={(value, name) => {
                if (name === 'Cost Per Lead ($)') return [`$${value}`, name];
                return [value, name];
              }}
            />
            <Legend wrapperStyle={{ paddingTop: '16px' }} />
            <Line
              type="monotone"
              dataKey="cpl"
              stroke="#6366f1"
              name="Cost Per Lead ($)"
              strokeWidth={2}
              dot={{ fill: '#6366f1', r: 4 }}
              activeDot={{ r: 6 }}
              yAxisId="left"
            />
            <Line
              type="monotone"
              dataKey="leads"
              stroke="#22c55e"
              name="Leads"
              strokeWidth={2}
              dot={{ fill: '#22c55e', r: 4 }}
              activeDot={{ r: 6 }}
              yAxisId="right"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }

  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={enrichedData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis
            dataKey="date"
            stroke="#6b7280"
            style={{ fontSize: '12px' }}
          />
          <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1a1a2e',
              border: '1px solid #6366f1',
              borderRadius: '6px',
              color: '#fff',
            }}
          />
          <Legend wrapperStyle={{ paddingTop: '16px' }} />
          <Bar dataKey="spend" fill="#6366f1" name="Spend ($)" />
          <Bar dataKey="leads" fill="#22c55e" name="Leads" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PerformanceChart;
