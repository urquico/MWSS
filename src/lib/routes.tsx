import ErrorPage from '@/components/ui/error/ErrorPage';
import Loader from '@/components/ui/Loader';
import { Login, IncomeManagement, LandingPage, Dashboard } from '@/lib/lazy';
import AuthGuard from '@/provider/auth-guard';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import SessionProvider from '@/provider/session-provider';
import { ActiveRoute } from '@/types/routes-enums';
import Shell from '@/components/ui/shell/AppShell';

export const router = createBrowserRouter([
  {
    id: 'login',
    path: '/',
    errorElement: <ErrorPage />,
    element: (
      <AuthGuard>
        <Login />
      </AuthGuard>
    ),
  },
  {
    id: 'landing',
    path: '/landing',
    element: (
      <Suspense fallback={<Loader />}>
        <LandingPage />
      </Suspense>
    )
  },
  {
    id: 'root',
    path: '/finance',
    errorElement: <ErrorPage />,
    element: (
      <Suspense fallback={<Loader />}>
        <Shell />
      </Suspense>
    ),
    children: [
      {
        index: true,
        path: ActiveRoute.INCOME_MANAGEMENT_DASHBOARD,
        element: <Dashboard />
      },
       {
        path: ActiveRoute.INCOME_MGMT + '/*',
        element: <IncomeManagement />
      },
    ]
  }
],
  {

    hydrationData: {
      loaderData: {
        root: <Loader />,
      },
    },
  },
);