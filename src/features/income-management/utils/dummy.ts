import { ViewType } from '@/features/income-management/types/view-types.ts';

const dummyDataMap: Record<ViewType, any[]> = {
  'billing-statement': [
    {
      date: '2024-06-01',
      controlNumber: 'BS-001',
      lessee: 'John Doe',
      companyName: 'Acme Corp',
      subject: 'Monthly Rent'
    },
    {
      date: '2024-06-02',
      controlNumber: 'BS-002',
      lessee: 'Jane Smith',
      companyName: 'Beta LLC',
      subject: 'Water Bill'
    },
    {
      date: '2024-06-03',
      controlNumber: 'BS-003',
      lessee: 'Alice Johnson',
      companyName: 'Gamma Inc',
      subject: 'Maintenance Fee'
    },
    {
      date: '2024-06-04',
      controlNumber: 'BS-004',
      lessee: 'Bob Lee',
      companyName: 'Delta Ltd',
      subject: 'Electricity Bill'
    },
    {
      date: '2024-06-05',
      controlNumber: 'BS-005',
      lessee: 'Carol King',
      companyName: 'Epsilon Co',
      subject: 'Monthly Rent'
    },
    {
      date: '2024-06-06',
      controlNumber: 'BS-006',
      lessee: 'David Kim',
      companyName: 'Zeta Group',
      subject: 'Water Bill'
    },
    {
      date: '2024-06-07',
      controlNumber: 'BS-007',
      lessee: 'Eva Green',
      companyName: 'Eta Solutions',
      subject: 'Maintenance Fee'
    },
    {
      date: '2024-06-08',
      controlNumber: 'BS-008',
      lessee: 'Frank Moore',
      companyName: 'Theta Services',
      subject: 'Electricity Bill'
    },
    {
      date: '2024-06-09',
      controlNumber: 'BS-009',
      lessee: 'Grace Lee',
      companyName: 'Iota Holdings',
      subject: 'Monthly Rent'
    },
    {
      date: '2024-06-10',
      controlNumber: 'BS-010',
      lessee: 'Henry Ford',
      companyName: 'Kappa Ventures',
      subject: 'Water Bill'
    },
    {
      date: '2024-06-11',
      controlNumber: 'BS-011',
      lessee: 'Ivy Chan',
      companyName: 'Lambda Partners',
      subject: 'Maintenance Fee'
    },
    {
      date: '2024-06-12',
      controlNumber: 'BS-012',
      lessee: 'Jack Black',
      companyName: 'Mu Technologies',
      subject: 'Electricity Bill'
    },
    {
      date: '2024-06-13',
      controlNumber: 'BS-013',
      lessee: 'Karen White',
      companyName: 'Nu Enterprises',
      subject: 'Monthly Rent'
    },
    {
      date: '2024-06-14',
      controlNumber: 'BS-014',
      lessee: 'Leo Brown',
      companyName: 'Xi Logistics',
      subject: 'Water Bill'
    },
    {
      date: '2024-06-15',
      controlNumber: 'BS-015',
      lessee: 'Mona Lisa',
      companyName: 'Omicron Foods',
      subject: 'Maintenance Fee'
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
