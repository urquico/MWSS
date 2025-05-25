import { useLogoutMutation } from '@/api/mutation/logout';
import IconLogout2 from '@/components/icons/IconLogout2';
import IconUserCircle from '@/components/icons/IconUserCircle';
import Avatar from '@/components/ui/Avatar';
import Menu from '@/components/ui/Menu';
import { useSidebar } from '@/hooks/sidebar-hooks';
import { Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

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
 **/

// Todo: add test cases
function NavFooter() {
  const navigate = useNavigate();
  const firstName = localStorage.getItem('firstName');
  const lastName = localStorage.getItem('lastName');

  const { open } = useSidebar();

  const { mutateAsync: logout } = useLogoutMutation();

  const handleViewProfile = () => {
    navigate('/admin/profile');
  };

  const handleLogout = async () => {
    await logout();
  };

  return (
    <Menu>
      <Menu.Target>
        <div
          className={`relative flex w-full cursor-pointer flex-row items-center md:text-center ${
            !open && 'justify-center'
          }`}
          style={{ width: '100%' }}
        >
          <Avatar />
          {open && (
            <Text className='text-md w-56 truncate px-2 text-center font-semibold text-white'>
              {firstName} {lastName}
            </Text>
          )}
        </div>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>Settings</Menu.Label>
        <Menu.Item leftSection={<IconUserCircle height={14} width={14} />}>
          <Text onClick={handleViewProfile}>View Profile</Text>
        </Menu.Item>
        <Menu.Item leftSection={<IconLogout2 />}>
          <Text onClick={handleLogout}>Logout</Text>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default NavFooter;
