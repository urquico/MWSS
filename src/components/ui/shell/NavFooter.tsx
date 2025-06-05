import { useSidebarStore } from '@/store/useSidebarStore';
import { useNavigate } from 'react-router-dom';
import { Flex, Text } from '@mantine/core';
import { IconLogout } from '@tabler/icons-react';

/**
 *
 * @description
 * The NavFooter component is a UI component that renders the footer
 * of the sidebar navigation. It displays the logout icon and optional text.
 * Clicking the icon or text navigates the user to the landing page.
 *
 * @returns {ReactNode} - The NavFooter component
 *
 * @example
 * return (
 *   <NavFooter />
 * )
 *
 **/

function NavFooter() {
  const { isOpenSidebar } = useSidebarStore();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/landing');
  };

  return (
    <Flex align="center">
      <IconLogout
        className={isOpenSidebar ? 'text-neutral' : 'ml-1'}
        style={{ cursor: 'pointer' }}
        onClick={handleNavigate}
      />
      {isOpenSidebar && (
        <Text
          fz={16}
          fw={600}
          ml={10}
          onClick={handleNavigate}
          style={{ cursor: 'pointer' }}
          className="text-neutral"
        >
          Back to Homepage
        </Text>
      )}
    </Flex>
  );
}

export default NavFooter;
