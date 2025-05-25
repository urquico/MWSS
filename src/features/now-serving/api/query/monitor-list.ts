import { API_URL } from '@/constants/constants';
import { NowServingType } from '@/features/now-serving/types/now-serving-types';
import useSSE from '@/hooks/sse-updates';
import { SuccessResponse } from '@/types/response-instance';

/**
 * useMonitorListQuery
 * A custom hook that fetches monitor data from the server using SSE.
 *
 * @param id - The ID of the selected monitor.
 * @returns An object containing the query state and a cleanup function to close the SSE connection.
 *
 * @example
 * const { data, error, isLoading } = useMonitorListQuery(id);
 *
 * @category Hooks
 *
 */

export const useMonitorListQuery = (id: number) => {
  let url = `${API_URL}/monitor/display-1/${id}`;

  return useSSE<SuccessResponse<NowServingType>>(url, ['monitors', id]);
};
