export enum ActiveRoute {
  // ===============================
  // MAIN MODULES
  // ===============================
  DASHBOARD = '/finance/dashboard',
  INCOME_MGMT = '/finance/income-management',
  BUDGET_MGMT = '/finance/budget-management',
  DISBURSEMENT_MGMT = '/finance/disbursement-management',
  TREASURY_MGMT = '/finance/treasury-management',
  LOAN_MGMT = '/finance/loan-management',
  PPE_MGMT = '/finance/ppe-management',
  BANK_RECON = '/finance/bank-reconciliation',
  FINANCIAL_REPORT = '/finance/financial-report',
  PROVIDENT_FUND = '/finance/provident-fund',
  TAX_COMPLIANCE = '/finance/tax-compliance',
  SYSTEM_ADMIN = '/finance/system-administration',

  // ===============================
  // LEASE MANAGEMENT
  // ===============================
  LEASE_MANAGEMENT = '/finance/lease-management',
  LEASE_MANAGEMENT_DASHBOARD = '/finance/lease-management/dashboard',
  BILLING_MGMT = '/finance/lease-management/billing',
  STATEMENT_OF_ACCOUNT = '/finance/lease-management/billing/statement',
  BILLING_STATEMENT = '/finance/lease-management/billing/billing-statement',
  DEMAND_TO_PAY = '/finance/lease-management/billing/demand',
  JOURNAL_ENTRY_VOUCHER = '/finance/lease-management/billing/journal',
  PAYMENT_MONITORING = '/finance/lease-management/payments',
  PAYMENT_RECONCILIATION = '/finance/lease-management/payments/reconciliation',
  PAYMENT_HISTORY = '/finance/lease-management/payments/history',
  PAYMENT_REMINDER = '/finance/lease-management/payments/reminder',
  INVOICE_GENERATION_TRACKING = '/finance/lease-management/invoice-tracking',
  TENANT_INFORMATION_MANAGEMENT = '/finance/lease-management/lessee-information',

  // ===============================
  // RAW WATER MANAGEMENT
  // ===============================
  RAW_WATER_MGMT = '/finance/raw-water',
  RAW_WATER_DASHBOARD = '/finance/raw-water/dashboard',
  RAW_WATER_BILLING_STATEMENT = '/finance/raw-water/billing/statement',
  RAW_WATER_DEMAND_TO_PAY = '/finance/raw-water/billing/demand',
  RAW_WATER_JOURNAL_ENTRY_VOUCHER = '/finance/raw-water/billing/journal',

  RAW_WATER_INVOICE_GENERATION_TRACKING = '/finance/raw-water/invoices',
  RAW_WATER_INVOICE_LIST = '/finance/raw-water/invoices/list',
  RAW_WATER_CUSTOMER_INVOICE_REPORTS = '/finance/raw-water/invoices/reports',

  RAW_WATER_CUSTOMER_INFORMATION_MANAGEMENT = '/finance/raw-water/customers',
  RAW_WATER_CUSTOMER_INFORMATION = '/finance/raw-water/customers/info',
  RAW_WATER_CUSTOMER_PAYMENT_HISTORY = '/finance/raw-water/customers/history',


  RAW_WATER_PAYMENT_MONITORING = '/finance/raw-water/payments',
  RAW_WATER_PAYMENT_RECONCILIATION = '/finance/raw-water/payments/reconciliation',
  RAW_WATER_PAYMENT_HISTORY = '/finance/raw-water/payments/history',
  RAW_WATER_PAYMENT_REMINDER = '/finance/raw-water/payments/reminder',


  RAW_WATER_PAYMENT_COMPUTATION = '/finance/raw-water/payment-computation',
  RAW_WATER_PAYMENT_COMPUTATION_CPI = '/finance/raw-water/payment-computation/cpi',
  RAW_WATER_PAYMENT_COMPUTATION_ARREARS = '/finance/raw-water/payment-computation/arrears',
  // ===============================
  // CONCESSION
  // ===============================
  CONCESSION_MGMT = '/finance/concession',
  CONCESSIONAIRE_FEE = '/finance/concession/fee',
  CONCESSION_JOURNAL_ENTRY_VOUCHER = '/finance/concession/journal',
  

}

