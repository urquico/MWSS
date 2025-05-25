import { api } from '@/api/axios-instance';
import { API_URL } from '@/constants/constants';
import { retryRequest } from '@/hooks/retry-hook';
import { CheckMaintenanceType } from '@/types/maintenance-types';
import { SuccessResponse } from '@/types/response-instance';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

/**
 * Check if the user's session is still valid
 * @param id - The ID of the maintenance check
 * @returns A promise that resolves to the maintenance check response
 */

export const checkMaintenance = async (
  id: number,
): Promise<SuccessResponse<CheckMaintenanceType>> => {
  try {
    const response = await api.get(`${API_URL}/kiosk/check/maintenance/${id}`);
    return response.data as SuccessResponse<CheckMaintenanceType>;
  } catch (error) {
    throw error;
  }
};

/**
 * Custom hook to fetch maintenance status
 *
 * @param id - The ID of the maintenance check
 * @returns The maintenance check response
 * @throws AxiosError
 * @example
 * const { data, error, isLoading, isError, isSuccess } = useMaintenanceQuery();
 * if (isError) {
 * return <ErrorPage />;
 * }
 * if (isLoading) {
 * return <Loader />;
 * }
 * return <AppShell />;
 *
 */

export const useMaintenanceQuery = (id: number) => {
  return useQuery<SuccessResponse<CheckMaintenanceType>, AxiosError>({
    queryKey: ['maintenance', id],
    queryFn: () => {
      if (id === null) {
        throw new Error('ID is undefined');
      }
      return checkMaintenance(Number(id));
    },
    staleTime: 600000,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    retry: retryRequest,
  });
};
