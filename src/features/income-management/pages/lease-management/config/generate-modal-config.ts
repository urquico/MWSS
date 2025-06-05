import { ColumnDef } from '@tanstack/react-table';

interface GenerateModalConfig {
  fields: {
    name: string;
    label: string;
    description?: string;
    value: string;
    span: number;
  }[];
  tableData: any[];
  columns: ColumnDef<any, any>[];
}

export const generateModalConfigs: Record<string, GenerateModalConfig> = {
  'statement-of-account': {
    fields: [
      {
        name: 'lessee',
        label: 'Lessee',
        description: 'Last Name, First Name, & Middle Name',
        value: '',
        span: 12,
      },
      { name: 'location', label: 'Location', value: '', span: 3 },
      { name: 'principal', label: 'Principal', value: '', span: 3 },
      {
        name: 'retailAdjustment',
        label: 'Retail Adjustment',
        value: '',
        span: 3,
      },
      { name: 'periodFrom', label: 'Period From', value: '', span: 3 },
      { name: 'periodTo', label: 'Period To', value: '', span: 3 },
    ],
    tableData: [
      {
        date: '2023-01-01',
        principal: 25000,
        arrearages: 0,
        interest: 0,
        vat: 3000,
        gross: 28000,
        payment: 28000,
        orNo: '12345',
      },
    ],
    columns: [
      { accessorKey: 'date', header: 'Date' },
      { accessorKey: 'principal', header: 'Principal (a)' },
      { accessorKey: 'arrearages', header: 'Arrearages (b)' },
      { accessorKey: 'interest', header: 'Interest (c) = (b) x 2%' },
      { accessorKey: 'vat', header: '12% VAT (d)' },
      { accessorKey: 'gross', header: 'Gross (a) + (c) + (d)' },
      { accessorKey: 'payment', header: 'Payment' },
      { accessorKey: 'orNo', header: 'O.R. No.' },
    ],
  },

  'billing-statement': {
    fields: [
      {
        name: 'lessee',
        label: 'Lessee',
        description: 'Last Name, First Name, & Middle Name',
        value: 'Reyes, Maria Clara',
        span: 12,
      },
      {
        name: 'location',
        label: 'Location',
        value: '456 Business Ave, Cebu City',
        span: 3,
      },
      { name: 'totalArea', label: 'Total Area', value: '200 sqm', span: 3 },
      {
        name: 'monthlyRental',
        label: 'Monthly Rental',
        value: '₱30,000.00',
        span: 3,
      },
      {
        name: 'rentalPeriod',
        label: 'Rental Period',
        value: 'March 2024 - February 2026',
        span: 3,
      },
    ],
    tableData: [
      {
        date: '2024-03-01',
        principal: 30000,
        arrearages: 0,
        interest: 0,
        vat: 3600,
        gross: 33600,
        payment: 33600,
        orNo: '98765',
      },
    ],
    columns: [
      { accessorKey: 'date', header: 'Date' },
      { accessorKey: 'principal', header: 'Principal (a)' },
      { accessorKey: 'arrearages', header: 'Arrearages (b)' },
      { accessorKey: 'interest', header: 'Interest (c) = (b) x 2%' },
      { accessorKey: 'vat', header: '12% VAT (d)' },
      { accessorKey: 'gross', header: 'Gross (a) + (c) + (d)' },
      { accessorKey: 'payment', header: 'Payment' },
      { accessorKey: 'orNo', header: 'O.R. No.' },
    ],
  },
    
};


export const getTitle = (viewType: string): string => {
  if (viewType === 'invoice-tracking') return 'Sales Invoice';

  return viewType
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
