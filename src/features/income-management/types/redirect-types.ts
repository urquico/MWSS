import { ModalType } from "./modal-types";
import { ViewType } from "./view-types.ts";
export const viewTypeModalMap: Record<ViewType, Exclude<ModalType, null>> = {
  'statement-of-account': 'generate',
  'billing-statement': 'template',
  'demand-to-pay': 'template',
  'journal-entry': 'generate',
  'payment-monitoring': 'generate',
  'payment-history':'generate',
  'payment-reconciliation':'generate',
  'payment-reminder':'generate',
  'invoice-tracking': 'template',
  'tenant-information': 'generate',
  'raw-water-statement': 'generate',
  'raw-water-payment': 'generate',
  'concession-fee': 'generate'
};