import { ColumnDef } from '@tanstack/react-table';
import { ViewType } from '@/features/income-management/types/view-types.ts';

// Example column sets – reuse or customize as needed
const billingColumns: ColumnDef<any>[] = [
  { accessorKey: 'date', header: 'Date' },
  { accessorKey: 'controlNumber', header: 'Control Number' },
  { accessorKey: 'lessee', header: 'Lessee' },
  { accessorKey: 'companyName', header: 'Company Name' },
  { accessorKey: 'subject', header: 'Subject' },
];
const soaColumns: ColumnDef<any>[] = [
  { accessorKey: 'date', header: 'Date' },
  { accessorKey: 'controlNumber', header: 'Control Number' },
  { accessorKey: 'lessee', header: 'Lessee' },
  { accessorKey: 'companyName', header: 'Company Name' },
  { accessorKey: 'subject', header: 'Subject' },
   { accessorKey: 'periodCovered', header: 'Period Covered' },
  { accessorKey: 'status', header: 'Status' },
  { accessorKey: 'remarks', header: 'Remarks' },
];

const paymentColumns: ColumnDef<any>[] = [
  { accessorKey: 'transactionId', header: 'Transaction ID' },
  { accessorKey: 'paymentDate', header: 'Payment Date' },
];

const demandColumns: ColumnDef<any>[] = [
  { accessorKey: 'id', header: 'ID' },
  { accessorKey: 'dueDate', header: 'Due Date' },
  { accessorKey: 'amountDue', header: 'Amount Due' },
];

const journalColumns: ColumnDef<any>[] = [
  { accessorKey: 'entryId', header: 'Entry ID' },
  { accessorKey: 'description', header: 'Description' },
  { accessorKey: 'amount', header: 'Amount' },
];

const invoiceColumns: ColumnDef<any>[] = [
  { accessorKey: 'invoiceNo', header: 'Invoice Number' },
  { accessorKey: 'status', header: 'Status' },
  { accessorKey: 'total', header: 'Total' },
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

export const getColumnConfig = (viewType: ViewType, customColumns?: ColumnDef<any>[]) => {
  const baseColumns = columnConfigs[viewType] || [];
  return customColumns ? [...baseColumns, ...customColumns] : baseColumns;
};
