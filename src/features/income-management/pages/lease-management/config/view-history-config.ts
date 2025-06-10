import { ColumnDef } from '@tanstack/react-table';

interface ViewHistoryConfig {
  title: string;
  label: string;
  tableData: any[];
  columns: ColumnDef<any, any>[];
}

export const viewHistoryConfigs: Record<string, ViewHistoryConfig> = {
  'statement-of-account': {
    title: "Billing Activity",
    label: "Statement of Account History",
    tableData: [
      { date: '2023-01-01', principal: 25000, arrearages: 0, interest: 0, vat: 3000, gross: 28000, payment: 28000, orNo: '12345' },
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
    ]
  },
'billing-statement': {
    title: "Billing Activity",
    label: "Billing Statement History",
    tableData: [
      { date: "2025-01-01", user: "Juan Dela Cruz", activity: "Created billing statement", remarks: "Initial billing for January" },
      { date: "2025-02-01", user: "Maria Santos", activity: "Updated billing statement", remarks: "Adjustment for February" },
      { date: "2025-03-01", user: "Pedro Reyes", activity: "Sent reminder", remarks: "Payment reminder sent" },
      { date: "2025-04-01", user: "Ana Lim", activity: "Received payment", remarks: "Payment received" },
      { date: "2025-05-01", user: "Carlos Tan", activity: "Created billing statement", remarks: "Initial billing for May" },
      { date: "2025-06-01", user: "Liza Cruz", activity: "Updated billing statement", remarks: "Adjustment for June" },
      { date: "2025-07-01", user: "Ramon Lee", activity: "Sent reminder", remarks: "Payment reminder sent" },
      { date: "2025-08-01", user: "Grace Yu", activity: "Received payment", remarks: "Payment received" },
    ],
    columns: [
      { accessorKey: "date", header: "Date" },
      { accessorKey: "user", header: "User" },
      { accessorKey: "activity", header: "Activity" },
      { accessorKey: "remarks", header: "Remarks" },
    ]
  }
};

// lessee information data
export const quadrantData = [
    { label: 'Quadrant 1', value: 10, color: '#e5b4f2' },
    { label: 'Quadrant 2', value: 2, color: '#b5ccfa' },
    { label: 'Quadrant 3', value: 6, color: '#a4e4f5' },
    { label: 'Quadrant 4', value: 7, color: '#ffcb94' },
];

export const dashboardSummaryItems = [
    {
      label: 'RIGHT OF WAY',
      value: 25,
      color: '#E3F2FD',
      textColor: '#0D47A1',
       showHalfCircle: true,
    },
    {
      label: 'LESSEE SPACE',
      value: 87,
      color: '#E8F5E9',
      textColor: '#1B5E20',
       showHalfCircle: true,
    },
    {
      label: 'LESSEE PARKING',
      value: 15,
      color: '#FFF3E0',
      textColor: '#E65100',
       showHalfCircle: true,
    },
    {
      label: 'LESSEE BUILDING',
      value: 10,
      color: '#FCE4EC',
      textColor: '#880E4F',
       showHalfCircle: true,
    },
    {
      label: 'TOTAL TENANT',
      value: '435',
      color: '#EDE7F6',
      textColor: '#4A148C',
       showHalfCircle: true,
    }
  ];
