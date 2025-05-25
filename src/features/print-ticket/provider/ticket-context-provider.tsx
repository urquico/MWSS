import { PrintTicketType } from '@/features/print-ticket/types/print-ticket-types';
import { createContext } from 'react';

/**
 * TicketContext
 * A context to provide the fetched ticket data to child components.
 */

export const TicketContext = createContext<PrintTicketType | null>(null);

export const TicketProvider = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: PrintTicketType;
}) => {
  return (
    <TicketContext.Provider value={value}>{children}</TicketContext.Provider>
  );
};
