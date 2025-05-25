import IconArrowLeft from '@/components/icons/IconArrowLeft';

import KioskButton from './KioskButton';

interface BackLinkProps {
  title: string;
  color?: string;
  onClick?: () => void;
}

/**
 * BackButtonHeader renders a back button with a title and triggers a callback function when clicked.
 *
 * @param {string} title - The title text displayed next to the back button.
 * @param {string} color - The color of the back button.
 * @returns {JSX.Element} A back button header with a title.
 */

function BackLink({ title, color = 'text-primary', onClick }: BackLinkProps) {
  if (!title) {
    throw new Error('BackLink requires a title');
  }

  // TODO: Add onClick handler
  return (
    <KioskButton
      name={title}
      variant='transparent'
      color='bg-transparent pl-0 small-kiosk:pl-0 medium-kiosk:pl-0 large-kiosk:pl-0'
      LeftIcon={IconArrowLeft}
      textStyle={`${color}  font-bold font-inter medium-kiosk:pb-1`}
      iconStyle={color}
      onClick={onClick}
    />
  );
}

export default BackLink;
