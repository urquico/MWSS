import { TextInput, ActionIcon, Group, Menu } from '@mantine/core';
import { IconSearch, IconBell, IconUserCircle, IconDotsVertical } from '@tabler/icons-react';
import { useState } from 'react';

const iconButtonStyles = {
  root: {
    borderRadius: 5, // square
    transition: 'background 0.2s',
    '&:hover': {
      backgroundColor: '#f1f1f1', // light gray
    },
  },
};

function DesktopHeaderIcons() {
  return (
    <Group gap="md">
      <TextInput
        placeholder="Search"
        radius="md"
        rightSection={<IconSearch size={18} color="#A0A0A0" />}
        styles={{
          input: { minWidth: 260, background: '#fff' },
        }}
      />
      <ActionIcon
        variant="subtle"
        size={36}
        radius={0}
        color="gray"
        aria-label="Notifications"
        styles={iconButtonStyles}
      >
        <IconBell size={30} stroke={1.5} color="#002161" />
      </ActionIcon>
      <ActionIcon
        variant="subtle"
        size={36}
        radius={0}
        color="gray"
        aria-label="Messages"
        styles={iconButtonStyles}
      >
        <img
          src="/icons/message.svg"
          alt="Messages"
          width={22}
          height={24}
          style={{ display: 'block' }}
        />
      </ActionIcon>
      <ActionIcon
        variant="subtle"
        size={36}
        radius={0}
        color="gray"
        aria-label="Account"
        styles={iconButtonStyles}
      >
        <IconUserCircle size={45} fill="#002161" color="#fff" />
      </ActionIcon>
    </Group>
  );
}

function MobileHeaderIcons() {
  const [opened, setOpened] = useState(false);

  return (
    <Menu
      shadow="md"
      width={180}
      opened={opened}
      onChange={setOpened}
      position="bottom-end"
      withinPortal
    >
      <Menu.Target>
        <ActionIcon
          variant="subtle"
          size={30}
          radius={0}
          color="gray"
          aria-label="Menu"
          styles={iconButtonStyles}
        >
          <IconDotsVertical size={22} color="#002161" />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          leftSection={<IconSearch size={18} color="#002161" />}
          onClick={() => setOpened(false)}
        >
          Search
        </Menu.Item>
        <Menu.Item
          leftSection={<IconBell size={18} stroke={1.5} color="#002161" />}
          onClick={() => setOpened(false)}
        >
          Notifications
        </Menu.Item>
        <Menu.Item
          leftSection={
            <img
              src="/icons/message.svg"
              alt="Messages"
              width={18}
              height={18}
              style={{ display: 'block' }}
            />
          }
          onClick={() => setOpened(false)}
        >
          Messages
        </Menu.Item>
        <Menu.Item
          leftSection={<IconUserCircle size={20} fill="#002161" color="#fff" />}
          onClick={() => setOpened(false)}
        >
          Account
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default function HeaderIcons() {
  // Use Tailwind's hidden/flex classes for responsive rendering
  return (
    <>
      <div className="hidden md:flex">
        <DesktopHeaderIcons />
      </div>
      <div className="flex md:hidden">
        <MobileHeaderIcons />
      </div>
    </>
  );
}