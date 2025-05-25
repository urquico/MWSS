import { Grid } from '@mantine/core';
import SectionHeader from './SectionHeader';
import InfoBanner from './InfoBanner';
import MenuGrid from './MenuGrid';
import { landingMenu } from '../types/landing-menu';

export default function LandingPage() {
  return (
    <Grid gutter={0} className="relative w-full h-screen overflow-hidden">
      {/* InfoBanner: only show on large screens and up */}
      <Grid.Col
        span={{ base: 0, lg: 4 }}
        order={{ base: 1, lg: 1 }}
        className="hidden w-full h-screen lg:block"
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
      <div
        className="absolute hidden rounded-full lg:block"
        style={{
          width: '30vw',
          height: '30vw',
          backgroundColor: '#0E368733',
          top: '-11vw',
          left: '-11vw',
          maxWidth: '420px',
          maxHeight: '420px',
        }}
      ></div>
      <div
        className="absolute hidden rounded-full lg:block"
        style={{
          width: '18vw',
          height: '18vw',
          backgroundColor: '#FFFFFF99',
          bottom: '-8vw',
          left: '27vw',
          maxWidth: '253px',
          maxHeight: '253px',
        }}
      ></div>
    </Grid>
  );
}