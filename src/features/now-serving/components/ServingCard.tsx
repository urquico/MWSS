import Text from '@/components/ui/Text';
import { Card } from '@mantine/core';

interface ServingCardProps {
  counter: string;
  serviceName: string;
  queueNumber: string;
  variant?: 'now_serving' | 'next_serving' | 'recall' | 'empty';
}

const variantStyles = {
  now_serving: {
    card: 'bg-primary',
    animation: '',
    counter: 'text-mustard',
    service: 'text-white',
    text: 'text-white',
    queue: 'text-white',
  },
  recall: {
    card: 'bg-mustard',
    animation: 'animate-pulse',
    counter: 'text-primary',
    service: 'text-black',
    text: 'text-black',
    queue: 'text-primary',
  },
  next_serving: {
    card: 'bg-white',
    animation: 'animate-pulse',
    counter: 'text-primary',
    service: 'text-lightGray',
    text: 'text-zinc-800',
    queue: 'text-primary',
  },
  empty: {
    card: 'bg-white',
    animation: '',
    counter: 'text-primary',
    service: 'text-lightGray',
    text: 'text-zinc-800',
    queue: 'text-primary',
  },
};

function ServingCard({
  counter,
  serviceName,
  queueNumber,
  variant = 'now_serving',
}: ServingCardProps) {
  return (
    <main className='relative flex h-full w-full items-center justify-center'>
      <Card
        className={`absolute h-full w-full ${variantStyles[variant].card} ${variantStyles[variant].animation}`}
      ></Card>
      <Card
        className={`flex h-full w-full flex-col justify-between gap-4 bg-transparent p-6 md:flex-row md:px-16`}
        radius='md'
      >
        <section
          className={`flex flex-col items-center justify-center md:items-start monitor:gap-2 ${variantStyles[variant].text}`}
        >
          <Text
            className={`text-base font-bold md:text-4xl monitor:text-7xl ${variantStyles[variant].counter}`}
          >
            {counter}
          </Text>
          <Text
            className={`text-base font-bold md:text-xl monitor:text-5xl ${variantStyles[variant].service}`}
          >
            {serviceName}
          </Text>
        </section>
        <section className='flex items-center justify-center'>
          {queueNumber ? (
            <Text
              className={`text-3xl font-bold md:text-5xl monitor:text-8xl ${variantStyles[variant].queue}`}
            >
              {queueNumber}
            </Text>
          ) : (
            <Text className='text-sm font-semibold text-lightGray monitor:text-5xl'>
              No queue available
            </Text>
          )}
        </section>
      </Card>
    </main>
  );
}

export default ServingCard;
