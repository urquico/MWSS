import Text from '@/components/ui/Text';
import { Card } from '@mantine/core';

interface AnnouncementProps {
  title: string;
  announcement: string;
}

function Announcement({ title, announcement }: AnnouncementProps) {
  return (
    <Card
      className='flex h-full w-full flex-col gap-4 bg-primary p-6'
      radius='md'
    >
      <section>
        <Text className='monitor:text-5xl text-base font-bold text-white md:text-lg'>
          {title || 'Announcement'}
        </Text>
      </section>
      <section className='flex-1'>
        <Text className='monitor:text-3xl text-sm font-semibold text-white md:text-base'>
          {announcement || 'No announcement'}
        </Text>
      </section>
    </Card>
  );
}

export default Announcement;
