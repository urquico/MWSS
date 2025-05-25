import { API_URL } from '@/constants/constants';
import { CounterListType } from '@/features/queue/types/counter-list-type';
import { useSSE } from '@/hooks/sse-updates';
import { SuccessResponse } from '@/types/response-instance';

/**
 * useQueueLists
 * A custom hook that fetches queue data from the server using SSE.
 *
 * @param officeId - The ID of the selected office.
 * @param serviceId - The ID of the selected service.
 * @returns An object containing the query state and a cleanup function to close the SSE connection.
 *
 * @example
 * const { data, error, isLoading } = useQueueLists(officeId, serviceId);
 *
 * @category Hooks
 *
 */

export const useQueueLists = (
  officeId: string | null,
  serviceId: string | null,
) => {
  let url = `${API_URL}/queues/dashboard`;
  if (officeId) {
    url += `?officeId=${officeId}`;
    if (serviceId) {
      url += `&serviceId=${serviceId}`;
    }
  }

  return useSSE<SuccessResponse<CounterListType[]>>(
    url, // URL for the SSE connection
    ['queues', officeId, serviceId], // Query key for React Query
  );
};
