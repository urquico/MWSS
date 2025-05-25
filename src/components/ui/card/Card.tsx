import {
  Card as MantineCard,
  CardProps as MantineCardProps,
} from '@mantine/core';

interface CardProps extends MantineCardProps {
  onClick?: () => void;
}

function Card({ radius = 'lg', children, onClick, ...props }: CardProps) {
  return (
    <MantineCard {...props} radius={radius}>
      <div onClick={onClick}>{children}</div>
    </MantineCard>
  );
}

export default Card;
