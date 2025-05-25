export const formatDate = (date: Date): string =>
  date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
// Dynamic getter for the current date
export const formattedDate = formatDate(new Date());

export const formatTime = (date: Date): string =>
  date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

export const getDayOfWeek = (date: Date): string =>
  date.toLocaleDateString('en-US', { weekday: 'long' });
