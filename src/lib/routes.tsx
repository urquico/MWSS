import ErrorPage from '@/components/ui/error/ErrorPage';
import Loader from '@/components/ui/Loader';
import Shell from '@/components/ui/shell/AppShell';
import AuthGuard from '@/provider/auth-guard';
import { Login, IncomeManagement, LandingPage, Dashboard } from '@/lib/lazy';
import { createBrowserRouter } from 'react-router-dom';

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
        path: ActiveRoute.INCOME_MANAGEMENT_DASHBOARD,
        element: <Dashboard />,
        
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
