import { ViewType } from '@/features/income-management/types/view-types.ts';
import { ColumnDef } from '@tanstack/react-table';
import { renderStatusCell } from '../utils/status-utils';
import { renderLesseeNameCell } from '../utils/cell-onclick';


/**
 * A mapping of view types to their respective column definitions.
 *
 * Each key in the object corresponds to a specific view type within the income management feature,
 * and maps to an array of column definitions (`ColumnDef<any>[]`) used for rendering data tables
 * in the UI. The column definitions determine how data is displayed and interacted with for each view.
 *
 * @remarks
 * The available view types include:
 * - 'billing-statement'
 * - 'payment-monitoring'
 * - 'demand-to-pay'
 * - 'journal-entry'
 * - 'invoice-tracking'
 * - 'lessee-information'
 * - 'raw-water-statement'
 * - 'raw-water-payment'
 * - 'concession-fee' etc
 *
 * @typeParam ViewType - A union type representing the possible view keys.
 * @typeParam ColumnDef - The type describing the structure of a column definition.
 */



const soaColumns: ColumnDef<any>[] = [
  { accessorKey: 'date', header: 'Date' },
  { accessorKey: 'controlNumber', header: 'Control Number' },
  { accessorKey: 'lesseeName', header: 'Lessee Name' },
  { accessorKey: 'companyName', header: 'Company Name' },
  { accessorKey: 'subject', header: 'Subject' },
  { accessorKey: 'periodCovered', header: 'Period Covered' },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => renderStatusCell(row.original.status),
  },
  { accessorKey: 'remarks', header: 'Remarks' },
];
const billingColumns: ColumnDef<any>[] = [
  { accessorKey: 'date', header: 'Date' },
  { accessorKey: 'controlNumber', header: 'Control Number' },
  { accessorKey: 'lesseeName', header: 'Lessee Name' },
  { accessorKey: 'companyName', header: 'Company Name' },
  { accessorKey: 'subject', header: 'Subject' },
  { accessorKey: 'dateReceived', header: 'Date Received' },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => renderStatusCell(row.original.status),
  },
  { accessorKey: 'remarks', header: 'Remarks' },
];
const demandColumns: ColumnDef<any>[] = [
  { accessorKey: 'date', header: 'Date' },
  { accessorKey: 'controlNumber', header: 'Control Number' },
  { accessorKey: 'lesseeName', header: 'Lessee Name' },
  { accessorKey: 'companyName', header: 'Company Name' },
  { accessorKey: 'subject', header: 'Subject' },
  { accessorKey: 'dateReceived', header: 'Date Received' },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => renderStatusCell(row.original.status),
  },
  { accessorKey: 'remarks', header: 'Remarks' },
];
const paymentColumns: ColumnDef<any>[] = [
  { accessorKey: 'transactionId', header: 'Transaction ID' },
  { accessorKey: 'paymentDate', header: 'Payment Date' },
];



const journalColumns: ColumnDef<any>[] = [
  { accessorKey: 'jevDate', header: 'JEV Date' },
  { accessorKey: 'jevNo', header: 'JEV No.' },
  { accessorKey: 'responsibilityCenter', header: 'Responsibility Center' },
  { accessorKey: 'accountTitle', header: 'Account Title' },
  { accessorKey: 'accountCode', header: 'Account Code' },
  { accessorKey: 'debit', header: 'Debit' },
  { accessorKey: 'credit', header: 'Credit' },
  { accessorKey: 'dueDate', header: 'Due Date' },

];

const paymentReconciliationColumns: ColumnDef<any>[] = [
  { accessorKey: 'lessee', header: 'Lessee Name' },
  { accessorKey: 'soaControlNumber', header: 'SOA Control No.' },
  { accessorKey: 'amountPaid', header: 'Amount Paid' },
  { accessorKey: 'paymentDate', header: 'Payment Date' },
  { accessorKey: 'paymentMode', header: 'Payment Mode' },
  { accessorKey: 'balance', header: 'Balance' },
];
const paymentHistoryColumns: ColumnDef<any>[] = [
  { accessorKey: 'lessee', header: 'Lessee Name' },
  { accessorKey: 'soaControlNumber', header: 'SOA Control No.' },
  { accessorKey: 'soaAmount', header: 'SOA Amount' },
  { accessorKey: 'orDate', header: 'OR Date' },
  { accessorKey: 'orNo', header: 'OR No.' },
  { accessorKey: 'paymentMade', header: 'Payment Made' },
  { accessorKey: 'balanceDue', header: 'Balance Due' },
];
const paymentReminderColumns: ColumnDef<any>[] = [
  { accessorKey: 'lessee', header: 'Lessee Name' },
  { accessorKey: 'noticeCount', header: 'No. of Notice' },
  { accessorKey: 'demandDate', header: 'Demand to Pay Date' },
  { accessorKey: 'controlNumber', header: 'Demand to Pay Control No.' },
  { accessorKey: 'amount', header: 'Amount' },
  { accessorKey: 'remarks', header: 'Remarks' },
];

const invoiceColumns: ColumnDef<any>[] = [
  { accessorKey: 'lessee', header: 'Lessee Name' },
  { accessorKey: 'invoiceDate', header: 'Invoice Date' },
  { accessorKey: 'invoiceNo', header: 'Invoice No.' },
  { accessorKey: 'amount', header: 'Amount' },
{
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => renderStatusCell(row.original.status),
  }
];

const tenantColumns: ColumnDef<any>[] = [
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => renderStatusCell(row.original.status),
  },
  { accessorKey: 'lesseeNo', header: 'Lessee No.' },
  { accessorKey: 'nameOfLessee', header: 'Name of Lessee',
    cell: renderLesseeNameCell,
   },
  { accessorKey: 'location', header: 'Lessee Location' },
  { accessorKey: 'lesseeTerm', header: 'Lessee Term' },
  { accessorKey: 'classification', header: 'Classification' },
    { accessorKey: 'remarks', header: 'Remarks' },

];



//RAW WATER BILLING STATEMENT COLUMNS

const rawWaterInvoiceListColumns: ColumnDef<any>[] = [
  { accessorKey: 'lesseeName', header: 'Lessee Name' },
  { accessorKey: 'invoiceDate', header: 'Invoice Date' },
  { accessorKey: 'invoiceNo', header: 'Invoice No.' },
  { accessorKey: 'amount', header: 'Amount' },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => renderStatusCell(row.original.status),
  }
];

const rawWaterBillingStatementColumns: ColumnDef<any>[] = [
  { accessorKey: 'invoiceDate', header: 'Invoice Date' },
  { accessorKey: 'invoiceNo', header: 'Invoice No.' },
  { accessorKey: 'customerName', header: 'Customer Name' },
  { accessorKey: 'companyName', header: 'Company Name' },
  { accessorKey: 'subject', header: 'Subject' },
  { accessorKey: 'periodCovered', header: 'Period Covered' },
  { accessorKey: 'remarks', header: 'Remarks' },
];

const rawWaterDemandToPayColumns: ColumnDef<any>[] = [
  { accessorKey: 'date', header: 'Date' },
  { accessorKey: 'controlNumber', header: 'Control No.' },
  { accessorKey: 'customerName', header: 'Customer Name' },
  { accessorKey: 'companyName', header: 'Company Name' },
  { accessorKey: 'subject', header: 'Subject' },
  { accessorKey: 'dateReceived', header: 'Date Received' },
];

const rawWaterJournalEntryColumns: ColumnDef<any>[] = [
  { accessorKey: 'jevDate', header: 'JEV Date' },
  { accessorKey: 'jevNo', header: 'JEV No.' },
  { accessorKey: 'accountTitle', header: 'Account Title' },
  { accessorKey: 'particulars', header: 'Particulars' },
  { accessorKey: 'debit', header: 'Debit' },
  { accessorKey: 'credit', header: 'Credit' },
];


const rawWaterCustomerInvoiceReportsColumns: ColumnDef<any>[] = [
  { accessorKey: 'lesseeName', header: 'Lessee Name' },
  { accessorKey: 'billingDate', header: 'Billing Date' },
  { accessorKey: 'billingControlNo', header: 'Billing Control No.' },
  { accessorKey: 'billingControlNo2', header: 'Billing Control No.' },
  { accessorKey: 'modeOfPayment', header: 'Mode of Payment' },
  { accessorKey: 'referenceOrCheck', header: 'Reference/Check' },
];

const rawWaterCustomerInformationColumns: ColumnDef<any>[] = [
  { accessorKey: 'customerNo', header: 'Customer No.' },
  { accessorKey: 'customerName', header: 'Customer Name' },
  { accessorKey: 'address', header: 'Address' },
  { accessorKey: 'contractExecution', header: 'Contract Execution' },
  { accessorKey: 'classification', header: 'Classification' },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => renderStatusCell(row.original.status),
  },
];

const rawWaterCustomerPaymentHistorySimpleColumns: ColumnDef<any>[] = [
  { accessorKey: 'date', header: 'Date' },
  { accessorKey: 'soaNo', header: 'SOA No.' },
  { accessorKey: 'amount', header: 'Amount' },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => renderStatusCell(row.original.status),
  },
];

const rawWaterCustomerPaymentHistoryDetailedColumns: ColumnDef<any>[] = [
  { accessorKey: 'lesseeName', header: 'Lessee Name' },
  { accessorKey: 'soaControlNo', header: 'SOA Control No.' },
  { accessorKey: 'soaAmount', header: 'SOA Amount' },
  { accessorKey: 'orDate', header: 'OR Date' },
  { accessorKey: 'orNo', header: 'OR No.' },
  { accessorKey: 'paymentAmount', header: 'Payment Amount' },
  { accessorKey: 'balanceDue', header: 'Balance Due' },
];

export const rawWaterPaymentReminderColumns: ColumnDef<any>[] = [
  { accessorKey: 'lesseeName', header: 'Lessee Name' },
  { accessorKey: 'noticeCount', header: 'No. of Notice' },
  { accessorKey: 'demandDate', header: 'Demand to Pay Date' },
  { accessorKey: 'demandControlNo', header: 'Demand to Pay Control No.' },
  { accessorKey: 'amount', header: 'Amount' },
  { accessorKey: 'remarks', header: 'Remarks' },
];

export const rawWaterCPIIndexAndRateColumns: ColumnDef<any>[] = [
  { accessorKey: 'period', header: 'Period' },
  { accessorKey: 'index2006', header: 'Index per PSA (Base year = 2006)' },
  { accessorKey: 'index2012', header: 'Index per PSA (Base year = 2012)' },
  { accessorKey: 'index2018', header: 'Index per PSA (Base year = 2018)' },
  { accessorKey: 'percentIndex', header: '% Index' },
];

export const rawWaterConcessionaireColumns: ColumnDef<any>[] = [
  { accessorKey: 'date', header: 'Date' },
  { accessorKey: 'controlNo', header: 'Control No.' },
  { accessorKey: 'concessionaire', header: 'Concessionaire' },
  { accessorKey: 'companyName', header: 'Company Name' },
  { accessorKey: 'subject', header: 'Subject (includes Period Covered)' },
  { accessorKey: 'remarks', header: 'Remarks' },
];

const columnConfigs: Record<ViewType, ColumnDef<any>[]> = {
  'statement-of-account': soaColumns,
  'billing-statement': billingColumns,
  'payment-monitoring': paymentColumns,
  'payment-reconciliation': paymentReconciliationColumns,
  'payment-history': paymentHistoryColumns,
  'payment-reminder': paymentReminderColumns,
  'demand-to-pay': demandColumns,
  'journal-entry': journalColumns,
  'invoice-tracking': invoiceColumns,
  'lessee-information': tenantColumns,
// RAW WATER MANAGEMENT VIEWS
  'raw-water-dashboard': [], // Add columns if needed
  'raw-water-billing-statement': rawWaterBillingStatementColumns,
  'raw-water-demand-to-pay': rawWaterDemandToPayColumns,
  'raw-water-journal-entry': rawWaterJournalEntryColumns,
  'raw-water-invoice-tracking': rawWaterInvoiceListColumns,
  'raw-water-invoice-list': rawWaterInvoiceListColumns,
  'raw-water-customer-invoice-reports': rawWaterCustomerInvoiceReportsColumns,
  'raw-water-customer-information-management': rawWaterCustomerInformationColumns,
  'raw-water-customer-information': rawWaterCustomerInformationColumns,
  'raw-water-customer-payment-history': rawWaterCustomerPaymentHistorySimpleColumns,
  'raw-water-payment-monitoring': rawWaterCustomerPaymentHistorySimpleColumns, // Or another columns array if needed
  'raw-water-payment-reconciliation': rawWaterCustomerPaymentHistoryDetailedColumns, // Or another columns array if needed
  'raw-water-payment-history': rawWaterCustomerPaymentHistoryDetailedColumns,
  'raw-water-payment-reminder': rawWaterPaymentReminderColumns,
  'raw-water-payment-computation': [], // Add columns if needed
  'raw-water-payment-computation-cpi': rawWaterCPIIndexAndRateColumns,
  'raw-water-payment-computation-arrears': [], // Add columns if needed
  'concession-fee': rawWaterConcessionaireColumns,};

/**
 * Returns the column configuration for a given view type, optionally merging with custom columns.
 *
 * @param viewType - The type of view for which to retrieve the column configuration.
 * @param customColumns - Optional array of custom column definitions to append to the base columns.
 * @returns An array of column definitions based on the specified view type and any provided custom columns.
 */

export const getColumnConfig = (
  viewType: ViewType,
  customColumns?: ColumnDef<any>[],
) => {
  const baseColumns = columnConfigs[viewType] || [];
  return customColumns ? [...baseColumns, ...customColumns] : baseColumns;
};
