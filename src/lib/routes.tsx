import AppShell from '@/components/ui/AppShell';
import ErrorPage from '@/components/ui/error/ErrorPage';
import { LandingPage, Login } from '@/lib/lazy';
import AuthGuard from '@/provider/auth-guard';
import Landing from '@/routes/LandingPage';
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
    element: (
        <Landing />
    ),
    children: [
      //   {
      //     path: 'dashboard',
      //     element: <Dashboard />,
      //   },
      {
        path: '*',
        element: <ErrorPage message='Page not found' status={404} />,
      },
    ],
  },
]);