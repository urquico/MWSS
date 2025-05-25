import Paper from '@/components/ui/Paper';
import Text from '@/components/ui/Text';
import Digit from '@/features/queue/components/Digit';

import { CounterListType } from '../types/counter-list-type';

interface Queue {
  data: CounterListType[];
}

/**
 * QueueCard Component
 * A component that displays a queue card with information about the current and queued numbers.
 * It includes a counter name, the current serving number, and a digit component.
 *
 * @component
 * @returns {JSX.Element} A styled paper component displaying queue information.
 *
 * @example
 * <QueueCard />
 *
 * @dependencies
 * - Paper: A UI component for the card layout.
 * - Text: A UI component for displaying text.
 * - Digit: A component for displaying the queue digits.
 * - QueueContext: Context providing queue data.
 */

function QueueCard({ data }: Queue) {
  // const data = useContext(QueueContext);
  return (
    <>
      {data?.map((list, index) => {
        return (
          <Paper
            key={index}
            className='flex h-24 w-full items-center rounded-xl border border-gray-300 text-center font-bold'
          >
            <Paper className='flex h-full w-1/6 flex-col items-center justify-center rounded-l-xl rounded-r-none bg-[#9d1111] p-8 text-white'>
              <Text className='text-wrap text-xs font-bold md:text-lg small-kiosk:text-xl medium-kiosk:text-2xl large-kiosk:text-2xl'>
                {list.counter_name || 'Counter'}
              </Text>
            </Paper>

            <div className='flex w-4/6 items-center justify-center'>
              <Text className='text-lg font-bold text-primary md:text-xl small-kiosk:text-2xl medium-kiosk:text-3xl large-kiosk:text-3xl'>
                {list.now_serving || (
                  <span className='text-[#d4d4d4]'>00000</span>
                )}
              </Text>
            </div>

            <Digit value={list.people_in_queue} />
          </Paper>
        );
      })}
    </>
  );
}

export default QueueCard;
