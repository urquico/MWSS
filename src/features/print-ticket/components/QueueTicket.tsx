import QueueNumber from '@/features/print-ticket/components/QueueNumber';
import TicketDetails from '@/features/print-ticket/components/TicketDetails';
// import TicketEdge from '@/features/print-ticket/components/TicketEdge';
import TicketHeader from '@/features/print-ticket/components/TicketHeader';
import { Divider } from '@mantine/core';
import { ForwardedRef } from 'react';

interface QueueTicketProps {
  printRef: ForwardedRef<HTMLDivElement>;
}

/**
 * QueueTicket component displays the details of an individual ticket, including the queue number, ticket reference number,
 * walk-in name, office, transaction number, and associated services.
 *
 * @component
 *
 * @returns {JSX.Element} A styled ticket display with various components such as QueueNumber, TicketDetails, and TicketHeader.
 *
 * Styling:
 * - The container is responsive, adjusting its size and padding based on the screen size (`small-kiosk`, `medium-kiosk`, `large-kiosk`).
 * - TicketEdge is used for decorative edges.
 * - A dashed divider separates the queue number and ticket details.
 */

function QueueTicket({ printRef }: QueueTicketProps) {
  return (
    <main
      className='container flex w-full max-w-96 items-center justify-center bg-background'
      ref={printRef}
    >
      <div
        className='relative h-full w-full rounded-xl border-none bg-white p-8 text-center small-kiosk:w-96 medium-kiosk:w-[34rem] large-kiosk:w-[44rem]'
        // style={{
        //   boxShadow: '0 0.25rem 0rem rgba(0, 0, 0, 0.1)', // Bottom shadow only
        // }}
      >
        <section className='ticket-header mb-4'>
          <TicketHeader />
        </section>
        <section className='queue-number flex h-1/5 flex-col items-center justify-center'>
          <QueueNumber label='Queue No.' />
        </section>
        <section className='relative h-auto'>
          <Divider variant='dashed' size='xl' className='my-10 px-4' />
          {/* <TicketEdge /> */}
        </section>
        <section className='ticket-details text-md mb-4 h-4/5 space-y-3 font-poppins small-kiosk:mb-6 small-kiosk:space-y-3 medium-kiosk:mb-14 medium-kiosk:space-y-5 large-kiosk:mb-20 large-kiosk:space-y-7'>
          <TicketDetails />
        </section>
      </div>
    </main>
  );
}

export default QueueTicket;
