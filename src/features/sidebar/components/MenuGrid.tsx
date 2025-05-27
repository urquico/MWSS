import MenuCard from './MenuCard';
import { LandingMenuItem } from '../types/landing-types';
import { SimpleGrid } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

interface MenuGridProps {
  items: LandingMenuItem[];
}

export default function MenuGrid({ items }: MenuGridProps) {
    const navigate = useNavigate();
  
  const handleItemClick = (item: LandingMenuItem) => {
    console.log('Attempting to navigate to:', item.path);
    if (item.onClick) item.onClick();
    if (item.path) navigate(item.path);
  };

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
          onClick={() => handleItemClick(item)}
        />
      ))}
    </SimpleGrid>
  );
}