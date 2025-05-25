import { useEffect } from 'react';

const DisableZoomComponent: React.FC = () => {
  useEffect(() => {
    const preventZoom = (event: TouchEvent | WheelEvent) => {
      if (
        (event as TouchEvent).touches?.length > 1 ||
        (event as WheelEvent).ctrlKey
      ) {
        event.preventDefault();
      }
    };

    document.addEventListener('touchmove', preventZoom, { passive: false });
    document.addEventListener('wheel', preventZoom, { passive: false });

    return () => {
      document.removeEventListener('touchmove', preventZoom);
      document.removeEventListener('wheel', preventZoom);
    };
  }, []);

  return null;
};

export default DisableZoomComponent;
