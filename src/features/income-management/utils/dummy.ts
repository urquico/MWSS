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
  ],'payment-reconciliation': [
    {
      transactionId: 'PR-001',
      controlNumber: 'BS-001',
      lessee: 'John Doe',
      companyName: 'Acme Corp',
      paymentDate: '2024-06-01',
      amountPaid: 12000,
      paymentMethod: 'Bank Transfer',
      status: 'Reconciled'
    },
    {
      transactionId: 'PR-002',
      controlNumber: 'BS-002',
      lessee: 'Jane Smith',
      companyName: 'Beta LLC',
      paymentDate: '2024-06-02',
      amountPaid: 2500,
      paymentMethod: 'Check',
      status: 'Pending Verification'
    },
    {
      transactionId: 'PR-003',
      controlNumber: 'BS-003',
      lessee: 'Alice Johnson',
      companyName: 'Gamma Inc',
      paymentDate: '2024-06-03',
      amountPaid: 3400,
      paymentMethod: 'Cash',
      status: 'Reconciled'
    }
  ],
  'payment-history': [
   {
    soaControlNumber: 'SOA-001',
    soaAmount: 12000,
    orDate: '2024-05-30',
    lessee: 'John Doe',
    orNo: 'OR-001',
    paymentMade: 12000,
    balanceDue: 0,
  },
  {
    soaControlNumber: 'SOA-002',
    soaAmount: 2500,
    orDate: '2024-05-31',
    lessee: 'Jane Smith',
    orNo: 'OR-002',
    paymentMade: 2500,
    balanceDue: 0,
  },
  {
    soaControlNumber: 'SOA-003',
    soaAmount: 3400,
    orDate: '2024-06-01',
    lessee: 'Alice Johnson',
    orNo: 'OR-003',
    paymentMade: 2400,
    balanceDue: 1000,
  },
  {
    soaControlNumber: 'SOA-004',
    soaAmount: 3000,
    orDate: '2024-06-01',
    lessee: 'Alice Johnson',
    orNo: 'OR-004',
    paymentMade: 1000,
    balanceDue: 2000,
  },
  ],
 'payment-reminder': [
  {
    lessee: 'John Doe',
    noticeCount: 2,
    demandDate: '2024-06-10',
    controlNumber: 'DTP-001',
    amount: 12000,
    remarks: 'Pending payment, last notice sent 2024-06-01'
  },
  {
    lessee: 'Jane Smith',
    noticeCount: 1,
    demandDate: '2024-06-12',
    controlNumber: 'DTP-002',
    amount: 2500,
    remarks: 'Paid on 2024-06-05'
  },
  {
    lessee: 'Alice Johnson',
    noticeCount: 3,
    demandDate: '2024-06-15',
    controlNumber: 'DTP-003',
    amount: 3400,
    remarks: 'Unpaid, last reminder sent 2024-06-05'
  }
],
 'demand-to-pay': [
  {
    status: 'approved',
    date: '2025-06-01',
    controlNumber: 'CN-001',
    lessee: 'Juan Dela Cruz',
    companyName: 'Alpha Corp',
    subject: 'Lease Renewal',
    dateReceived: '2025-05-28',
  },
  {
    status: 'for review[1/4]',
    date: '2025-06-02',
    controlNumber: 'CN-002',
    lessee: 'Maria Santos',
    companyName: 'Beta Ltd',
    subject: 'Lease Termination',
    dateReceived: '2025-05-30',
  },
  {
    status: 'settled [1/3]',
    date: '2025-05-30',
    controlNumber: 'CN-003',
    lessee: 'Pedro Gomez',
    companyName: 'Gamma Ventures',
    subject: 'Payment Settlement',
    dateReceived: '2025-05-29',
  },
  {
    status: 'returned',
    date: '2025-05-25',
    controlNumber: 'CN-004',
    lessee: 'Carla Ramos',
    companyName: 'Delta Corp',
    subject: 'Document Review',
    dateReceived: '2025-05-23',
  },
  {
    status: 'rejected',
    date: '2025-05-20',
    controlNumber: 'CN-005',
    lessee: 'Luis Enriquez',
    companyName: 'Epsilon Inc',
    subject: 'Late Submission',
    dateReceived: '2025-05-19',
  },
  {
    status: 'settled [2/4]',
    date: '2025-05-15',
    controlNumber: 'CN-006',
    lessee: 'Grace Villanueva',
    companyName: 'Zeta Tech',
    subject: 'Installment Payment',
    dateReceived: '2025-05-14',
  },
  {
    status: 'unpaid',
    date: '2025-05-10',
    controlNumber: 'CN-007',
    lessee: 'Danilo Cruz',
    companyName: 'Theta Holdings',
    subject: 'Outstanding Invoice',
    dateReceived: '2025-05-09',
  },
  {
    status: 'completed',
    date: '2025-05-05',
    controlNumber: 'CN-008',
    lessee: 'Elaine Lopez',
    companyName: 'Iota Services',
    subject: 'Contract Completion',
    dateReceived: '2025-05-03',
  },
  {
    status: 'overdue',
    date: '2025-04-30',
    controlNumber: 'CN-009',
    lessee: 'Oscar Mendoza',
    companyName: 'Kappa Build',
    subject: 'Overdue Rent',
    dateReceived: '2025-04-28',
  },
  {
    status: 'settled [3/3]',
    date: '2025-04-25',
    controlNumber: 'CN-010',
    lessee: 'Isabel Navarro',
    companyName: 'Lambda Co.',
    subject: 'Final Payment',
    dateReceived: '2025-04-24',
  },
],

'journal-entry': [

  {
    jevDate: '2025-06-02',
    jevNo: 'JEV-002',
    accountTitle: 'Accounts Payable',
    particulars: 'Correction of invoice error',
    debit: 0,
    credit: 300,
  },
  {
    jevDate: '2025-06-03',
    jevNo: 'JEV-003',
    accountTitle: 'Office Supplies',
    particulars: 'Purchase of supplies',
    debit: 200,
    credit: 0,
  },
  {
    jevDate: '2025-06-03',
    jevNo: 'JEV-004',
    accountTitle: 'Cash in Bank',
    particulars: 'Payment for office supplies',
    debit: 0,
    credit: 200,
  },
  {
    jevDate: '2025-06-04',
    jevNo: 'JEV-005',
    accountTitle: 'Salaries Expense',
    particulars: 'Salary payment for June',
    debit: 1000,
    credit: 0,
  }
],

 'invoice-tracking': [
  {
    lessee: 'Acme Corp.',
    invoiceDate: '2025-06-01',
    invoiceNo: 'INV-001',
    amount: 1000,
    status: 'Paid',
  },
  {
    lessee: 'Beta Solutions',
    invoiceDate: '2025-06-02',
    invoiceNo: 'INV-002',
    amount: 2500,
    status: 'Pending',
  },
  {
    lessee: 'Cyber Systems',
    invoiceDate: '2025-06-03',
    invoiceNo: 'INV-003',
    amount: 1850,
    status: 'Overdue',
  },
  {
    lessee: 'Delta Logistics',
    invoiceDate: '2025-06-04',
    invoiceNo: 'INV-004',
    amount: 3200,
    status: 'Paid',
  },
  {
    lessee: 'Eco Rentals',
    invoiceDate: '2025-06-05',
    invoiceNo: 'INV-005',
    amount: 1450,
    status: 'Cancelled',
  },
  {
    lessee: 'FastTrack Inc.',
    invoiceDate: '2025-06-06',
    invoiceNo: 'INV-006',
    amount: 2750,
    status: 'Pending',
  },
],

 'lessee-information': [
  {
    status: 'Active',
    lesseeNo: 'LES-001',
    nameOfLessee: 'Juan Dela Cruz',
    location: 'Unit 101-A',
    lesseeTerm: 'Jan 2024 - Dec 2024',
    classification: 'Retail',
    remarks: 'On time'
  },
  {
    status: 'Expired',
    lesseeNo: 'LES-002',
    nameOfLessee: 'Maria Santos',
    location: 'Unit 102-B',
    lesseeTerm: 'Feb 2023 - Jan 2024',
    classification: 'Food',
    remarks: 'Contract ended'
  },
  {
    status: 'Active',
    lesseeNo: 'LES-003',
    nameOfLessee: 'Jose Rizal',
    location: 'Unit 103-C',
    lesseeTerm: 'Mar 2024 - Feb 2025',
    classification: 'Service',
    remarks: 'New tenant'
  },
  {
    status: 'Expired',
    lesseeNo: 'LES-004',
    nameOfLessee: 'Andres Bonifacio',
    location: 'Unit 104-D',
    lesseeTerm: 'Apr 2024 - Mar 2025',
    classification: 'Retail',
    remarks: 'For approval'
  },
  {
    status: 'Active',
    lesseeNo: 'LES-005',
    nameOfLessee: 'Gregoria de Jesus',
    location: 'Unit 105-E',
    lesseeTerm: 'May 2024 - Apr 2025',
    classification: 'Food',
    remarks: 'Renewed'
  },
  {
    status: 'Expired',
    lesseeNo: 'LES-006',
    nameOfLessee: 'Emilio Aguinaldo',
    location: 'Unit 106-F',
    lesseeTerm: 'Jun 2023 - May 2024',
    classification: 'Office',
    remarks: 'Moved out'
  }
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
