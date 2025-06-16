import { LandingMenuItem } from '../types/landing-types';
import { ActiveRoute } from '@/types/routes-enums';

export const landingMenu: LandingMenuItem[] = [
  {
    title: 'Dashboard',
    iconSrc: '/icons/dashboard.svg',
    path: ActiveRoute.DASHBOARD,
    onClick: () => console.log('Dashboard clicked'),
  },
  {
    title: 'Income Management',
    iconSrc: '/icons/coins.svg',
    path: ActiveRoute.LEASE_MANAGEMENT_DASHBOARD,
    onClick: () => console.log('Income clicked'),
  },
  {
    title: 'Budget Management',
    iconSrc: '/icons/chart-box.svg',
    path: ActiveRoute.BUDGET_MGMT,
    onClick: () => console.log('Expenses clicked'),
  },
  {
    title: 'Disbursement Management',
    iconSrc: '/icons/wallet.svg',
    path: ActiveRoute.DISBURSEMENT_MGMT,
    onClick: () => console.log('Approvals clicked'),
  },
  {
    title: 'Treasury Management',
    iconSrc: '/icons/payment-method.svg',
    path: ActiveRoute.TREASURY_MGMT,
    onClick: () => console.log('Budgeting clicked'),
  },
  {
    title: 'Loan Management',
    iconSrc: '/icons/hand-coin.svg',
    path: ActiveRoute.LOAN_MGMT,
    onClick: () => console.log('Audit Logs clicked'),
  },
  {
    title: 'Property, Plant, & Equipment Management',
    iconSrc: '/icons/ppe.svg',
    path: ActiveRoute.PPE_MGMT,
    onClick: () => console.log('Dashboard clicked'),
  },
  {
    title: 'Bank Reconciliation',
    iconSrc: '/icons/bank.svg',
    path: ActiveRoute.BANK_RECON,
    onClick: () => console.log('Income clicked'),
  },
  {
    title: 'Financial Report',
    iconSrc: '/icons/report-timeline.svg',
    path: ActiveRoute.FINANCIAL_REPORT,
    onClick: () => console.log('Expenses clicked'),
  },
  {
    title: 'Provident Fund',
    iconSrc: '/icons/shake-hands.svg',
    path: ActiveRoute.PROVIDENT_FUND,
    onClick: () => console.log('Approvals clicked'),
  },
  {
    title: 'Tax Compliance',
    iconSrc: '/icons/book-coins.svg',
    path: ActiveRoute.TAX_COMPLIANCE,
    onClick: () => console.log('Budgeting clicked'),
  },
  {
    title: 'System Administration',
    iconSrc: '/icons/gear.svg',
    path: ActiveRoute.SYSTEM_ADMIN,
    onClick: () => console.log('Audit Logs clicked'),
  },
];