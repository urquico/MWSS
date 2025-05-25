import { api } from '@/api/axios-instance';
import { PrintTicket } from '@/features/print-ticket/types/print-ticket-types';
import { retryRequest } from '@/hooks/retry-hook';
import { SuccessResponse } from '@/types/response-instance';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

/**
 *
 * This function is used to print a ticket
 *
 * @param ticket - The ticket number
 * @returns The print ticket response object
 *
 * @throws Error
 *
 * @example
 * const printTicketResponse = await printTicket('A1');
 *
 * @category Print Ticket
 *
 **/

export const printTicket = async (
  ticket: string,
): Promise<SuccessResponse<PrintTicket>> => {
  try {
    const response = await api.get(`/queues/1/ticket-number/${ticket}`);

    const data = response.data as SuccessResponse<PrintTicket>;

    if (data.statusCode !== 200) {
      throw new Error(response.data.message);
    }

    return data;
  } catch (error) {
    console.error('Error fetching ticket:', error);
    throw error;
  }
};

/**
 * Custom hook to print a ticket
 *
 * @returns The print ticket query
 * @example
 * const { data, isLoading, isError, error } = usePrintTicketQuery('A1');
 * if (isError) {
 * return <ErrorPage />;
 * }
 * if (isLoading) {
 * return <Loader />;
 * }
 * return <AppShell />;
 *
 */

export const usePrintTicketQuery = (ticketNumber: string) => {
  return useQuery<SuccessResponse<PrintTicket>, AxiosError>({
    queryKey: ['tickets', ticketNumber],
    queryFn: async () => {
      if (!ticketNumber) throw new Error('No ticket provided');
      return printTicket(ticketNumber);
    },
    retry: retryRequest,
  });
};
