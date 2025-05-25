import { LandingMenuItem } from '../types/landing-types';


export const landingMenu: LandingMenuItem[] = [
  {
    title: 'Dashboard',
    iconSrc: '/icons/dashboard.svg',
    onClick: () => console.log('Dashboard clicked'),
  },
  {
    title: 'Income Management',
    iconSrc: '/icons/coins.svg',
    onClick: () => console.log('Income clicked'),
  },
  {
    title: 'Budget Management',
    iconSrc: '/icons/chart-box.svg',
    onClick: () => console.log('Expenses clicked'),
  },
  {
    title: 'Disbursement Management',
    iconSrc: '/icons/wallet.svg',
    onClick: () => console.log('Approvals clicked'),
  },
  {
    title: 'Treasury Management',
    iconSrc: '/icons/payment-method.svg',
    onClick: () => console.log('Budgeting clicked'),
  },
  {
    title: 'Loan Management',
    iconSrc: '/icons/hand-coin.svg',
    onClick: () => console.log('Audit Logs clicked'),
  },
  // 
    {
    title: 'Property, Plant, & Equipment Management',
    iconSrc: '/icons/ppe.svg',
    onClick: () => console.log('Dashboard clicked'),
  },
  {
    title: 'Bank Reconciliation',
    iconSrc: '/icons/bank.svg',
    onClick: () => console.log('Income clicked'),
  },
  {
    title: 'Financial Report',
    iconSrc: '/icons/report-timeline.svg',
    onClick: () => console.log('Expenses clicked'),
  },
  {
    title: 'Provident Fund',
    iconSrc: '/icons/shake-hands.svg',
    onClick: () => console.log('Approvals clicked'),
  },
  {
    title: 'Tax Compliance',
    iconSrc: '/icons/book-coins.svg',
    onClick: () => console.log('Budgeting clicked'),
  },
  {
    title: 'System Administration',
    iconSrc: '/icons/gear.svg',
    onClick: () => console.log('Audit Logs clicked'),
  },
];