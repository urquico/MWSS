import { Rating as MantineRating } from '@mantine/core';

interface RatingProps {
  value: number;
  fraction: number;
}

function Rating({ value, fraction }: RatingProps) {
  return <MantineRating value={value} fractions={fraction} readOnly />;
}

export default Rating;
