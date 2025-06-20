import { ModalConfig } from '@/features/income-management/types/modal-fields';

export const generateModalConfigs: Record<string, ModalConfig> = {
'raw-water-billing-statement': {
    fields: [
      {
        name: 'firstName',
        label: 'First Name',
        placeholder: 'Enter First Name',
        value: '',
        span: 4,
        type: 'text',
      },
      {
        name: 'middleName',
        label: 'Middle Name',
        placeholder: 'Enter Middle Name',
        value: '',
        span: 4,
        type: 'text',
      },
      {
        name: 'lastName',
        label: 'Last Name',
        placeholder: 'Enter Last Name',
        value: '',
        span: 4,
        type: 'text',
      },
      {
        name: 'location',
        label: 'Location',
        placeholder: 'Enter Business Address',
        value: '',
        type: 'text',
        span: 12,
      },
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
      {
        name: 'totalArea',
        label: 'Total Area',
        value: '200 sqm',
        type: 'number',
        span: 3,
      },
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
        clientName: 'Sample Corp',
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
          {
            name: 'fund',
            label: 'Fund',
            type: 'text',
            span: 3,
            disabled: true,
          },
          { name: 'no', label: 'No.', type: 'text', span: 3, disabled: true },
          {
            name: 'transactionType',
            label: 'Transaction Type',
            type: 'text',
            span: 3,
            disabled: true,
          },
          {
            name: 'date',
            label: 'Date',
            type: 'date',
            span: 3,
            disabled: true,
          },
        ],
      },
      {
        title: 'Entries',
        table: {
          columns: [
            {
              accessorKey: 'responsibilityCenter',
              header: 'Responsibility Center',
            },
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
        fields: [
          {
            name: 'particulars',
            label: 'Particulars',
            type: 'textarea',
            span: 12,
            disabled: true,
          },
        ],
      },
    ],
  },

  'jev-subsidiary': {
    sections: [
      {
        title: 'Header',
        fields: [
          {
            name: 'fund',
            label: 'Fund',
            type: 'text',
            span: 3,
            disabled: true,
          },
          { name: 'no', label: 'No.', type: 'text', span: 3, disabled: true },
          {
            name: 'transactionType',
            label: 'Transaction Type',
            type: 'text',
            span: 3,
            disabled: true,
          },
          {
            name: 'date',
            label: 'Date',
            type: 'date',
            span: 3,
            disabled: true,
          },
        ],
      },
      {
        title: 'Subsidiary Transaction Details of',
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
        title: 'Subsidiary Transaction Details of',
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
    ],
  },
};
export const rawWaterBillingStatementTables = [
  // 1. Main complex table (with columns)
  {
    name: 'main',
    columns: [
      { header: 'Unpaid Balance', accessor: 'unpaidBalance' },
      { header: 'Penalty', accessor: 'penalty' },
      { header: 'Total Current Due', accessor: 'totalCurrentDue' },
      { header: 'Due Date', accessor: 'dueDate' },
      { header: 'Total Amount Due', accessor: 'totalAmountDue' },
    ],
    data: [
      {
        unpaidBalance: '10,000.00',
        penalty: '500.00',
        totalCurrentDue: '5,000.00',
        dueDate: '2024-07-31',
        totalAmountDue: '15,500.00',
      },
    ],
  },

  // 2. Account Information (vertical, just label/value)
  {
    name: 'accountInfo',
    data: [
      { label: 'Account No.', value: '' },
      { label: 'Meter No. / WSN', value: '' }, // combine as needed in your UI
      { label: 'MRR', value: '' },
    ],
  },

  // 3. Billing Information
  {
    name: 'billingInfo',
    data: [
      { label: 'Meter Reading Date / Billing Period', value: '' },
      { label: 'Present Reading', value: '' },
      { label: 'Previous Reading / Total Consumption', value: '' },
      { label: 'Total Current Due', value: '' },
      { label: 'Due Date', value: '' },
      { label: 'Next Meter Reading Date', value: '' },
    ],
  },

  // 4. Charges
  {
    name: 'charges',
    data: [
      { label: 'Basic Charge', value: '' },
      { label: 'CERA', value: '' },
      { label: 'Miscellaneous', value: '' },
      { label: 'Total Current Due', value: '' },
    ],
  },

  // 5. Payment
  {
    name: 'payment',
    data: [
      { label: 'Amount Paid', value: '' },
      { label: 'O.R. Date', value: '' },
      { label: 'O.R. No.', value: '' },
      { label: 'Period Covered', value: '' },
    ],
  },
];
export const consumptionHistoryChart = {
  title: 'Consumption History',
  height: 100,
  width: 300,
  data: [
    { month: 'January', consumption: 120 },
    { month: 'February', consumption: 135 },
    { month: 'March', consumption: 110 },
    { month: 'April', consumption: 145 },
    { month: 'May', consumption: 130 },
    { month: 'June', consumption: 125 },
    { month: 'July', consumption: 140 },
  ],
  series: [
    { name: 'consumption', color: '#76A9F9', label: 'Consumption (m³)' },
  ],
};
export const getTitle = (viewType: string): string => {
  if (viewType === 'invoice-tracking') return 'Sales Invoice';

  return viewType
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
