import { Grid } from '@mantine/core';
import SectionHeader from './SectionHeader';
import InfoBanner from './InfoBanner';
import MenuGrid from './MenuGrid';
import { landingMenu } from '../types/landing-menu';
import Circle from '@/components/ui/Circle';

export default function LandingPage() {
  return (
    <Grid gutter={0} className="relative w-full h-screen overflow-hidden">
      {/* InfoBanner: only show on large screens and up */}
   <Grid.Col
  span={4}
  order={{ base: 1, lg: 1 }}
  display={{ base: 'none', lg: 'block' }}
  className="w-full h-screen"
>
  <InfoBanner />
</Grid.Col>
      {/* Main content: always visible */}
      <Grid.Col
        span={{ base: 12, lg: 'auto' }}
        order={{ base: 2, lg: 2 }}
        className="flex flex-col items-center justify-center"
      >
        <SectionHeader
        />
        <MenuGrid items={landingMenu} />
      </Grid.Col>
      {/* Decorative circles: only show on large screens */}
      <Circle
        color="#0E368733"
        width="30vw"
        height="30vw"
        top="-11vw"
        left="-11vw"
        style={{ maxWidth: '420px', maxHeight: '420px' }}
      />
      <Circle
        color="#FFFFFF99"
        width="18vw"
        height="18vw"
        bottom="-8vw"
        left="27vw"
        style={{ maxWidth: '253px', maxHeight: '253px' }}
      />
    </Grid>
  );
}