import TicketData from '@/features/print-ticket/components/TicketData';
import { Space } from '@mantine/core';

/**
 * TicketDetails component displays the details of a ticket.
 *
 * This component uses the TicketData component to display a user's ticket details in a structured format.
 * It includes fallback text "N/A" if any of the properties are undefined.
 *
 * @component
 * @function TicketDetails
 * @returns {JSX.Element} A component displaying the ticket data.
 *
 * Dependencies:
 * - TicketData component for rendering ticket details.
 * - Mantine's `Space` component for spacing between sections.
 *
 */

function TicketDetails() {
  return (
    <main>
      <TicketData />
      <Space h='md' />
    </main>
  );
}

export default TicketDetails;
