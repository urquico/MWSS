import MenuCard from './MenuCard';
import { LandingMenuItem } from '../types/landing-types';
import { Box, ScrollArea, SimpleGrid } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { IconLogout2 } from '@tabler/icons-react';
import LogoutButton from './LogoutButton';

interface MenuGridProps {
  items: LandingMenuItem[];
}

export default function MenuGrid({ items }: MenuGridProps) {
  const navigate = useNavigate();
  const lastItem = items[items.length - 1];
  const remainingItems = items.slice(0, -1);
  const handleItemClick = (item: LandingMenuItem) => {
    console.log('Attempting to navigate to:', item.path);
    if (item.onClick) item.onClick();
    if (item.path) navigate(item.path);
  };

  return (
    <Box className="h-screen">
      <ScrollArea
        h="100%"
        type="auto"
        offsetScrollbars
        scrollbarSize={8}
        scrollHideDelay={500}
      >
        <SimpleGrid
          cols={{ base: 1, md: 2, lg: 3 }}
          spacing={{ base: 16, md: 24, lg: 21 }}
          verticalSpacing={{ base: 16, md: 20, lg: 34 }}
          className="p-10"
        >
          {remainingItems.map((item, index) => (
            <MenuCard
              key={index}
              iconSrc={item.iconSrc}
              title={item.title}
              onClick={() => handleItemClick(item)}
            />
          ))}

          {/* Last card + logout in one column */}
          <Box className="flex gap-4">
            <Box className="flex-[7]">
              <MenuCard
                iconSrc={lastItem.iconSrc}
                title={lastItem.title}
                onClick={() => handleItemClick(lastItem)}
              />
            </Box>
           <LogoutButton />

          </Box>
        </SimpleGrid>
      </ScrollArea>
    </Box>
  );
}