import Text from '@/components/ui/Text';
import QueueCard from '@/features/queue/components/QueueCard';
import Section from '@/features/queue/components/Section';
import { sectionData } from '@/features/queue/lib/data/header-data';
import { QueueContext } from '@/features/queue/provider/queue-context-provider';
import { useContext } from 'react';

// import { counterList } from '@/features/queue/lib/fake-data/counter-list';

/**
 * CounterListPaper Component
 * A component that displays a list of queue counters with a header section.
 * It maps over a list of counters and renders a QueueCard for each.
 *
 * @component
 * @returns {JSX.Element} A main section containing a header and a list of queue cards.
 *
 * @example
 * <CounterListPaper />
 *
 * @dependencies
 * - QueueCard: A component for displaying individual queue information.
 * - Section: A component for displaying the header section.
 *
 *
 * @data
 * - sectionData: Data used for rendering the header section.
 */

function CounterList() {
  const data = useContext(QueueContext);

  return (
    <main className='flex h-[calc(100%-1rem)] w-full flex-col gap-2 rounded-lg'>
      {/* Header */}
      <header className='flex w-full items-center justify-center text-center'>
        <Section sectionData={sectionData} />
      </header>

      {/* Counter List */}
      <section className='flex w-full flex-col gap-2 overflow-y-auto'>
        {data?.queue.length !== 0 ? (
          <QueueCard data={data?.queue ?? []} />
        ) : (
          <Text className='md:text-md text-center text-xs text-lightGray'>
            No counters available
          </Text>
        )}

        {data?.queue.length !== 0 && (
          <Text className='md:text-md text-center text-xs text-lightGray'>
            This is the end of the list
          </Text>
        )}
      </section>
    </main>
  );
}

export default CounterList;
