import { API_URL } from '@/types/constants';
import { AdminDashboard } from '@/features/dashboard/types/dashboard-types';
import useSSE from '@/hooks/sse-updates';
import { SuccessResponse } from '@/types/response-instance';

export const useDashboardQuery = () => {
  const url = `${API_URL}/admin/dashboard/all`;

  return useSSE<SuccessResponse<AdminDashboard>>(url, ['admin-dashboard']);
};
