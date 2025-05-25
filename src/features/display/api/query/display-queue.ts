import { API_URL } from '@/constants/constants';
import { CounterType } from '@/features/display/types/counter-type';
import useSSE from '@/hooks/sse-updates';
import { SuccessResponse } from '@/types/response-instance';

/**
 * useQueueDisplayQuery
 * A custom hook that fetches queue data from the server using SSE.
 *
 * @param id - The ID of the selected queue.
 * @returns An object containing the query state and a cleanup function to close the SSE connection.
 *
 * @example
 * const { data, error, isLoading } = useQueueDisplayQuery(id);
 *
 * @category Hooks
 *
 */

export const useQueueDisplayQuery = (id: number) => {
  let url = `${API_URL}/monitor/display-2/${id}`;

  return useSSE<SuccessResponse<CounterType>>(
    url, // URL for the SSE connection
    ['queues', id], // Query key for React Query
  );
};
