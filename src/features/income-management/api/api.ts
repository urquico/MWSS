import axios from 'axios';
import { QueryClient } from '@tanstack/react-query';

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});