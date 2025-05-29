/**
 * Represents the different types of views available in the income management feature.
 *
 * @remarks
 * This type is used to distinguish between various UI views or modules related to income management,
 * such as billing statements, payment monitoring, and tenant information.
 *
 * @type ViewType
 * 
 * @property 'billing-statement' - View for displaying billing statements.
 * @property 'demand-to-pay' - View for managing demand-to-pay documents.
 * @property 'journal-entry' - View for journal entry records.
 * @property 'payment-monitoring' - View for monitoring payments.
 * @property 'invoice-tracking' - View for tracking invoices.
 * @property 'tenant-information' - View for displaying tenant information.
 * @property 'raw-water-statement' - View for raw water statements.
 * @property 'raw-water-payment' - View for raw water payment records.
 * @property 'concession-fee' - View for concession fee details.
 */
export type ViewType = 

  | 'billing-statement' 
  | 'demand-to-pay'
  | 'journal-entry'
  | 'payment-monitoring'
  | 'invoice-tracking'
  | 'tenant-information'
  | 'raw-water-statement'
  | 'raw-water-payment'
  | 'concession-fee';

export interface ViewConfig {
  viewType: ViewType;
  title: string;
  enableExport?: boolean;
  enableFilters?: boolean;
  customColumns?: any[];
}

export interface RouteConfig {
  [key: string]: ViewConfig;
}