import { TableRowActions } from '@/components/ui/table/types/table-types';
import { getBSRowActions } from '../components/toolbar/RawWaterBillingToolbar';
import { getSOARowActions } from '../components/toolbar/RawWaterComputationToolbar';
import { getDPRowActions } from '../components/toolbar';
import { getJEVRowActions } from '../components/toolbar/RawWaterJEVToolbar';
import { getInvoiceRowActions } from '../components/toolbar';
/**
 * @file row-action-config.ts
 * @description
 * This file connects the "Actions" column to the table for each view type in the MWSS Income/Raw Water Management app.
 * It maps each viewType to its corresponding row action menu renderer.
 *
 * @usage
 * - Use `getRowActionsConfig(viewType, handleGenerateRow)` to provide the correct actions for the table's "Actions" column.
 * - Call this in your table config to inject the proper row actions per view.
 *
 * @example
 * import { getRowActionsConfig } from './config/row-action-config';
 * const rowActionsConfig = getRowActionsConfig(viewType, handleGenerateRow);
 *
 * @see
 * - Update this file when adding new view types or row action menus.
 * - Each toolbar component exports its own row actions renderer.
 */

export const getRowActionsConfig = (
  viewType: string,
  handleGenerateRow: (row: any) => void
): TableRowActions | undefined => {
  switch (viewType) {
    case 'raw-water-billing-statement':
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