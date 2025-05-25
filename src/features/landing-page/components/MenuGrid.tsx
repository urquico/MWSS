import MenuCard from './MenuCard';
import { LandingMenuItem } from '../types/landing-types';
import { SimpleGrid } from '@mantine/core';

interface MenuGridProps {
  items: LandingMenuItem[];
}

export default function MenuGrid({ items }: MenuGridProps) {
  return (
   <SimpleGrid
  cols={{ base: 1, md: 2, lg: 3 }}
  spacing={{ base: 16, md: 24, lg: 21 }}
  verticalSpacing={{ base: 16, md: 20, lg: 34 }}
  className='p-10'
>
      {items.map((item, index) => (
        <MenuCard
          key={index}
          iconSrc={item.iconSrc}
          title={item.title}
          onClick={item.onClick}
        />
      ))}
    </SimpleGrid>
  );
}