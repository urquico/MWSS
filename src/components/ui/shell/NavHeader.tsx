import Text from '@/components/ui/Text';
import { useSidebar } from '@/hooks/sidebar-hooks';
import { Image, List, Tooltip } from '@mantine/core';

import logo from '/pasig-logo-seal.png';

/**
 *
 * @description
 * The NavHeader component is a UI component that renders the header
 * of the sidebar navigation. It displays the application logo and name.
 *
 *
 * @returns {ReactNode} - The NavHeader component
 *
 * @example
 * return (
 *  <NavHeader />
 * )
 *
 **/

// Todo: add test cases
function NavHeader() {
  const { open } = useSidebar();
  return (
    <List
      className={`flex w-full cursor-pointer items-center ${open ? 'justify-start' : 'justify-center'}`}
    >
      <Tooltip label='Toggle Sidebar' position='right'>
        <List.Item
          icon={
            open ? (
              <Image
                src={logo}
                className='size-16'
                alt='Pasig City Seal Logo'
              />
            ) : null
          }
        >
          {open ? (
            <Text className='text-md font-bold text-white lg:whitespace-nowrap'>
              QUEUING MANAGEMENT
            </Text>
          ) : (
            <Image src={logo} alt='Pasig City Seal Logo' />
          )}
        </List.Item>
      </Tooltip>
    </List>
  );
}

export default NavHeader;
