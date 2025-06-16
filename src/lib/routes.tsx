import ErrorPage from '@/components/ui/error/ErrorPage';
import Loader from '@/components/ui/Loader';
import Shell from '@/components/ui/shell/AppShell';
import AuthGuard from '@/provider/auth-guard';
import { Login, IncomeManagement, RawWaterManagement, ConcessionManagement, LandingPage, Dashboard } from '@/lib/lazy';
import { createBrowserRouter } from 'react-router-dom';
import { ActiveRoute } from '@/types/routes-enums';

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
    element: <LandingPage />
  },
  {
    id: 'root',
    path: '/finance',
    errorElement: <ErrorPage />,
    element: (
      <Shell />
    ),
    children: [
      {
        index: true,
        path: ActiveRoute.LEASE_MANAGEMENT_DASHBOARD,
        element: <Dashboard />,
      },
      {
        path: ActiveRoute.LEASE_MANAGEMENT + '/*',
        element: <IncomeManagement />
      },
      {
        path: ActiveRoute.RAW_WATER_MGMT + '/*',
        element: <RawWaterManagement />
      },
      {
        path: ActiveRoute.CONCESSION_MGMT + '/*',
        element: <ConcessionManagement />
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