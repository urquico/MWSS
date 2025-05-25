import { api } from '@/api/axios-instance';
import { SuccessResponse } from '@/types/response-instance';
import { useMutation } from '@tanstack/react-query';
import { useNavigate, useSearchParams } from 'react-router-dom';

/**
 *
 * This function is used to delete a transaction
 *
 * @param id - The transaction ID
 * @returns The delete transaction response object
 *
 * @throws Error
 *
 * @example
 * const deleteTransactionResponse = await deleteTransaction(1);
 *
 * @category Delete Transaction
 *
 **/

export const deleteTransaction = async (
  id: number,
): Promise<SuccessResponse> => {
  try {
    const response = await api.delete(`/queues/1/${id}/permanent`);

    const data = response.data as SuccessResponse;

    if (data.statusCode !== 200) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    console.error('Error deleting transaction:', error);
    throw error;
  }
};

/**
 * Custom hook to delete a transaction
 *
 * @returns The delete transaction mutation
 * @example
 * const { mutate, isLoading, isError, isSuccess, error } = useDeleteTransactionMutation();
 * if (isError) {
 * return <ErrorPage />;
 * }
 * if (isLoading) {
 * return <Loader />;
 * }
 * return <AppShell />;
 *
 */

export const useDeleteTransactionMutation = (id: number) => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name');
  const office = searchParams.get('office');
  const transactionCount = searchParams.get('number_of_transaction');
  const services = searchParams.getAll('queue_services').join(',');
  const priority = searchParams.get('is_prioritized');
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async () => {
      if (!id) throw new Error('No ticket data found');
      return await deleteTransaction(id);
    },
    onSuccess: () => {
      navigate(
        `/kiosk/service?is_prioritized=${priority}&office=${office}&queue_services=${services}&name=${name}&number_of_transaction=${transactionCount}`,
      );
    },
  });
};
