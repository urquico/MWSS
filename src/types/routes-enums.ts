export enum ActiveRoute {
  // Main Modules
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

  // Sub-modules with parameters
  INVOICE_TRACKING = '/finance/income-management/invoice-tracking?page=1',
  BUDGET_PREP = '/finance/budget-management/preparation?fy=2023',
  BILLING_MGMT = '/finance/income-management/billing',
  STATEMENT_OF_ACCOUNT = '/finance/income-management/billing/statement',
  BILLING_STATEMENT = '/finance/income-management/billing/billing-statement',
  DEMAND_TO_PAY = '/finance/income-management/billing/demand',
  JOURNAL_ENTRY_VOUCHER = '/finance/income-management/billing/journal',
  PAYMENT_MONITORING = '/finance/income-management/payments',
  INVOICE_GENERATION_TRACKING = '/finance/income-management/invoices',
  TENANT_INFORMATION_MANAGEMENT = '/finance/income-management/tenants',
  // Add other parameterized routes as needed
}
