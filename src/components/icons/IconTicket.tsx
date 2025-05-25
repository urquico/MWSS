import { SVGProps } from 'react';

interface IconTicketProps extends SVGProps<SVGSVGElement> {}

/**
 * IconTicket renders an ticket icon.
 *
 * @param {SVGProps<SVGSVGElement>} props - SVG props.
 * @returns {JSX.Element} An ticket icon.
 */

function IconTicket({ ...props }: IconTicketProps) {
  return (
    <svg
      xmlns='/icons/ticket.svg'
      width='14'
      height='14'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      className='icon icon-tabler icons-tabler-outline icon-tabler-ticket -scale-x-100'
      {...props}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M15 5l0 2' />
      <path d='M15 11l0 2' />
      <path d='M15 17l0 2' />
      <path d='M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2' />
    </svg>
  );
}

export default IconTicket;
