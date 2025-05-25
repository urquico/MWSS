import { api } from '@/api/axios-instance';
import { OfficeListType } from '@/features/select-office/types/select-office';
import { retryRequest } from '@/hooks/retry-hook';
import { SuccessResponse } from '@/types/response-instance';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

/**
 *
 * This function is used to get the list of offices
 *
 * @returns The office list object
 *
 * @throws Error
 *
 * @example
 * const officeList = await getOffices();
 *
 * @category Office
 *
 **/

export const getOffices = async (): Promise<
  SuccessResponse<OfficeListType[]>
> => {
  try {
    const response = await api.get('/office/all/active?dd=true');

    const data = response.data as SuccessResponse<OfficeListType[]>;

    if (data.statusCode !== 200) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    console.error('Error fetching offices:', error);
    throw error;
  }
};

/**
 * Custom hook to get the list of offices
 *
 * @returns The offices query
 * @example
 * const { data, isLoading, isError, error } = useOfficesQuery();
 * if (isError) {
 * return <ErrorPage />;
 * }
 * if (isLoading) {
 * return <Loader />;
 * }
 * return <AppShell />;
 *
 */

export const useOfficesQuery = () => {
  return useQuery<SuccessResponse<OfficeListType[]>, AxiosError>({
    queryKey: ['offices'],
    queryFn: getOffices,
    retry: retryRequest,
  });
};
