import { useEffect, useState } from 'react';

const useKioskScreenSize = () => {
  const [screenSize, setScreenSize] = useState<
    'small-kiosk' | 'medium-kiosk' | 'large-kiosk' | 'unknown'
  >('unknown');

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      if (width >= 720 && width <= 1080 && height >= 1024 && height <= 1366) {
        setScreenSize('small-kiosk');
      } else if (
        width >= 1080 &&
        width <= 1440 &&
        height >= 1336 &&
        height <= 1920
      ) {
        setScreenSize('medium-kiosk');
      } else if (
        width >= 1440 &&
        width <= 1920 &&
        height >= 1920 &&
        height <= 2560
      ) {
        setScreenSize('large-kiosk');
      } else {
        setScreenSize('unknown');
      }
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);

    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  return screenSize;
};

export default useKioskScreenSize;
