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
  // INCOME MGMT (LEASE MANAGEMENT)
  // ===============================
  INCOME_MANAGEMENT_DASHBOARD = '/finance/income-management/dashboard',
  BILLING_MGMT = '/finance/income-management/billing',
  STATEMENT_OF_ACCOUNT = '/finance/income-management/billing/statement',
  BILLING_STATEMENT = '/finance/income-management/billing/billing-statement',
  DEMAND_TO_PAY = '/finance/income-management/billing/demand',
  JOURNAL_ENTRY_VOUCHER = '/finance/income-management/billing/journal',
  PAYMENT_MONITORING = '/finance/income-management/payments',
  PAYMENT_RECONCILIATION = '/finance/income-management/payments/reconciliation',
  PAYMENT_HISTORY = '/finance/income-management/payments/history',
  PAYMENT_REMINDER = '/finance/income-management/payments/reminder',
  INVOICE_GENERATION_TRACKING = '/finance/income-management/invoices',
  TENANT_INFORMATION_MANAGEMENT = '/finance/income-management/tenants',
  INVOICE_TRACKING = '/finance/income-management/invoice-tracking?page=1',

  // ===============================
  // RAW WATER MANAGEMENT
  // ===============================
  RAW_WATER_DASHBOARD = '/finance/raw-water/dashboard',
  RAW_WATER_STATEMENT_OF_ACCOUNT = '/finance/raw-water/billing/statement',
  RAW_WATER_DEMAND_TO_PAY = '/finance/raw-water/billing/demand',
  RAW_WATER_JOURNAL_ENTRY_VOUCHER = '/finance/raw-water/billing/journal',
  RAW_WATER_INVOICE_TRACKING = '/finance/raw-water/invoices',
  RAW_WATER_INVOICE_LIST = '/finance/raw-water/invoices/list',
  RAW_WATER_CUSTOMER_INVOICE_REPORTS = '/finance/raw-water/invoices/reports',
  RAW_WATER_CUSTOMER_INFORMATION_MANAGEMENT = '/finance/raw-water/customers',
  RAW_WATER_CUSTOMER_INFORMATION = '/finance/raw-water/customers/info',
  RAW_WATER_PAYMENT_HISTORY = '/finance/raw-water/customers/payments',
  RAW_WATER_PAYMENT_MONITORING = '/finance/raw-water/payments',
  RAW_WATER_PAYMENT_COMPUTATION = '/finance/raw-water/payment-computation',

  // ===============================
  // CONCESSION
  // ===============================
  CONCESSIONAIRE_FEE = '/finance/concession/fee',
  CONCESSION_JOURNAL_ENTRY_VOUCHER = '/finance/concession/journal',
  
  // ===============================
  // BUDGET MGMT EXAMPLE (W/ PARAMS)
  // ===============================
  BUDGET_PREP = '/finance/budget-management/preparation?fy=2023',
}
