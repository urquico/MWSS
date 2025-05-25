import { TicketContext } from '@/features/print-ticket/provider/ticket-context-provider';
import { useContext } from 'react';

interface QueueNumberProps {
  label: string;
}

/**
 * QueueNumber component displays a queue number with a corresponding label.
 *
 * This component is used to prominently display a queue number, with a fallback "N/A" message if no number is provided.
 * It also displays a descriptive label below the number for context.
 *
 * @component
 *
 * @param {string | undefined} number - The queue number to be displayed. If undefined, "N/A" will be shown.
 * @param {string} label - A descriptive label for the queue number.
 *
 * @returns {JSX.Element} A styled component displaying the queue number and its label.
 *
 * Dependencies:
 * - Tailwind CSS: Utilized for styling and responsive font sizes.
 *
 * Styling:
 * - Font: Uses the "font-poppins" class for consistent typography.
 * - Colors: Adapts styles for "primary" and "lightGray" themes.
 * - Responsive Design: Adjusts font sizes for different kiosk sizes using Tailwind classes.
 */

function QueueNumber({ label }: QueueNumberProps) {
  const ticket = useContext(TicketContext);
  return (
    <main className='font-poppins font-bold text-primary'>
      <p className='text-3xl small-kiosk:text-3xl medium-kiosk:text-5xl large-kiosk:text-5xl'>
        {ticket?.data.queue_number ? (
          <span>{ticket.data.queue_number}</span>
        ) : (
          <span className='text-lightGray'>N/A</span>
        )}
      </p>
      <div className='text-md text-black small-kiosk:text-xl medium-kiosk:text-2xl large-kiosk:text-3xl'>
        {label}
      </div>
    </main>
  );
}

export default QueueNumber;
