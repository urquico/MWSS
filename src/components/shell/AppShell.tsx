import { useLogoutMutation } from '@/api/mutation/logout';
import NavFooter from '@/components/ui/shell/NavFooter';
import NavHeader from '@/components/ui/shell/NavHeader';
import NavbarLink from '@/components/ui/shell/NavbarLink';
import LastPathTracker from '@/hooks/last-path-tracker';
import { useSidebar } from '@/hooks/sidebar-hooks';
import {
  Divider,
  AppShell as MantineAppShell,
  ScrollArea,
} from '@mantine/core';
import { ReactNode, useEffect } from 'react';

import Submitting from '../Submitting';

interface CollapseDesktopProps {
  children: ReactNode;
}

/**
 *
 * @description
 * The AppShell component is a layout component that wraps the entire
 * application. It contains the main layout structure of the application
 * including the sidebar, navbar, and main content area.
 *
 *
 * @param {ReactNode} children - The children to render inside the AppShell
 *
 * @returns {ReactNode} - The AppShell component
 *
 * @example
 * return (
 *  <AppShell>
 *   <div>Content goes here</div>
 * </AppShell>
 * )
 *
 **/

function AppShell({ children }: CollapseDesktopProps) {
  const { open, setOpen } = useSidebar();

  const { isPending } = useLogoutMutation();

  useEffect(() => {
    const keydownHandler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(!open);
      }
    };
    window.addEventListener('keydown', keydownHandler);
    return () => window.removeEventListener('keydown', keydownHandler);
  }, [open]);

  return (
    <MantineAppShell
      navbar={{
        width: open ? '20rem' : '6rem',
        breakpoint: 'xs',
      }}
    >
      <LastPathTracker />
      <MantineAppShell.Navbar className='top-0 flex items-stretch justify-center gap-6 bg-[#0e2f65] p-6'>
        <MantineAppShell.Section
          className='relative flex items-center'
          onClick={() => setOpen(!open)}
        >
          <NavHeader />
        </MantineAppShell.Section>
        <MantineAppShell.Section grow component={ScrollArea} my='md'>
          <NavbarLink />
        </MantineAppShell.Section>
        <Divider className='py-2' />
        <MantineAppShell.Section
          style={{
            justifyContent: open ? 'flex-start' : 'center',
            width: '100%',
          }}
        >
          <NavFooter />
        </MantineAppShell.Section>
      </MantineAppShell.Navbar>

      <MantineAppShell.Main>
        <main
          className={`lg:full w-full bg-[#f4f6ff] md:h-full xl:h-screen ${open ? '' : ''}`}
        >
          {isPending ? (
            <Submitting title='Logging out please wait...' />
          ) : (
            children
          )}
        </main>
      </MantineAppShell.Main>
    </MantineAppShell>
  );
}

export default AppShell;
