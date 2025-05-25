import { TicketContext } from '@/features/print-ticket/provider/ticket-context-provider';
import { useContext } from 'react';

/**
 * TicketData component displays the details of a ticket.
 *
 * This component is used to display a user's ticket details in a structured format.
 * It includes fallback text "N/A" if any of the properties are undefined.
 *
 * @component
 *
 * @returns {JSX.Element} A styled component displaying the ticket details including reference number, name, office, transaction number, and services.
 *
 * Dependencies:
 * - TicketContext for accessing ticket data.
 * - Tailwind CSS: Utilized for styling and responsive font sizes.
 *
 * Styling:
 * - Font: Uses "font-medium" for text, and adjusts the font size based on the kiosk size.
 * - Colors: Adapts styles for "primary" and "lightGray" themes.
 * - Responsive Design: Adjusts font sizes for different kiosk sizes using Tailwind classes.
 */

interface SectionDetailsProps {
  label: string | null;
  value: string | React.ReactNode | React.ReactNode[] | null;
}

function TicketData() {
  const ticket = useContext(TicketContext);

  const SectionData: SectionDetailsProps[] = [
    {
      label: 'Ticket Reference No.',
      value: ticket?.data.ticket_number ?? (
        <span className='text-lightGray'>N/A</span>
      ),
    },
    {
      label: 'Name',
      value: ticket?.data.walk_in_name,
    },
    {
      label: 'Office',
      value: ticket?.data.office.office_name,
    },
    {
      label: 'Transaction',
      value: ticket?.data.transaction_count ?? (
        <span className='text-lightGray'>N/A</span>
      ),
    },
    {
      label: 'Services',
      value: ticket?.data.queue_services.map((item) => (
        <span key={item.id} className=''>
          {item.service.service_code}
        </span>
      )),
    },
  ];

  return (
    <>
      {SectionData.map((item, index) => (
        <section key={index}>
          <p className='font-medium text-black medium-kiosk:text-2xl large-kiosk:text-3xl'>
            {item.value}
          </p>
          <p className='font-bold medium-kiosk:text-2xl large-kiosk:text-3xl'>
            {item.label}
          </p>
        </section>
      ))}
    </>
  );
}

export default TicketData;
