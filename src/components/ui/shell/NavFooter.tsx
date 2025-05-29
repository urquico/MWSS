import { useLogoutMutation } from '@/api/mutation/logout';
import { Flex, Text } from '@mantine/core';
import { IconLogout } from '@tabler/icons-react';
import { useSidebarStore } from '@/store/sidebar-store';
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

function NavFooter() {
  const { isOpenSidebar } = useSidebarStore();
  const { mutateAsync: logout } = useLogoutMutation();

  const handleLogout = async () => {
    await logout();
  };

return (
  <Flex align="center">
    <IconLogout
      className={isOpenSidebar ? "text-neutral" : "ml-1"}
      style={{ cursor: 'pointer' }}
      onClick={handleLogout}
    />
    {isOpenSidebar && (
      <Text
        fz={16}
        fw={600}
        ml={10}
        onClick={handleLogout}
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
