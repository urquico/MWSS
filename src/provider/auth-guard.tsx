// import LoaderPage from '@/components/ui/Loader';
import { PropsWithChildren } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

function AuthGuard({ children }: PropsWithChildren) {
  const isLogged = localStorage.getItem('isLogged');
  const path = localStorage.getItem('lastPath') || '/queue';
  const location = useLocation();

  if (isLogged === 'true') {
    if (location.pathname === '/') {
      // Redirect to the last path if on the login page
      return <Navigate to={path} replace />;
    }
  } else {
    // Redirect to login if not logged in
    if (location.pathname !== '/') {
      return <Navigate to='/' replace />;
    }
  }

  return <>{children}</>;
}

export default AuthGuard;
