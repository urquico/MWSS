import { useSidebarStore } from '@/store/useSidebarStore';
import { Burger } from '@mantine/core';

/**
 * SidebarToggle Component
 * Renders a button (burger icon) to toggle the sidebar open or closed.
 * Uses the sidebar store to manage sidebar state.
 *
 * @returns {JSX.Element} The sidebar toggle button.
 **/

function SidebarToggle() {
  const { isOpenSidebar, toggleSidebar } = useSidebarStore();

  return (
    <Burger
      opened={isOpenSidebar}
      size='sm'
      lineSize={2}
      onClick={toggleSidebar}
      aria-label={isOpenSidebar ? 'Close sidebar' : 'Open sidebar'}
    />
  );
}

export default SidebarToggle;
