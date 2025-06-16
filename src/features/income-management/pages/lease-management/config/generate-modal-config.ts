import { ModalConfig } from '@/features/income-management/types/modal-fields';

export const generateModalConfigs: Record<string, ModalConfig> = {
  'statement-of-account': {
    fields: [
      {
        name: 'lessee',
        label: 'Lessee',
        description: '(Last Name, First Name, & Middle Name)',
        value: '',
        span: 12,
        type: 'text',
      },
      { name: 'location', label: 'Location', value: '', type: 'text', span: 4 },
      {
        name: 'totalArea',
        label: 'Total Area',
        value: '',
        type: 'text',
        span: 4,
      },
      {
        name: 'retailAdjustment',
        label: 'Retail Adjustment',
        value: '',
        type: 'text',
        span: 4,
      },
      {
        name: 'periodFrom',
        label: 'Period From',
        value: '',
        type: 'date',
        span: 6,
      },
      {
        name: 'periodTo',
        label: 'Period To',
        value: '',
        type: 'date',
        span: 6,
      },
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
      { accessorKey: 'balance', header: 'Balance' },
    ],
  },
  'billing-statement': {
    fields: [
      {
        name: 'lessee',
        label: 'Lessee',
        description: 'Last Name, First Name, & Middle Name',
        value: 'Reyes, Maria Clara',
        type: 'text',
        span: 12,
      },
      {
        name: 'location',
        label: 'Location',
        value: '456 Business Ave, Cebu City',
        type: 'text',
        span: 3,
      },
      { name: 'totalArea', label: 'Total Area', value: '200 sqm', type: 'number',span: 3 },
      {
        name: 'monthlyRental',
        label: 'Monthly Rental',
        value: '₱30,000.00',
        type: 'number',
        span: 3,
      },
      {
        name: 'rentalPeriod',
        label: 'Rental Period',
        value: 'March 2024 - February 2026',
        span: 3,
        type: 'date',
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
  'invoice-tracking': {
    fields: [
      {
        name: 'cashSale',
        label: 'Cash Sales',
        value: 'Checked',
        type: 'checkbox',
        span: 3,
      },
      {
        name: 'chargeSale',
        label: 'Charge Sales',
        value: 'Checked',
        type: 'checkbox',
        span: 3,
      },
      {
        name: 'date',
        label: 'Date',
        value: '2025-06-06',
        span: 6,
        type: 'date',
      },
      {
        name: 'registeredName',
        label: 'Registered Name:',
        value: 'Jessica Hernandez',
        type: 'text',
        span: 7,
      },
      {
        name: 'tin',
        label: 'TIN',
        value: '124-512-654-000',
        type: 'text',
        span: 5,
      },
      {
        name: 'businessAddress',
        label: 'Business Address',
        value: 'Original Pares',
        span: 12,
        type: 'text',
      },
    ],
    tableData: [
      {
        invoiceNo: 'INV-001',
        dateIssued: '2025-06-01',
        clientName: 'Acme Corp.',
        amount: 12000.0,
        paymentStatus: 'Paid',
        orNo: 'OR-1001',
      },
      {
        invoiceNo: 'INV-002',
        dateIssued: '2025-06-02',
        clientName: 'Beta Enterprises',
        amount: 8500.0,
        paymentStatus: 'Unpaid',
        orNo: '',
      },
      {
        invoiceNo: 'INV-003',
        dateIssued: '2025-06-03',
        clientName: 'Gamma Trading',
        amount: 15000.0,
        paymentStatus: 'Partial',
        orNo: 'OR-1002',
      },
    ],
    columns: [
      { accessorKey: 'invoiceNo', header: 'Invoice No.' },
      { accessorKey: 'dateIssued', header: 'Date Issued' },
      { accessorKey: 'clientName', header: 'Client Name' },
      { accessorKey: 'amount', header: 'Amount (₱)' },
      { accessorKey: 'paymentStatus', header: 'Payment Status' },
      { accessorKey: 'orNo', header: 'O.R. No.' },
    ],
  },
'jev-general': {
    sections: [
      {
        title: 'Header',
        fields: [
          { name: 'fund', label: 'Fund', type: 'text', span: 3 },
          { name: 'no', label: 'No.', type: 'text', span: 3 },
          { name: 'transactionType', label: 'Transaction Type', type: 'text', span: 3 },
          { name: 'date', label: 'Date', type: 'date', span: 3 },
        ],
      },
      {
        title: 'Entries',
        table: {
          columns: [
            { accessorKey: 'responsibilityCenter', header: 'Responsibility Center' },
            { accessorKey: 'accountTitle', header: 'Account Title' },
            { accessorKey: 'accountCode', header: 'Account Code' },
            { accessorKey: 'debitAmount', header: 'DEBIT' },
            { accessorKey: 'creditAmount', header: 'CREDIT' },
            { accessorKey: 'dueDate', header: 'Due Date' },
          ],
          data: [],
        },
      },
      {
        title: 'Supporting Documents',
        table: {
          columns: [
            { accessorKey: 'date', header: 'Date' },
            { accessorKey: 'description', header: 'Description/ Name' },
            { accessorKey: 'documentNo', header: 'Document No.' },
          ],
          data: [],
        },
      },
      {
        title: 'Particulars',
        fields: [{ name: 'particulars', label: 'Particulars', type: 'textarea', span: 12 }],
      },
      {
        title: 'Attachment',
        fields: [{ name: 'attachment', label: 'Attachment', type: 'textarea', span: 12 }],
      },
      {
        title: 'Signatories',
        fields: [
          { name: 'preparedBy', label: 'Prepared by', type: 'text', span: 6 },
          { name: 'approvedBy', label: 'Approved by', type: 'text', span: 6 },
        ],
      },
    ],
  },

  'jev-subsidiary': {
    sections: [
      {
        title: 'Header',
        fields: [
          { name: 'fund', label: 'Fund', type: 'text', span: 3 },
          { name: 'no', label: 'No.', type: 'text', span: 3 },
          { name: 'transactionType', label: 'Transaction Type', type: 'text', span: 3 },
          { name: 'date', label: 'Date', type: 'date', span: 3 },
        ],
      },
      {
        title: 'Subsidiary Debit Details',
        table: {
          columns: [
            { accessorKey: 'description', header: 'Description/ Name' },
            { accessorKey: 'accountCode', header: 'Account Code' },
            { accessorKey: 'debitAmount', header: 'DEBIT' },
            { accessorKey: 'dueDate', header: 'Due Date' },
          ],
          data: [],
        },
      },
      {
        title: 'Subsidiary Credit Details',
        table: {
          columns: [
            { accessorKey: 'description', header: 'Description/ Name' },
            { accessorKey: 'accountCode', header: 'Account Code' },
            { accessorKey: 'creditAmount', header: 'CREDIT' },
            { accessorKey: 'dueDate', header: 'Due Date' },
          ],
          data: [],
        },
      },
      {
        title: 'Signatories',
        fields: [
          { name: 'preparedBy', label: 'Prepared by', type: 'text', span: 6 },
          { name: 'approvedBy', label: 'Approved by', type: 'text', span: 6 },
        ],
      },
    ],
  },
};

export const getTitle = (viewType: string): string => {
  if (viewType === 'invoice-tracking') return 'Sales Invoice';

  return viewType
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
