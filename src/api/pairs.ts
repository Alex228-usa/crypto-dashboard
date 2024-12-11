import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/api',
});

export const getPairs = async () => {
  const { data } = await apiClient.get('/pairs');
  return data;
};

export const addPair = async (pair: { name: string; interval: number }) => {
  const { data } = await apiClient.post('/pairs', pair);
  return data;
};

export const updatePair = async (id: string, pair: { interval: number }) => {
  const { data } = await apiClient.put(`/pairs/${id}`, pair);
  return data;
};

export const deletePair = async (id: string) => {
  const { data } = await apiClient.delete(`/pairs/${id}`);
  return data;
};
