import { ViewType } from '@/features/income-management/types/view-types.ts';
import { ColumnDef } from '@tanstack/react-table';

import { renderStatusCell } from '../utils/status-utils';

const billingColumns: ColumnDef<any>[] = [
  { accessorKey: 'date', header: 'Date' },
  { accessorKey: 'controlNumber', header: 'Control Number' },
  { accessorKey: 'lessee', header: 'Lessee' },
  { accessorKey: 'companyName', header: 'Company Name' },
  { accessorKey: 'subject', header: 'Subject' },
  { accessorKey: 'dateReceived ', header: 'Date Received' },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => renderStatusCell(row.original.status),
  },
  { accessorKey: 'remarks', header: 'Remarks' },
];
const soaColumns: ColumnDef<any>[] = [
  { accessorKey: 'date', header: 'Date' },
  { accessorKey: 'controlNumber', header: 'Control Number' },
  { accessorKey: 'lessee', header: 'Lessee' },
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

const paymentColumns: ColumnDef<any>[] = [
  { accessorKey: 'transactionId', header: 'Transaction ID' },
  { accessorKey: 'paymentDate', header: 'Payment Date' },
];

const demandColumns: ColumnDef<any>[] = [
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => renderStatusCell(row.original.status),
  },
  { accessorKey: 'date', header: 'Date' },
  { accessorKey: 'controlNumber', header: 'Control Number' },
  { accessorKey: 'lessee', header: 'Lessee' },
  { accessorKey: 'companyName', header: 'Company Name' },
  { accessorKey: 'subject', header: 'Subject' },
  { accessorKey: 'dateReceived', header: 'Date Received' },
];

const journalColumns: ColumnDef<any>[] = [
  { accessorKey: 'jevDate', header: 'JEV Date' },
  { accessorKey: 'jevNo', header: 'JEV No.' },
  { accessorKey: 'accountTitle', header: 'Account Title' },
  { accessorKey: 'particulars', header: 'Particulars' },
  { accessorKey: 'debit', header: 'Debit' },
  { accessorKey: 'credit', header: 'Credit' },
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
  { accessorKey: 'tenantId', header: 'Tenant ID' },
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'unit', header: 'Unit' },
];

const rawWaterStatementColumns: ColumnDef<any>[] = [
  { accessorKey: 'statementId', header: 'Statement ID' },
  { accessorKey: 'usage', header: 'Usage (m³)' },
  { accessorKey: 'period', header: 'Period' },
];

const rawWaterPaymentColumns: ColumnDef<any>[] = [
  { accessorKey: 'paymentId', header: 'Payment ID' },
  { accessorKey: 'amount', header: 'Amount' },
  { accessorKey: 'paidDate', header: 'Paid Date' },
];

const concessionFeeColumns: ColumnDef<any>[] = [
  { accessorKey: 'feeId', header: 'Fee ID' },
  { accessorKey: 'description', header: 'Description' },
  { accessorKey: 'amount', header: 'Amount' },
];

// COMPLETE columnConfigs
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
 * - 'tenant-information'
 * - 'raw-water-statement'
 * - 'raw-water-payment'
 * - 'concession-fee'
 *
 * @typeParam ViewType - A union type representing the possible view keys.
 * @typeParam ColumnDef - The type describing the structure of a column definition.
 */

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
  'tenant-information': tenantColumns,
  'raw-water-statement': rawWaterStatementColumns,
  'raw-water-payment': rawWaterPaymentColumns,
  'concession-fee': concessionFeeColumns,
};

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
