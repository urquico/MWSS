import { SVGProps } from 'react';

interface IconChevronRightProps extends SVGProps<SVGSVGElement> {}

/**
 * IconChevronDown renders an chevron-down icon.
 *
 * @param {SVGProps<SVGSVGElement>} props - SVG props.
 * @returns {JSX.Element} An chevron-down icon.
 */

function IconChevronRight({ ...props }: IconChevronRightProps) {
  return (
    <svg
      xmlns='/icons/chevron-down.svg'
      width='14'
      height='14'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='icon icon-tabler icons-tabler-outline icon-tabler-chevron-down'
      {...props}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M6 9l6 6l6 -6' />
    </svg>
  );
}

export default IconChevronRight;
