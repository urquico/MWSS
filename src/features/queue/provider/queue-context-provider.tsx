import { CounterListType } from '@/features/queue/types/counter-list-type';
import { createContext } from 'react';

interface QueueContextProps {
  queue: CounterListType[];
}

/**
 * Queue Context
 * A context to provide the fetched queue data to child components.
 */

export const QueueContext = createContext<QueueContextProps | null>(null);

export const QueueProvider = ({
  value,
  children,
}: {
  value: QueueContextProps;
  children: React.ReactNode;
}) => {
  return (
    <QueueContext.Provider value={value}>{children}</QueueContext.Provider>
  );
};
