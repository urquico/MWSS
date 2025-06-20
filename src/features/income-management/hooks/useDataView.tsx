import { useQuery } from '@tanstack/react-query';
import { ViewType } from '@/features/income-management/types/view-types.ts';
import { api } from '@/api/axios';
import dummyDataMap from '../utils/dummy';

// Map viewType to API endpoint
const viewTypeApiMap: Record<string, string> = {
  'statement-of-account': '/api/v1/lease/billing/soa/all',
  'billing-statement': '/api/v1/lease/billing/bs/all',
  'demand-to-pay': '/api/v1/lease/billing/dtp/all',
  // Add more mappings as needed
};

const fetchViewData = async (viewType: ViewType) => {
  // if (import.meta.env.DEV) {
  //   // Use dummy data in development
  //   return dummyDataMap[viewType] || [];
  // }

  const endpoint = viewTypeApiMap[viewType];
  if (!endpoint) throw new Error('No API endpoint mapped for this viewType');

  const { data } = await api.get(endpoint);
  return Array.isArray(data) ? data : [];

};

export const useDataView = (viewType: ViewType) => {
  return useQuery({
    queryKey: ['viewData', viewType],
    queryFn: () => fetchViewData(viewType),
  });
};