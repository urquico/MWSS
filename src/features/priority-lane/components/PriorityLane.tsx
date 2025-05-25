import IconBolt from '@/components/icons/IconBolt';
import IconUsers from '@/components/icons/IconUsers';
import Text from '@/components/ui/Text';
import PriorityCard from '@/features/priority-lane/components/PriorityCard';
import { Container } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

function PriorityLane() {
  const navigate = useNavigate();
  return (
    <Container size='90rem' className='flex h-full flex-col gap-10 p-6'>
      <header className='flex w-full items-start justify-center'>
        <Text className='text-center text-4xl font-bold text-primary md:text-7xl small-kiosk:text-4xl'>
          Select Transaction Type
        </Text>
      </header>
      <Container className='flex h-[45rem] w-full flex-col items-center justify-center gap-4 rounded-xl p-8 md:max-w-[60rem] md:gap-16 md:p-16'>
        <Container className='flex h-full w-full flex-col items-center justify-center gap-4 md:flex-row'>
          <PriorityCard
            name='Regular Queue'
            icon={
              <IconUsers className='size-6 medium-kiosk:size-10 large-kiosk:size-12' />
            }
            onClick={() => navigate(`/kiosk/queue?is_prioritized=false`)}
          />
          <PriorityCard
            name='Priority Lane (Senior, PWD, Pregnant)'
            icon={
              <IconBolt className='size-6 medium-kiosk:size-10 large-kiosk:size-12' />
            }
            color='#CA8A04'
            onClick={() => navigate(`/kiosk/queue?is_prioritized=true`)}
          />
        </Container>
      </Container>
    </Container>
  );
}

export default PriorityLane;
