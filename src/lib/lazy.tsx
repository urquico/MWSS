import { lazy } from 'react';

// Authentication
export const Login = lazy(() => import('@/routes/Login'));
export const LandingPage = lazy(() => import('@/routes/LandingPage'));

// Main Modules
export const Dashboard = lazy(() => import('@/routes/Dashboard'));
export const IncomeManagement = lazy(() => import('@/routes/IncomeManagement'));
// export const BudgetManagement = lazy(() => import('@/routes/BudgetManagement'));
// export const DisbursementManagement = lazy(() => import('@/routes/DisbursementManagement'));
// export const TreasuryManagement = lazy(() => import('@/routes/TreasuryManagement'));
// export const LoanManagement = lazy(() => import('@/routes/LoanManagement'));
// export const PPEManagement = lazy(() => import('@/routes/PPEManagement'));
// export const BankReconciliation = lazy(() => import('@/routes/BankReconciliation'));
// export const FinancialReport = lazy(() => import('@/routes/FinancialReport'));
// export const ProvidentFund = lazy(() => import('@/routes/ProvidentFund'));
// export const TaxCompliance = lazy(() => import('@/routes/TaxCompliance'));
// export const SystemAdministration = lazy(() => import('@/routes/SystemAdministration'));

// Sub-modules
// export const SOACreation = lazy(() => import('@/routes/income-management/SOACreation'));
// export const InvoiceTracking = lazy(() => import('@/routes/income-management/InvoiceTracking'));
// export const TenantManagement = lazy(() => import('@/routes/income-management/TenantManagement'));
// export const PaymentMonitoring = lazy(() => import('@/routes/income-management/PaymentMonitoring'));

// export const BudgetPreparation = lazy(() => import('@/routes/budget-management/BudgetPreparation'));
// export const BudgetMonitoring = lazy(() => import('@/routes/budget-management/BudgetMonitoring'));

// export const PersonnelService = lazy(() => import('@/routes/disbursement-management/PersonnelService'));
// export const FinancialExpenses = lazy(() => import('@/routes/disbursement-management/FinancialExpenses'));
// export const CapitalOutlay = lazy(() => import('@/routes/disbursement-management/CapitalOutlay'));
// export const MOOE = lazy(() => import('@/routes/disbursement-management/MOOE'));

// export const CollectionManagement = lazy(() => import('@/routes/treasury-management/CollectionManagement'));
// export const InvestmentManagement = lazy(() => import('@/routes/treasury-management/InvestmentManagement'));

// export const RetainedAssets = lazy(() => import('@/routes/ppe-management/RetainedAssets'));
// export const ServiceConcessionAssets = lazy(() => import('@/routes/ppe-management/ServiceConcessionAssets'));

// export const TrialBalance = lazy(() => import('@/routes/financial-report/TrialBalance'));
// export const FinancialStatements = lazy(() => import('@/routes/financial-report/FinancialStatements'));

// export const ContributionManagement = lazy(() => import('@/routes/provident-fund/ContributionManagement'));
// export const FundLoanProcessing = lazy(() => import('@/routes/provident-fund/FundLoanProcessing'));

// export const AdminSettings = lazy(() => import('@/routes/system-administration/AdminSettings'));
// export const Customization = lazy(() => import('@/routes/system-administration/Customization'));

