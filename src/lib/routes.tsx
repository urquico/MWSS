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
    element: <Shell />,
    children: [
  
      {
        path: 'income-management',
        children: [
          {
            index: true,
            path: 'dashboard',
            element: <Dashboard />,
          },
          {
            path: 'billing',
            children: [
              {
                path: 'statement',
                element: <IncomeManagement />,
              },
              {
                path: 'billing-statement',
                element: <IncomeManagement />,
              },
              {
                path: 'demand',
                element: <IncomeManagement />,
              },
              {
                path: 'journal',
                element: <IncomeManagement />,
              },
            ],
          },
          {
            path: 'payments',
            children: [
              {
                path: 'reconciliation',
                element: <IncomeManagement />,
              },
              {
                path: 'history',
                element: <IncomeManagement />,
              },
              {
                path: 'reminder',
                element: <IncomeManagement />,
              },
            ],
          },
          {
            path: 'invoice-tracking',
            element: <IncomeManagement />,
          },
          {
            path: 'lessee-information',
            element: <IncomeManagement />,
          },
          {
            path: 'concession',
            element: <IncomeManagement />,
          },
           {
            path: 'journal',
            element: <IncomeManagement />,
          },
        ],
      },
    ],
  },
], {
  hydrationData: {
    loaderData: {
      root: <Loader />,
    },
  },
});