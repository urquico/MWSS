import { ColumnDef } from '@tanstack/react-table';
import { renderStatusCell } from '@/features/income-management/utils/status-utils';

interface FieldConfig {
  name: string;
  label: string;
  description?: string;
  value: string | number;
  span?: number;
}

interface SectionConfig {
  title: string; 
  fields: FieldConfig[];
}

interface GenerateModalConfig {
  // Allow either direct fields array or sections array
  fields?: FieldConfig[]; // For simple forms without sections
  sections?: SectionConfig[]; // For forms with grouped sections
  tableData?: any[]; // Make optional since not all views need tables
  columns?: ColumnDef<any, any>[]; // Make optional
}


export const generateModalConfigs: Record<string, GenerateModalConfig> = {
  'statement-of-account': {
    fields: [
      {
        name: 'lessee',
        label: 'Lessee',
        description: '(Last Name, First Name, & Middle Name)',
        value: '',
        span: 12,
      },
      { name: 'location', label: 'Location', value: '', span: 4 },
      { name: 'totalArea', label: 'Total Area', value: '', span: 4 },
      {
        name: 'retailAdjustment',
        label: 'Retail Adjustment',
        value: '',
        span: 4,
      },
      { name: 'periodFrom', label: 'Period From', value: '', span: 6 },
      { name: 'periodTo', label: 'Period To', value: '', span: 6 },
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
  'invoice-tracking': {
    fields: [
      {
        name: 'cashSale',
        label: 'Cash Sales',
        value: 'Checked',
        span: 3,
      },
      {
        name: 'chargeSale',
        label: 'Charge Sales',
        value: 'Checked',

        span: 3,
      },
      {
        name: 'date',
        label: 'Date',
        value: '2025-06-06',
        span: 6,
      },
      {
        name: 'registeredName',
        label: 'Registered Name:',
        value: 'Jessica Hernandez',
        span: 7,
      },
      {
        name: 'tin',
        label: 'TIN',
        value: '124-512-654-000',
        span: 5,
      },
      {
        name: 'businessAddress',
        label: 'Business Address',
        value: 'Original Pares',
        span: 12,
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
  'lessee-information': {
    sections: [
      {
        title: 'Lessee Information',
        fields: [
          {
            name: 'lesseeNumber',
            label: 'Lessee Number',
            value: '18291829182',
            span: 6,
          },
          {
            name: 'lesseeName',
            label: 'Lessee Name',
            value: 'ABDA Construction, Inc./ Abel M. Pangilinan',
            span: 6,
          },
          {
            name: 'lesseeLocation',
            label: 'Lessee Location',
            value: '15 & 17 Fitzgerald St., Balara, Filters, QC',
            span: 6,
          },
          {
            name: 'tinNumber',
            label: 'TIN Number',
            value: '12-365-6789-0000',
            span: 6,
          },
          {
            name: 'contactPerson',
            label: 'Contact Person',
            value: 'Juan Dela Cruz',
            span: 6,
          },
          {
            name: 'contactNumber',
            label: 'Contact Number',
            value: '9182918392',
            span: 6,
          },
          {
            name: 'assetAssignment',
            label: 'Asset Assignment',
            value: 'MWSS-Balara Filters',
            span: 6,
          },
          {
            name: 'taxProvision',
            label: 'Tax Provision',
            value: 'VAT Inclusive',
            span: 6,
          },
          {
            name: 'classification',
            label: 'Classification',
            value: 'Large',
            span: 6,
          },
          {
            name: 'leasePurpose',
            label: 'Type of Lease / Purpose',
            value: 'For garage and stock piling of pipe laying materials only',
            span: 6,
          },
          {
            name: 'quadrant',
            label: 'Quadrant',
            value:
              'Q3 - has an expired lease contract but is updated with lease payments',
            span: 6,
          },
          {
            name: 'registrationDate',
            label: 'Date of Registration',
            value: 'April 10, 2025',
            span: 6,
          },
        ],
      },
      {
        title: 'Lease Contract Information',
        fields: [
          {
            name: 'contractStart',
            label: 'Contract Start',
            value: '06/10/2009',
            span: 6,
          },
          {
            name: 'monthlyRate',
            label: 'Monthly Rate',
            value: 119201.02,
            span: 6,
          },
          {
            name: 'location',
            label: 'Location',
            value: 'Balara Filters',
            span: 6,
          },
          {
            name: 'contractEnd',
            label: 'Contract End',
            value: '10/5/2010',
            span: 6,
          },
          {
            name: 'areaSQM',
            label: 'Area SQM',
            value: 700.0,
            span: 6,
          },
          {
            name: 'interestProvision',
            label: 'Interest Provision',
            value: '0%',
            span: 6,
          },
          {
            name: 'escalation',
            label: 'Escalation',
            value: '10%',
            span: 6,
          },
          {
            name: 'contractStatus',
            label: 'Contract Status',
            value: 'Active',
            span: 6,
          },
          {
            name: 'notes',
            label: 'Notes / Remarks',
            value: 'n/a',
            span: 6,
          },
          {
            name: 'contractStatusDetails',
            label: 'Contract Status Details',
            value: 'For filing of case',
            span: 6,
          },
          {
            name: 'expirationDate',
            label: 'Expiration Date',
            value: '06/02/2025',
            span: 6,
          },
        ],
      },
      {
  title: 'Attachments',
  fields: [
    {
      name: 'pdfFile',
      label: 'Lease Contract (PDF)',
      value: 'lease-contract.pdf',
      description: 'PDF file sample',
      span: 6,
    },
    {
      name: 'imageFile',
      label: 'Site Photo (JPG)',
      value: 'site-photo.jpg',
      description: 'JPG image sample',
      span: 6,
    },
    {
      name: 'docFile',
      label: 'Lessee Application (DOC)',
      value: 'application.docx',
      description: 'Word document sample',
      span: 6,
    },
  ],
}

    ],
    tableData: [
      {
        date: 'March 17, 2025',
        soaNumber: 'MWSS FD-F-013',
        amount: '513,275.00',
        status: 'Paid',
      },
      {
        date: 'April 17, 2025',
        soaNumber: 'MWSS FD-F-014',
        amount: '201,112.00',
        status: 'Paid',
      },
      {
        date: 'May 17, 2025',
        soaNumber: 'MWSS FD-F-015',
        amount: '12,000.00',
        status: 'Paid',
      },
      {
        date: 'June 17, 2025',
        soaNumber: 'MWSS FD-F-016',
        amount: '12,543.00',
        status: 'Unpaid',
      },
      {
        date: 'July 17, 2025',
        soaNumber: 'MWSS FD-F-017',
        amount: '74,322.00',
        status: 'Paid',
      },
    ],
    columns: [
      {
        accessorKey: 'date',
        header: 'Date',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        accessorKey: 'soaNumber',
        header: 'SOA No.',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        accessorKey: 'amount',
        header: 'Amount',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }) => renderStatusCell(row.original.status),
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
