import axios from 'axios';

export const baseUrl = 'https://www.omdbapi.com';
export const axiosInstance = axios.create({ params: { apiKey: process.env.API_KEY } });
