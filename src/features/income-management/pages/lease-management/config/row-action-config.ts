import { TableRowActions } from '@/components/ui/table/types/table-types';
import { getBSRowActions } from '../components/toolbar/BSToolbar';
import { getSOARowActions } from '../components/toolbar/SOAToolbar';

export const getRowActionsConfig = (
  viewType: string,
  handleGenerateRow: (row: any) => void
): TableRowActions | undefined => {
  switch (viewType) {
    case 'billing-statement':
      return {
        renderMenu: getBSRowActions(viewType),
      };
    case 'statement-of-account':
      return{
        renderMenu: getSOARowActions(viewType), 
      } 
    default:
      return undefined;
  }
};