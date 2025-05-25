import { Box, Container, Text } from '@mantine/core';
import Header from '@/components/ui/Header';
import Title from '@/components/ui/Title';
import BackgroundImage from '@/components/ui/BackgroundImage';
export default function InfoBanner() {
  return (
    <BackgroundImage src='/landing-bg.png' className="flex items-center justify-center">

      <Header
        groupClassName='bg-none'
        textSize={24}
        textColor='#D2E1FF'
        textWeight={400}
        logoSize={56}
        headerText={
          ['Metropolitan Waterworks', '& Sewerage System']
        }
        position='top-left'


      />
      {/* Branding & Text */}


      <Title
        className='-mt-48 font-extrabol font-roboto-slab'
        size={60}
        lh={0.8}
        fw={800}
        words={['Financial', 'Management', 'Information', 'System']}
        colors={['#000153', '#00039B', '#0A2EE4', '#DCE2EF']}
        vertical
      />
      <img
        src="/vector.png"
        alt="Vector"
        className="absolute"
        style={{
          width: '20vw',
          height: '18vw',
          top: '29vw',
          left: '6vw',
          maxWidth: '393px',
          maxHeight: '374px',
        }}
      />

    </BackgroundImage>
  );
}
