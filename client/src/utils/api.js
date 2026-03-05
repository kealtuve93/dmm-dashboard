// In production (Railway), the server serves the frontend too — use relative path
// In development, use localhost:3001
const API_BASE_URL = process.env.NODE_ENV === 'production'
  ? '/api'
  : (process.env.REACT_APP_API_URL || 'http://localhost:3001/api');

const apiCall = async (endpoint, options = {}) => {
  try {
    const url = `${API_BASE_URL}${endpoint}`;
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};

export const getAccounts = async (days = 30) => {
  const data = await apiCall(`/accounts?days=${days}`);
  return data.accounts || [];
};

export const getAccountById = async (id) => {
  const data = await apiCall(`/accounts/${id}`);
  return data.account || null;
};

export const getCampaigns = async (accountId) => {
  const data = await apiCall(`/accounts/${accountId}/campaigns`);
  return data.campaigns || [];
};

export const getCampaignById = async (campaignId) => {
  const data = await apiCall(`/campaigns/${campaignId}`);
  return data.campaign || null;
};

export const getOverview = async (days = 30) => {
  const data = await apiCall(`/overview?days=${days}`);
  return data.overview || {};
};

export default {
  getAccounts,
  getAccountById,
  getCampaigns,
  getCampaignById,
  getOverview,
};
