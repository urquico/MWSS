import { lazy } from 'react';

// Authentication
export const Login = lazy(() => import('@/routes/Login'));
export const LandingPage = lazy(() => import('@/routes/LandingPage'));

// Main Modules
export const Dashboard = lazy(() => import('@/routes/Dashboard'));
export const IncomeManagement = lazy(() => import('@/routes/IncomeManagement'));
export const RawWaterManagement = lazy(() => import('@/routes/RawWaterManagement'));
export const ConcessionManagement = lazy(() => import('@/routes/ConcessionManagement'));
// Income Management Subpages (Billing, Payments, Tenants, etc)

export const DataView = lazy(() => import('@/features/income-management/pages/lease-management/LeaseManagement'));
export const DataViewConcession = lazy(() => import('@/features/income-management/pages/concession/ConcessionManagement'));
export const TableViewWrapper = lazy(() => import('@/features/income-management/pages/IncomeManagement'));
