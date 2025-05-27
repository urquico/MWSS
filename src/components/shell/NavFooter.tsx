import { useLogoutMutation } from '@/api/mutation/logout';

import { useSidebar } from '@/hooks/sidebar-hooks';
import { Flex, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { IconLogout } from '@tabler/icons-react';
/**
 *
 * @description
 * The NavFooter component is a UI component that renders the footer
 * of the sidebar navigation. It displays the user's name and avatar.
 * It also contains a dropdown menu with a logout option.
 *
 * @returns {ReactNode} - The NavFooter component
 *
 * @example
 * return (
 * <NavFooter />
 * )
 *
 **/interface NavFooterProps {
  collapsed: boolean;
}

function NavFooter({ collapsed }: NavFooterProps) {
  const navigate = useNavigate();
  const firstName = localStorage.getItem('firstName');
  const lastName = localStorage.getItem('lastName');

  const { mutateAsync: logout } = useLogoutMutation();

  const handleViewProfile = () => {
    navigate('/admin/profile');
  };

  const handleLogout = async () => {
    await logout();
  };

  return (
    <Flex>
      <IconLogout className='text-neutral'></IconLogout>
      <Text fz={16} fw={600} ml={10} onClick={handleLogout} style={{ cursor: 'pointer' }} className='text-neutral'>
Back to Homepage
      </Text>
    </Flex>

  );
}

export default NavFooter;
