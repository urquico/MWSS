import { ViewType } from '@/features/income-management/types/view-types.ts';

const dummyDataMap: Record<ViewType, any[]> = {
  'billing-statement': [
  {
    date: '2024-06-01',
    controlNumber: 'BS-001',
    lessee: 'John Doe',
    companyName: 'Acme Corp',
    subject: 'Monthly Rent',
    dateReceived: '2024-06-02',
    status: 'For Review [1/4]',
    remarks: 'Payment pending'
  },
  {
    date: '2024-06-02',
    controlNumber: 'BS-002',
    lessee: 'Jane Smith',
    companyName: 'Beta LLC',
    subject: 'Water Bill',
    dateReceived: '2024-06-03',
    status: 'Approved',
    remarks: ''
  },
  {
    date: '2024-06-03',
    controlNumber: 'BS-003',
    lessee: 'Alice Johnson',
    companyName: 'Gamma Inc',
    subject: 'Maintenance Fee',
    dateReceived: '2024-06-04',
    status: 'Returned',
    remarks: 'Incorrect amount'
  },
  {
    date: '2024-06-04',
    controlNumber: 'BS-004',
    lessee: 'Bob Lee',
    companyName: 'Delta Ltd',
    subject: 'Electricity Bill',
    dateReceived: '2024-06-05',
    status: 'For Review [2/4]',
    remarks: ''
  },
  {
    date: '2024-06-05',
    controlNumber: 'BS-005',
    lessee: 'Carol King',
    companyName: 'Epsilon Co',
    subject: 'Monthly Rent',
    dateReceived: '2024-06-06',
    status: 'Approved',
    remarks: 'Paid early'
  },
  {
    date: '2024-06-06',
    controlNumber: 'BS-006',
    lessee: 'David Kim',
    companyName: 'Zeta Group',
    subject: 'Water Bill',
    dateReceived: '2024-06-07',
    status: 'Returned',
    remarks: 'Missing signature'
  },
  {
    date: '2024-06-07',
    controlNumber: 'BS-007',
    lessee: 'Eva Green',
    companyName: 'Eta Solutions',
    subject: 'Maintenance Fee',
    dateReceived: '2024-06-08',
    status: 'Approved',
    remarks: ''
  },
  {
    date: '2024-06-08',
    controlNumber: 'BS-008',
    lessee: 'Frank Moore',
    companyName: 'Theta Services',
    subject: 'Electricity Bill',
    dateReceived: '2024-06-09',
    status: 'For Review',
    remarks: ''
  },
  {
    date: '2024-06-09',
    controlNumber: 'BS-009',
    lessee: 'Grace Lee',
    companyName: 'Iota Holdings',
    subject: 'Monthly Rent',
    dateReceived: '2024-06-10',
    status: 'Returned',
    remarks: 'Document incomplete'
  },
  {
    date: '2024-06-10',
    controlNumber: 'BS-010',
    lessee: 'Henry Ford',
    companyName: 'Kappa Ventures',
    subject: 'Water Bill',
    dateReceived: '2024-06-11',
    status: 'Approved',
    remarks: ''
  },
  {
    date: '2024-06-11',
    controlNumber: 'BS-011',
    lessee: 'Ivy Chan',
    companyName: 'Lambda Partners',
    subject: 'Maintenance Fee',
    dateReceived: '2024-06-12',
    status: 'For Review',
    remarks: ''
  },
  {
    date: '2024-06-12',
    controlNumber: 'BS-012',
    lessee: 'Jack Black',
    companyName: 'Mu Technologies',
    subject: 'Electricity Bill',
    dateReceived: '2024-06-13',
    status: 'Approved',
    remarks: ''
  },
  {
    date: '2024-06-13',
    controlNumber: 'BS-013',
    lessee: 'Karen White',
    companyName: 'Nu Enterprises',
    subject: 'Monthly Rent',
    dateReceived: '2024-06-14',
    status: 'Returned',
    remarks: 'Late submission'
  },
  {
    date: '2024-06-14',
    controlNumber: 'BS-014',
    lessee: 'Leo Brown',
    companyName: 'Xi Logistics',
    subject: 'Water Bill',
    dateReceived: '2024-06-15',
    status: 'Approved',
    remarks: ''
  },
  {
    date: '2024-06-15',
    controlNumber: 'BS-015',
    lessee: 'Mona Lisa',
    companyName: 'Omicron Foods',
    subject: 'Maintenance Fee',
    dateReceived: '2024-06-16',
    status: 'For Review',
    remarks: ''
  }
],
   'statement-of-account': [
    {
      date: '2024-06-01',
      controlNumber: 'SOA-001',
      lessee: 'SOA-1',
      companyName: 'Acme Corp',
      subject: 'Monthly Rent',
      periodCovered: '2024-06-01 to 2024-06-30',
      status: 'For Review',
      remarks: 'Payment received on time'
    },
    {
      date: '2024-06-02',
      controlNumber: 'SOA-002',
      lessee: 'SOA-2',
      companyName: 'Beta LLC',
      subject: 'Water Bill',
      periodCovered: '2024-06-01 to 2024-06-30',
      status: 'Approved',
      remarks: 'Pending payment'
    },
    {
      date: '2024-06-03',
      controlNumber: 'SOA-003',
      lessee: 'SOA-3',
      companyName: 'Gamma Inc',
      subject: 'Maintenance Fee',
      periodCovered: '2024-06-01 to 2024-06-30',
      status: 'For Review',
      remarks: 'Partial payment received'
    },
    {
      date: '2024-06-04',
      controlNumber: 'SOA-004',
      lessee: 'SOA-4',
      companyName: 'Delta Ltd',
      subject: 'Electricity Bill',
      periodCovered: '2024-06-01 to 2024-06-30',
      status: 'For Review',
      remarks: 'Overdue by 5 days'
    },
    {
      date: '2024-06-05',
      controlNumber: 'SOA-005',
      lessee: 'SOA-5',
      companyName: 'Epsilon Co',
      subject: 'Monthly Rent',
      periodCovered: '2024-06-01 to 2024-06-30',
      status: 'Returned',
      remarks: ''
    },
    {
      date: '2024-06-06',
      controlNumber: 'SOA-006',
      lessee: 'SOA-6',
      companyName: 'Zeta Group',
      subject: 'Water Bill',
      periodCovered: '2024-06-01 to 2024-06-30',
      status: 'Approved',
      remarks: 'Awaiting confirmation'
    },
    {
      date: '2024-06-07',
      controlNumber: 'SOA-007',
      lessee: 'SOA-7',
      companyName: 'Eta Solutions',
      subject: 'Maintenance Fee',
      periodCovered: '2024-06-01 to 2024-06-30',
      status: 'Returned',
      remarks: 'Paid via bank transfer'
    },
    {
      date: '2024-06-08',
      controlNumber: 'SOA-008',
      lessee: 'SOA-8',
      companyName: 'Theta Services',
      subject: 'Electricity Bill',
      periodCovered: '2024-06-01 to 2024-06-30',
      status: 'Approved',
      remarks: ''
    },
    {
      date: '2024-06-09',
      controlNumber: 'SOA-009',
      lessee: 'SOA-9',
      companyName: 'Iota Holdings',
      subject: 'Monthly Rent',
      periodCovered: '2024-06-01 to 2024-06-30',
      status: 'Returned',
      remarks: ''
    },
    {
      date: '2024-06-10',
      controlNumber: 'SOA-010',
      lessee: 'SOA-10',
      companyName: 'Kappa Ventures',
      subject: 'Water Bill',
      periodCovered: '2024-06-01 to 2024-06-30',
      status: 'Returned',
      remarks: 'Reminder sent'
    }
  ],
  'payment-monitoring': [
    { transactionId: 'TX-001', paymentDate: '2025-05-01' },
    { transactionId: 'TX-002', paymentDate: '2025-05-02' },
  ],
  'demand-to-pay': [
    { id: 'DTP-001', dueDate: '2025-05-10', amountDue: 1500 },
    { id: 'DTP-002', dueDate: '2025-05-11', amountDue: 2000 },
  ],
  'journal-entry': [
    { entryId: 'JE-001', description: 'Adjustment', amount: 500 },
    { entryId: 'JE-002', description: 'Correction', amount: -300 },
  ],
  'invoice-tracking': [
    { invoiceNo: 'INV-001', status: 'Paid', total: 1000 },
    { invoiceNo: 'INV-002', status: 'Pending', total: 2500 },
  ],
  'tenant-information': [
    { tenantId: 'TEN-001', name: 'Tenant A', unit: '101-A' },
    { tenantId: 'TEN-002', name: 'Tenant B', unit: '102-B' },
  ],
  'raw-water-statement': [
    { statementId: 'RW-001', usage: 500, period: 'April 2025' },
    { statementId: 'RW-002', usage: 750, period: 'May 2025' },
  ],
  'raw-water-payment': [
    { paymentId: 'RWP-001', amount: 1000, paidDate: '2025-05-01' },
    { paymentId: 'RWP-002', amount: 1500, paidDate: '2025-05-02' },
  ],
  'concession-fee': [
    { feeId: 'CF-001', description: 'Maintenance Fee', amount: 300 },
    { feeId: 'CF-002', description: 'Service Fee', amount: 450 },
  ],
};

export default dummyDataMap;
