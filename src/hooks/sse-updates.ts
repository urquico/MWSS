import { QueryKey, useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

/**
 *
 * Custom hook to handle Server-Sent Events (SSE) and integrate with React Query.
 *
 * @param url - URL for the SSE connection
 * @param queryKey - React Query key to identify the query
 * @param initialData - Initial data to populate the query state
 * @returns An object containing the query state and a cleanup function to close the SSE connection
 *
 * @example
 * const { data, error, isLoading } = useSSE<QueueListType[]>('/queues/dashboard', 'queues');
 *
 * @category Hooks
 *
 */

interface CustomError extends Error {
  status?: number;
  message: string;
}

export const useSSE = <T>(
  url: string, // URL for the SSE connection
  queryKey: QueryKey, // React Query key to identify the query
  initialData: T | undefined = undefined, // Initial data to populate the query state
) => {
  const queryClient = useQueryClient();
  const [_error, setError] = useState<CustomError | null>(null);

  // Single useEffect for setting up SSE and handling cleanup
  useEffect(() => {
    const eventSource = new EventSource(url, { withCredentials: true }); // Create new EventSource

    eventSource.onmessage = (event) => {
      // Event listener for incoming messages
      try {
        const data: T = JSON.parse(event.data); // Parse incoming data
        queryClient.setQueryData(queryKey, data); // Set query data in React Query cache (no fetching) updates query state automatically with new data from SSE connection (no polling)
      } catch (error) {
        setError(error as CustomError); // Handle parsing errors
      }
    };

    eventSource.onerror = () => {
      // Event listener for errors
      setError({ name: 'SSEError', message: 'Error with SSE connection' });
    };

    // Todo: remove for production
    eventSource.onopen = () => {
      // Event listener for connection open
      console.log('SSE connection opened');
    };

    // Cleanup function to close the event source when component unmounts or url changes
    return () => {
      eventSource.close();
      // Todo: remove for production
      console.log('SSE connection closed');
    };
  }, [url]); // Effect dependencies

  // Use React Query to manage query state
  return useQuery<T, CustomError>({
    queryKey,
    queryFn: async () => {
      return new Promise(() => {}); // No actual fetching, SSE handles updates
    },
    initialData,
    refetchOnWindowFocus: false,
    enabled: false, // Disable query fetching since SSE handles updates
    retry: false, // Disable retry, as it's not necessary with SSE
  });
};

export default useSSE;
