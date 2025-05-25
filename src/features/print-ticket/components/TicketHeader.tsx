import { formattedDate } from '@/utils/date-time-format';

import pasigLogo from '/pasigLogo.png';
import pasigSealLogo from '/pasigSealLogo.png';

/**
 * TicketHeader component renders the header section of the ticket, including the Pasig logo, the formatted date, and the Pasig City Seal logo.
 *
 * The component is styled responsively, adjusting the size of the logos and text based on screen size using Tailwind's responsive utilities.
 * It uses the `formattedDate` utility to display the current date.
 *
 * @component
 *
 * @returns {JSX.Element} A header with the Pasig logo on the left, the current date in the center, and the Pasig City Seal logo on the right.
 *
 * Styling:
 * - Logos: The Pasig logo and city seal logo are displayed with responsive sizes based on screen size (`small-kiosk`, `medium-kiosk`, `large-kiosk`).
 * - Date: The formatted date is displayed in the center, with font sizes varying across different screen sizes.
 */

function TicketHeader() {
  return (
    <main className='text-gray-500 flex items-center justify-between text-xs'>
      <img
        src={pasigLogo}
        alt='Pasig Logo'
        className='w-8 small-kiosk:w-11 medium-kiosk:w-14 large-kiosk:w-16'
      />
      <p className='text-[0.60rem] text-[#b0b0b0] small-kiosk:text-[0.68rem] medium-kiosk:text-sm large-kiosk:text-lg'>
        {formattedDate}
      </p>
      <img
        src={pasigSealLogo}
        alt='Pasig City Seal Logo'
        className='w-6 small-kiosk:w-7 medium-kiosk:w-10 large-kiosk:w-12'
      />
    </main>
  );
}

export default TicketHeader;
