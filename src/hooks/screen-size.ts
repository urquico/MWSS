import { useEffect, useState } from 'react';

type Breakpoints = {
  sm: boolean;
  md: boolean;
  lg: boolean;
  xl: boolean;
  xxl: boolean;
  monitor: boolean;
};

const useScreenSize = (): Breakpoints => {
  const [breakpoints, setBreakpoints] = useState<Breakpoints>({
    sm: false,
    md: false,
    lg: false,
    xl: false,
    xxl: false,
    monitor: false,
  });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        setBreakpoints({
          sm: width >= 640,
          md: width >= 768,
          lg: width >= 1024,
          xl: width >= 1280,
          xxl: width >= 1536,
          monitor: width >= 3840 && height >= 2160, // 4K monitor resolution
        });
      }, 150); // 150ms debounce time
    };

    // Initialize on mount
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return breakpoints;
};

export default useScreenSize;
