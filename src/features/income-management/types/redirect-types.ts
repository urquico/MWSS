import { ModalType } from "./modal-types";
import { ViewType } from "./view-types.ts";

/**
 * @file redirect-types.ts
 * @description
 * Maps each ViewType to its default ModalType for redirection or modal opening logic
 * in the MWSS Income/Raw Water Management app.
 *
 * @usage
 * - Use `viewTypeModalMap[viewType]` to get the modal type to open for a given view.
 * - When a view is accessed, this map helps determine which modal to display by default.
 *
 * @example
 * import { viewTypeModalMap } from '@/features/income-management/types/redirect-types';
 * const modalType = viewTypeModalMap[viewType];
 *
 * @see
 * - Update this map when adding new views or modal types.
 */




/**
 * @file redirect-types.ts
 * @description
 * Maps each ViewType to its default ModalType for redirection or modal opening logic
 * in the MWSS Income/Raw Water Management app.
 *
 * @usage
 * - Use `viewTypeModalMap[viewType]` to get the modal type to open for a given view.
 * - When a view is accessed, this map helps determine which modal to display by default.
 *
 * @example
 * import { viewTypeModalMap } from '@/features/income-management/types/redirect-types';
 * const modalType = viewTypeModalMap[viewType];
 *
 * @see
 * - Update this map when adding new views or modal types.
 */



export const viewTypeModalMap: Record<ViewType, Exclude<ModalType, null>> = {
  'statement-of-account': 'generate',
  'billing-statement': 'template',
  'demand-to-pay': 'template',
  'journal-entry': 'generate',
  'payment-monitoring': 'generate',
  'payment-history':'generate',
  'payment-reconciliation':'generate',
  'payment-reminder':'generate',
  'invoice-tracking': 'generate',
  'lessee-information': 'generate',
 // RAW WATER MANAGEMENT VIEWS
  'raw-water-dashboard': 'generate',
  'raw-water-billing-statement': 'generate',
  'raw-water-demand-to-pay': 'template',
  'raw-water-journal-entry': 'generate',
  'raw-water-invoice-tracking': 'generate',
  'raw-water-invoice-list': 'generate',
  'raw-water-customer-invoice-reports': 'generate',
  'raw-water-customer-information-management': 'generate',
  'raw-water-customer-information': 'generate',
  'raw-water-customer-payment-history': 'generate',
  'raw-water-payment-monitoring': 'generate',
  'raw-water-payment-reconciliation': 'generate',
  'raw-water-payment-history': 'generate',
  'raw-water-payment-reminder': 'generate',
  'raw-water-payment-computation': 'generate',
  'raw-water-payment-computation-cpi': 'generate',
  'raw-water-payment-computation-arrears': 'generate',
  'concession-fee': 'generate'
};