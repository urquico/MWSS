import Card from '@/components/ui/card/Card';

interface VideoAdsProps {
  src: string;
}

function VideoAds({ src }: VideoAdsProps) {
  return (
    <Card radius='md' className='h-full w-full overflow-hidden p-0'>
      <video
        src={src}
        className='h-full w-full object-cover'
        autoPlay
        muted
        loop
      />
    </Card>
  );
}

export default VideoAds;
