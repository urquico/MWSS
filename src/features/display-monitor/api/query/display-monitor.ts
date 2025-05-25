import { monitorApi } from '@/api/monitor-instance';
import { DisplayMonitorDataType } from '@/features/display-monitor/types/display-monitor-types';
import { retryRequest } from '@/hooks/retry-hook';
import { SuccessResponse } from '@/types/response-instance';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

/**
 *
 * @description
 * displayMonitor
 * A function that fetches the display monitor data from the server.
 *
 * @param id - The ID of the selected monitor.
 * @returns A promise containing the response data.
 *
 * @category Queries
 *
 */

export const displayMonitor = async (
  id: number,
): Promise<SuccessResponse<DisplayMonitorDataType[]>> => {
  const response = await monitorApi.get(`/office/1/${id}/all/monitors`);
  const data = response.data as SuccessResponse<DisplayMonitorDataType[]>;

  if (data.statusCode !== 200) {
    throw new Error(data.message);
  }

  return data;
};

/**
 *
 * @description
 * useDisplayMonitorQuery
 * A custom hook that fetches the display monitor data from the server.
 *
 * @param id - The ID of the selected monitor.
 * @returns An object containing the query state.
 *
 * @example
 * const { data, error, isLoading } = useDisplayMonitorQuery(id);
 *
 * @category Hooks
 *
 */

export const useDisplayMonitorQuery = (id: number) => {
  return useQuery<SuccessResponse<DisplayMonitorDataType[]>, AxiosError>({
    queryKey: ['display-monitor', id],
    queryFn: () => displayMonitor(id),
    retry: retryRequest,
  });
};
