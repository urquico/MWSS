import { useLogoutMutation } from '@/api/mutation/logout';
import IconHome from '@/components/icons/IconHome';
import ConfirmationModal from '@/components/ui/ConfirmationModal';
import Header from '@/components/ui/Header';
import useKioskScreenSize from '@/hooks/kiosk-size';
import LastPathTracker from '@/hooks/last-path-tracker';
import useScreenSize from '@/hooks/screen-size';
import { ActionIcon, AppShell as MantineAppShell } from '@mantine/core';
import { PropsWithChildren, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * AppShell component provides a layout structure using Mantine's AppShell component.
 *
 * @param {PropsWithChildren} props - Properties to customize the app shell.
 * @returns {JSX.Element} A styled app shell component with a header and main content area.
 *
 * @throws Will display an error message if no children are provided.
 */
function AppShell({ children }: PropsWithChildren) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const location = window.location;
  const monitor = location.pathname.startsWith('/monitor');
  const homeKiosk = location.pathname === '/kiosk';

  const screenSize = useKioskScreenSize();
  const { monitor: monitorSize } = useScreenSize();

  const height = monitor
    ? {
        base: 75,
        sm: 125,
        ...(monitorSize && { lg: 275 }),
      }
    : {
        base: 75,
        sm: 100,
        ...(screenSize === 'small-kiosk' && { base: 150 }),
        ...(screenSize === 'medium-kiosk' && { md: 225 }),
        ...(screenSize === 'large-kiosk' && { lg: 225 }),
      };

  const { mutateAsync: logout } = useLogoutMutation();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === 'l') {
        logout();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [logout]);

  const monitorStyles = monitor && 'bg-monitor-bg bg-cover bg-center ';

  const handleConfirm = () => {
    navigate('/kiosk');
    setOpen(false);
  };

  if (!children) {
    throw new Error('AppShell is required');
  }

  return (
    <MantineAppShell
      header={{
        height,
      }}
      className='relative flex aspect-3/4 h-screen w-full flex-col'
    >
      <LastPathTracker />
      <MantineAppShell.Header
        withBorder={false}
        className='flex-none py-4 small-kiosk:py-8 medium-kiosk:py-8 large-kiosk:py-8'
      >
        <Header />
      </MantineAppShell.Header>
      <MantineAppShell.Main
        className={`flex-1 overflow-y-auto bg-background ${monitorStyles}`}
      >
        {children}
        {/* Home Button for Kiosk */}
        {!monitor && !homeKiosk && (
          <ConfirmationModal
            trigger={
              <ActionIcon
                size='xl'
                className='absolute bottom-4 right-4'
                onClick={() => setOpen(true)}
              >
                <IconHome />
              </ActionIcon>
            }
            title='Go to Home'
            open={open}
            setOpen={() => setOpen(false)}
            message='Are you sure you want to go to home screen? This will navigate you to start page and cancel all your progress.'
            onConfirm={handleConfirm}
          />
        )}
      </MantineAppShell.Main>
    </MantineAppShell>
  );
}

export default AppShell;
