import { API_URL } from '@/types/constants';
import axios from 'axios';

export const monitorApi = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
