import { api } from '@/api/axios-instance';
import { API_URL } from '@/constants/constants';
import { retryRequest } from '@/hooks/retry-hook';
import { SuccessResponse } from '@/types/response-instance';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

/**
 *
 *  Check if the user's session is still valid
 * @returns CheckValidityResponse
 * @throws AxiosError
 * @example
 * const response = await checkValidity();
 * console.log(response.data);
 * Output: { isValid: true }
 *
 **/

export const checkValidity = async (): Promise<SuccessResponse> => {
  try {
    const response = await api.get(`${API_URL}/auth/check/validity`);
    return response.data as SuccessResponse;
  } catch (error) {
    throw error;
  }
};

/**
 * Fetches the user's session validity
 * @returns CheckValidityResponse
 * @throws AxiosError
 * @example
 * const { data, error, isLoading, isError, isSuccess } = useCheckValidityQuery();
 * if (isError) {
 *  return <ErrorPage />;
 * }
 * if (isLoading) {
 * return <Loader />;
 * }
 * return <AppShell />;
 *
 **/

export const useCheckValidityQuery = () => {
  return useQuery<SuccessResponse, AxiosError>({
    queryKey: ['validity'],
    queryFn: checkValidity,
    staleTime: 600000,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    retry: retryRequest,
  });
};
