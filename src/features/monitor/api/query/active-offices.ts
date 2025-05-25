import { monitorApi } from '@/api/monitor-instance';
import { OfficeDataType } from '@/features/monitor/types/office-data-type';
import { retryRequest } from '@/hooks/retry-hook';
import { SuccessResponse } from '@/types/response-instance';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

/**
 * activeOfficesQuery
 * A function that fetches all active offices from the server.
 *
 * @returns A promise containing the response data.
 *
 * @category Queries
 *
 */

export const activeOfficesQuery = async (): Promise<
  SuccessResponse<OfficeDataType[]>
> => {
  try {
    const response = await monitorApi.get('/office/all/active?dd=true');
    const data = response.data as SuccessResponse<OfficeDataType[]>;
    if (data.statusCode !== 200) {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    throw error;
  }
};

/**
 * useActiveOfficesQuery
 * A custom hook that fetches all active offices from the server.
 *
 * @returns An object containing the query state.
 *
 * @example
 * const { data, error, isLoading } = useActiveOfficesQuery();
 *
 * @category Hooks
 *
 */

export const useActiveOfficesQuery = () => {
  return useQuery<SuccessResponse<OfficeDataType[]>, AxiosError>({
    queryKey: ['active-offices'],
    queryFn: activeOfficesQuery,
    retry: retryRequest,
  });
};
