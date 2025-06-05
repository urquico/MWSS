import { PropsWithChildren, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '@/store/useAuthStore';

const AuthGuard = ({ children }: PropsWithChildren) => {
  const { isLoggedIn, lastPath, setLastPath } = useAuthStore();
  const location = useLocation();

  useEffect(() => {
    // Save the last visited path
    if (location.pathname !== '/') {
      setLastPath(location.pathname);
    }
  }, [location.pathname, setLastPath]);

  if (isLoggedIn) {
    if (location.pathname === '/') {
      return <Navigate to={lastPath} replace />;
    }
  } else {
    if (location.pathname !== '/') {
      return <Navigate to="/" replace />;
    }
  }

  return <>{children}</>;
};

export default AuthGuard;
