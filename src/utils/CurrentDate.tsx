import { useEffect, useState } from 'react';

import { formatDate, formatTime, getDayOfWeek } from './date-time-format';

/**
 * CurrentDate Hook
 * A React hook that dynamically updates and provides the current date, time, and day of the week.
 * It ensures updates occur precisely at the start of each minute (:00 seconds).
 *
 * @typedef {Object} CurrentDateReturn
 * @property {string} formattedDate - The formatted date in "Month Day, Year" format (e.g., "November 20, 2024").
 * @property {string} formattedTime - The formatted time in 24-hour format with seconds (e.g., "15:45").
 * @property {string} dayOfWeek - The full name of the day (e.g., "Wednesday").
 *
 * @function CurrentDate
 * @returns {CurrentDateReturn} An object containing the current formatted date, time, and day of the week.
 */

function CurrentDate() {
   const [currentDate, setCurrentDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState('');
  const [formattedTime, setFormattedTime] = useState('');
  const [dayOfWeek, setDayOfWeek] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setCurrentDate(now);
      setFormattedDate(formatDate(now));
      setFormattedTime(formatTime(now));
      setDayOfWeek(getDayOfWeek(now));
    };

    const scheduleNextUpdate = () => {
      const now = new Date();
      const seconds = now.getSeconds();
      const milliseconds = now.getMilliseconds();

      // Calculate the delay until the next `:00`
      const delay = (60 - seconds) * 1000 - milliseconds;

      setTimeout(() => {
        updateDateTime();
        scheduleNextUpdate(); // Schedule the next update dynamically
      }, delay);
    };

    updateDateTime(); // Initial call to set the state immediately
    scheduleNextUpdate(); // Start the dynamic scheduling

    return () => {
      // No interval or timeout to clear here as `setTimeout` handles cleanup automatically
    };
  }, []);

  return { currentDate, formattedDate, formattedTime, dayOfWeek };
}

export default CurrentDate;
