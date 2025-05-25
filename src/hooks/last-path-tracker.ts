import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function LastPathTracker() {
  const location = useLocation();

  useEffect(() => {
    const fullPath = location.pathname + location.search;

    if (location.pathname !== '/') {
      localStorage.setItem('lastPath', fullPath);
    }
  }, [location.pathname, location.search]);

  return null;
}

export default LastPathTracker;
