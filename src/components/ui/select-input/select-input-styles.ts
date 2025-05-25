import { useMediaQuery } from '@mantine/hooks';

const useKioskStyles = () => {
  const smallKiosk = useMediaQuery(
    '(min-width: 720px) and (max-width: 1080px) and (min-height: 1024px) and (max-height: 1366px)',
  );
  const mediumKiosk = useMediaQuery(
    '(min-width: 1080px) and (max-width: 1440px) and (min-height: 1336px) and (max-height: 1920px)',
  );
  const largeKiosk = useMediaQuery(
    '(min-width: 1440px) and (max-width: 1920px) and (min-height: 1920px) and (max-height: 2560px)',
  );

  const padding = smallKiosk
    ? '1rem'
    : mediumKiosk
      ? '2rem'
      : largeKiosk
        ? '2.5rem'
        : '0.5rem';

  const fontSize = smallKiosk
    ? '1rem'
    : mediumKiosk
      ? '1.5rem'
      : largeKiosk
        ? '1.75rem'
        : '0.75rem';

  const height = smallKiosk
    ? '1.5rem'
    : mediumKiosk
      ? '2rem'
      : largeKiosk
        ? '2.5rem'
        : '1rem';

  const optionSize = smallKiosk
    ? '1rem'
    : mediumKiosk
      ? '1.5rem'
      : largeKiosk
        ? '1.75rem'
        : '0.75rem';

  return { padding, fontSize, height, optionSize };
};

export default useKioskStyles;
