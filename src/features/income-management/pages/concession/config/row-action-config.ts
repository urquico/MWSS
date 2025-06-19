import { TableRowActions } from '@/components/ui/table/types/table-types';
import { getBSRowActions } from '../components/toolbar/ConcessionaireFeeToolbar';
/**
 * This is for adding the ACTION column per vieType, the the Action items in the toolbar
 * then call here
 * @param viewType 
 * @param handleGenerateRow 
 * @returns 
 */
export const getRowActionsConfig = (
  viewType: string,
  handleGenerateRow: (row: any) => void
): TableRowActions | undefined => {
  switch (viewType) {
    case 'concession-fee':
      return {
        renderMenu: getBSRowActions(viewType),
      };
    default:
      return undefined;
  }
};