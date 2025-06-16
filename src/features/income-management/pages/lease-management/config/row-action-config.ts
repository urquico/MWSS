import { TableRowActions } from '@/components/ui/table/types/table-types';
import { getBSRowActions } from '../components/toolbar/BSToolbar';
import { getSOARowActions } from '../components/toolbar/SOAToolbar';
import { getDPRowActions } from '../components/toolbar';
import { getJEVRowActions } from '../components/toolbar/JEVToolbar';
import { getInvoiceRowActions } from '../components/toolbar';
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
    case 'billing-statement':
      return {
        renderMenu: getBSRowActions(viewType),
      };
    case 'statement-of-account':
      return{
        renderMenu: getSOARowActions(viewType), 
      };
    case 'demand-to-pay':
      return {
        renderMenu: getDPRowActions(viewType),
      };
     case 'journal-entry':
      return {
        renderMenu: getJEVRowActions(viewType),
      };
       case 'invoice-tracking':
      return {
        renderMenu: getInvoiceRowActions(viewType),
      };
    default:
      return undefined;
  }
};