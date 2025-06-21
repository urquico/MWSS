import { api } from '@/api/axios';
import { ViewType } from '@/features/income-management/types/view-types.ts';
import { API_URL } from '@/types/constants';
import { useQuery } from '@tanstack/react-query';

import dummyDataMap from '../utils/dummy';

// Map viewType to API endpoint
const viewTypeApiMap: Record<string, string> = {
  'statement-of-account': `${API_URL}/api/v1/lease/billing/soa/all`,
  'billing-statement': `${API_URL}/api/v1/lease/billing/bs/all`,
  'demand-to-pay': `${API_URL}/api/v1/lease/billing/dtp/all`,
  // Add more mappings as needed
};

const fetchViewData = async (viewType: ViewType) => {
  const endpoint = viewTypeApiMap[viewType];

  console.log(
    'Fetching data for view type:',
    viewType,
    'from endpoint:',
    endpoint,
    'with dummy data:',
    dummyDataMap[viewType] ? dummyDataMap[viewType] : 'No dummy data available',
  );

  if (!endpoint) {
    const data = {
      data: dummyDataMap[viewType] || [],
      message: `No API endpoint configured for view type: ${viewType}`,
    };
    return data;
  }

  try {
    const response = await api.get(endpoint);

    const data = response.data;

    return data;
  } catch (error) {
    throw error;
  }
};

export const useDataView = (viewType: ViewType) => {
  return useQuery({
    queryKey: ['viewData', viewType],
    queryFn: async () => {
      return fetchViewData(viewType);
    },
  });
};
