import usePermissions from '@/hooks/permission-hooks';
import { useSidebar } from '@/hooks/sidebar-hooks';
import { sidebarLinks } from '@/lib/data/sidebar-links';
import { List, ThemeIcon, Tooltip } from '@mantine/core';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 *
 * @description
 * The NavbarLink component is a UI component that renders a clickable
 * link in the sidebar navigation. It displays an icon and label, and
 * navigates to a specified path when clicked.
 *
 *
 * @param {ReactNode} icon - The icon to display in the link
 * @param {string} label - The label to display in the link
 * @param {string} path - The path to navigate to when the link is clicked
 * @param {() => void} onClick - An optional callback function to execute when the link is clicked
 *
 * @returns {ReactNode} - The NavbarLink component
 *
 * @example
 * return (
 *  <NavbarLink
 *    icon={<Icon />}
 *    label='Dashboard'
 *    path='/dashboard'
 *  />
 * )
 *
 **/

// Todo: add test cases
function NavbarLink() {
  const navigate = useNavigate();
  const location = useLocation();

  // Sidebar
  const { open } = useSidebar();

  // Permissions
  const { hasReadPermission } = usePermissions();

  // Sidebar Links based on user's permissions
  const sidebar = sidebarLinks.filter((link) =>
    hasReadPermission(link.permission),
  );

  // Check if the current path is active
  const isActive = (path: string) => location.pathname.startsWith(path);

  // Handle click on sidebar link
  const handleClick = (path: string) => {
    navigate(path);
  };

  return (
    <List className='cursor-pointer text-white' spacing='md' size='lg' center>
      {sidebar.map((link, index) => (
        <Tooltip
          key={index}
          label={link.label}
          position='right'
          transitionProps={{ duration: 0 }}
        >
          <List.Item
            icon={
              open ? (
                <ThemeIcon
                  variant='transparent'
                  color='white'
                  className='flex items-center'
                >
                  {link.icon}
                </ThemeIcon>
              ) : null
            }
            className={`flex items-center rounded-md p-2 text-base ${
              open ? '' : 'justify-center'
            } ${isActive(link.active) ? 'bg-[#355283]' : 'hover:bg-[#355283]'}`}
            onClick={() => handleClick(link.path)}
          >
            {open ? link.label : link.icon}
          </List.Item>
        </Tooltip>
      ))}
    </List>
  );
}

export default NavbarLink;
