import { api } from '@/api/axios-instance';
import { OfficeServicesType } from '@/features/select-service/types/service.types';
import { retryRequest } from '@/hooks/retry-hook';
import { SuccessResponse } from '@/types/response-instance';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

/**
 *
 * This function is used to get the list of services
 *
 * @param officeId - The office id
 * @returns The services list object
 *
 * @throws Error
 *
 * @example
 * const servicesList = await getServices('1');
 *
 * @category Services
 *
 **/

export const getServices = async (
  officeId: string | null,
): Promise<SuccessResponse<OfficeServicesType[]>> => {
  try {
    const response = await api.get(
      `/office/1/${officeId}/all/services?dd=true`,
    );

    const data = response.data as SuccessResponse<OfficeServicesType[]>;

    if (data.statusCode !== 200) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    console.error('Error fetching services:', error);
    throw error;
  }
};

/**
 * Custom hook to get the list of services
 *
 * @returns The services query
 * @example
 * const { data, isLoading, isError, error } = useServicesQuery('1');
 * if (isError) {
 * return <ErrorPage />;
 * }
 * if (isLoading) {
 * return <Loader />;
 * }
 * return <AppShell />;
 *
 */

export const useServicesQuery = (officeId: string | null) => {
  return useQuery<SuccessResponse<OfficeServicesType[]>, AxiosError>({
    queryKey: ['services', officeId],
    queryFn: async () => {
      return await getServices(officeId);
    },
    enabled: !!officeId,
    retry: retryRequest,
  });
};
