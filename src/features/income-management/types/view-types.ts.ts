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
 * @property 'lessee-information' - View for displaying tenant information.
 * @property 'raw-water-dashboard' - Dashboard view for raw water management.
 * @property 'raw-water-billing-statement' - View for raw water billing statements.
 * @property 'raw-water-demand-to-pay' - View for raw water demand-to-pay documents.
 * @property 'raw-water-journal-entry' - View for raw water journal entry records.
 * @property 'raw-water-invoice-tracking' - View for raw water invoice tracking.
 * @property 'raw-water-invoice-list' - View for raw water invoice list.
 * @property 'raw-water-customer-invoice-reports' - View for raw water customer invoice reports.
 * @property 'raw-water-customer-information-management' - View for raw water customer information management.
 * @property 'raw-water-customer-information' - View for raw water customer information.
 * @property 'raw-water-customer-payment-history' - View for raw water customer payment history.
 * @property 'raw-water-payment-monitoring' - View for raw water payment monitoring.
 * @property 'raw-water-payment-reconciliation' - View for raw water payment reconciliation.
 * @property 'raw-water-payment-history' - View for raw water payment history.
 * @property 'raw-water-payment-reminder' - View for raw water payment reminder.
 * @property 'raw-water-payment-computation' - View for raw water payment computation.
 * @property 'raw-water-payment-computation-cpi' - View for raw water payment computation CPI.
 * @property 'raw-water-payment-computation-arrears' - View for raw water payment computation arrears.
 * @property 'concession-fee' - View for concession fee details.
 */
export type ViewType = 
  | 'statement-of-account' 
  | 'billing-statement'
  | 'demand-to-pay'
  | 'journal-entry'
  | 'payment-monitoring'
  | 'payment-reconciliation'
  | 'payment-history'
  | 'payment-reminder'
  | 'invoice-tracking'
  | 'lessee-information'
  // RAW WATER MANAGEMENT VIEWS
  | 'raw-water-dashboard'
  | 'raw-water-billing-statement'
  | 'raw-water-demand-to-pay'
  | 'raw-water-journal-entry'
  | 'raw-water-invoice-tracking'
  | 'raw-water-invoice-list'
  | 'raw-water-customer-invoice-reports'
  | 'raw-water-customer-information-management'
  | 'raw-water-customer-information'
  | 'raw-water-customer-payment-history'
  | 'raw-water-payment-monitoring'
  | 'raw-water-payment-reconciliation'
  | 'raw-water-payment-history'
  | 'raw-water-payment-reminder'
  | 'raw-water-payment-computation'
  | 'raw-water-payment-computation-cpi'
  | 'raw-water-payment-computation-arrears'
  //CONCESSION
  | 'concession-fee'
  |  'journal-entry';

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