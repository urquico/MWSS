import Text from '@/components/ui/Text';
import Card from '@/components/ui/card/Card';

interface CounterCardProps {
  counter: string;
  // service: string;
  size?: string;
}

/**
 *
 * @description
 * CounterCard displays the counter number and service name
 *
 * @param counter - The counter number
 * @param service - The service name
 * @returns A card component that displays the counter number and service name
 *
 * @category Components
 *
 * @example
 * <CounterCard counter='1' service='Passport Renewal' />
 *
 **/

function CounterCard({
  counter,
  size = 'text-lg lg:text-3xl',
}: CounterCardProps) {
  return (
    <Card
      className='monitor:h-52 monitor:max-w-[55rem] flex h-auto w-full max-w-96 flex-col justify-center gap-2 bg-primary text-center font-inter text-white md:h-32 lg:h-36'
      withBorder
    >
      <Text className={`monitor:text-5xl font-bold ${size}`}>{counter}</Text>
      {/* <Text className='text-base font-semibold lg:text-xl'>{service}</Text> */}
    </Card>
  );
}

export default CounterCard;
