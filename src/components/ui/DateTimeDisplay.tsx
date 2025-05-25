import CurrentDate from '@/utils/CurrentDate';
import { Divider } from '@mantine/core';

interface DateTimeDisplayProps {
  borderColor?: string;
  formattedDateColor?: string;
  dayOfWeekColor?: string;
  formattedTimeColor?: string;
}

/**
 * DateTimeDisplay Component
 * A component that displays the current date, day of the week, and time in a stylized format.
 * It allows customization of the text and border colors through props.
 *
 * @typedef {Object} DateTimeDisplayProps
 * @property {string} [borderColor] - Tailwind class for the border color of the divider (default: 'border-[#0e2f65]').
 * @property {string} [formattedDateColor] - Tailwind class for the color of the formatted date (default: 'text-[#0e2f65]').
 * @property {string} [dayOfWeekColor] - Tailwind class for the color of the day of the week (default: 'text-[#7c8594]').
 * @property {string} [formattedTimeColor] - Tailwind class for the color of the formatted time (default: 'text-[#118def]').
 *
 * @param {DateTimeDisplayProps} props - The props for the component.
 * @returns {JSX.Element} A component displaying the formatted date, day of the week, and time.
 */

function DateTimeDisplay({
  borderColor = 'border-primary',
  formattedDateColor = 'text-primary',
  dayOfWeekColor = 'text-lightGray',
  formattedTimeColor = 'text-secondary-light',
}: DateTimeDisplayProps) {
  const { formattedDate, formattedTime, dayOfWeek } = CurrentDate();
  const location = window.location;
  const monitor = location.pathname === '/monitor';
  const handleClick = () => {
    window.location.reload();
  };
  return (
    <main className='monitor:gap-4 flex items-center gap-2 font-nunito-sans md:gap-4 small-kiosk:gap-4 medium-kiosk:gap-4'>
      <section className='monitor:text-4xl flex flex-col items-end text-[0.5rem] font-extrabold md:text-lg small-kiosk:text-sm medium-kiosk:text-2xl'>
        <div className={`font-bold uppercase ${formattedDateColor}`}>
          {formattedDate}
        </div>
        <div
          className={`monitor:text-3xl text-[0.5rem] font-semibold md:text-lg small-kiosk:text-sm medium-kiosk:text-lg ${dayOfWeekColor}`}
        >
          {dayOfWeek}
        </div>
      </section>

      <Divider
        orientation='vertical'
        size={monitor ? 'xs' : 'md'}
        className={`border-${borderColor}`}
      />

      <section
        className={`monitor:text-8xl flex items-center font-extrabold md:text-4xl lg:text-5xl small-kiosk:text-4xl medium-kiosk:text-7xl ${formattedTimeColor}`}
        onClick={handleClick}
      >
        {formattedTime}
      </section>
    </main>
  );
}

export default DateTimeDisplay;
