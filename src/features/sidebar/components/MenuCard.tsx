import { Card, Group, Text } from '@mantine/core';

interface MenuCardProps {
  iconSrc: string;
  title: string;
  onClick?: () => void;
}

/**
 * MenuCard component
 * - Displays an icon and a title inside a styled Mantine Card.
 * - On hover, the card background becomes a gradient, the icon turns white and grows, and the text turns white.
 * - Uses Tailwind's group-hover utilities for smooth transitions.
 *
 * Example usage:
 * <MenuCard
 *   iconSrc="/icons/dashboard.svg"
 *   title="Dashboard"
 *   onClick={() => alert('Dashboard clicked')}
 * />
 */
export default function MenuCard({ iconSrc, title, onClick }: MenuCardProps) {
  return (
    <Card
      shadow="md"
      withBorder
      onClick={onClick}
      className="z-10 transition cursor-pointer select-none group"
      style={{
       
        height: '130px',
        borderRadius: '12px',
        padding: '0px',
        background: '#F5F8FF',
      }}
    >
      <div
        className="p-5
          transition-colors duration-300
          group-hover:bg-[linear-gradient(241.26deg,_#01FFCC_3.84%,_#0041C5_68.37%)]
          group-hover:text-white
        "
        style={{ height: '100%' }}
      >
        <Group gap={10} className="flex flex-col items-start">
          {/* 
            Icon:
            - Default: normal size and color.
            - On hover: grows larger, turns white (using filter/invert), and pushes text down.
          */}
          <img
            src={iconSrc}
            alt={title}
            className="w-8 h-8 duration-300 tra1nsition-all mb- group-hover:w-11 group-hover:h-10 group-hover:mb-1 group-hover:filter group-hover:brightness-0 group-hover:invert"
          />
          {/* 
            Title:
            - Default: dark blue text.
            - On hover: turns white.
          */}
          <Text
            fw={700}
            fz={22}
            lh="1.2"
            className="transition-colors duration-300 text-darkBlue group-hover:text-white"
          >
            {title}
          </Text>
        </Group>
      </div>
    </Card>
  );
}