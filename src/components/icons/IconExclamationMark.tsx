import { SVGProps } from 'react';

interface IconExclamationMarkProps extends SVGProps<SVGSVGElement> {}

/**
 * IconChevronDown renders an chevron-down icon.
 *
 * @param {SVGProps<SVGSVGElement>} props - SVG props.
 * @returns {JSX.Element} An chevron-down icon.
 */

function IconExclamationMark({ ...props }: IconExclamationMarkProps) {
  return (
    <svg
      xmlns='/icons/exclamation-mark.svg'
      width='14'
      height='14'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='icon icon-tabler icons-tabler-outline icon-tabler-exclamation-mark'
      {...props}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M12 19v.01' />
      <path d='M12 15v-10' />
    </svg>
  );
}

export default IconExclamationMark;
