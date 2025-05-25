import { api } from '@/api/axios-instance';
import {
  CreateTicketMutationType,
  TicketType,
} from '@/features/select-service/types/service.types';
import { SuccessResponse } from '@/types/response-instance';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

/**
 *
 * This function is used to create a ticket
 *
 * @param ticket - The ticket object
 * @returns The ticket response object
 *
 * @throws Error
 *
 * @example
 * const ticketResponse = await createTicket(ticket);
 *
 * @category Create Ticket
 *
 **/

export const createTicket = async (
  ticket: TicketType,
): Promise<SuccessResponse<TicketType>> => {
  try {
    const response = await api.post('/queues/1', {
      walk_in_name: ticket.walk_in_name,
      queue_services: ticket.queue_services.map((service) => ({
        id: service.id,
      })),
      transaction_count: ticket.transaction_count,
      is_prioritized: ticket.is_prioritized,
      office: ticket.office,
      kiosk: ticket.kiosk,
    });

    const data = response.data as SuccessResponse<TicketType>;

    if (data.statusCode < 200 || data.statusCode >= 300) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * Custom hook to create a ticket
 *
 * @returns The create ticket mutation
 * @example
 * const { mutate, isLoading, isError, isSuccess, error } = useCreateTicketMutation();
 * if (isError) {
 * return <ErrorPage />;
 * }
 * if (isLoading) {
 * return <Loader />;
 * }
 * return <AppShell />;
 *
 */

export const useCreateTicketMutation = ({
  is_prioritized,
  officeID,
  queueServices,
  name,
  numberOfTransaction,
  resetFormAndState,
}: CreateTicketMutationType) => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (ticket: TicketType) => {
      // Mutation function to create a ticket
      return createTicket(ticket);
    },
    // On success of the mutation
    onSuccess: (data) => {
      // Reset the form and state
      resetFormAndState();
      // Convert queueServices object to a comma-separated string
      const queueServicesString = Object.keys(queueServices)
        .filter((service) => queueServices[service])
        .join(',');
      // Navigate to the ticket page
      navigate(
        `/kiosk/ticket?is_prioritized=${is_prioritized}&office=${officeID}&queue_services=${queueServicesString}&name=${name}&number_of_transaction=${numberOfTransaction}&ticket=${data.data?.ticket_number}`,
        {
          replace: true,
        },
      );
    },
    // On error of the mutation
    onError: (error) => {
      console.error(error);
    },
  });
};
