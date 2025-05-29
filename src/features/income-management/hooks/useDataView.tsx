
import { useQuery } from '@tanstack/react-query';
import { ViewType } from '@/features/income-management/types/view-types.ts';
import { apiClient } from '@/features/income-management/api/api';
import dummyDataMap from '../utils/dummy';

/**
 * Fetches data for a given view type.
 *
 * In development mode, returns dummy data corresponding to the specified view type.
 * In production mode, performs an API call to fetch the data from the backend.
 *
 * @param viewType - The type of view for which data should be fetched.
 * @returns A promise that resolves to the data array for the specified view type.
 */


const fetchViewData = async (viewType: ViewType) => {
  if (import.meta.env.DEV) {
    // Use dummy data in development
    return dummyDataMap[viewType] || [];
  }

  // Real API call
  const { data } = await apiClient.get(`/api/${viewType}`);
  return data;
};
export const useDataView = (viewType: ViewType) => {
  return useQuery({
    queryKey: ['viewData', viewType],
    queryFn: () => fetchViewData(viewType),
  });
};
