import { useEffect, useRef, useState } from 'react';

const useNavbarSize = (isOpen: boolean) => {
  const [navbarWidth, setNavbarWidth] = useState<number>(0);
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const updateNavbarWidth = () => {
      if (navbarRef.current) {
        const newWidth = navbarRef.current.offsetWidth;
        setNavbarWidth(newWidth);
      }
    };

    // Update width on mount and when isOpen changes
    updateNavbarWidth();

    const handleResize = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(updateNavbarWidth, 100); // Debounce for 100ms
    };

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isOpen]); // Only depend on isOpen

  return { navbarWidth, navbarRef };
};

export default useNavbarSize;
