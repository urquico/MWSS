import { lazy } from 'react';

// Authentication
export const Login = lazy(() => import('@/routes/Login'));
export const LandingPage = lazy(() => import('@/routes/LandingPage'));

// Main Modules
export const Dashboard = lazy(() => import('@/routes/Dashboard'));
export const IncomeManagement = lazy(() => import('@/routes/IncomeManagement'));

// Income Management Subpages (Billing, Payments, Tenants, etc)

export const DataView = lazy(() => import('@/features/income-management/components/DataView'));
export const TableViewWrapper = lazy(() => import('@/features/income-management/components/TableWrapper'));

