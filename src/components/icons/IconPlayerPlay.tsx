import { SVGProps } from 'react';

interface IconPlayerPlayProps extends SVGProps<SVGSVGElement> {}

/**
 * IconPlayerPlay renders an player-play icon.
 *
 * @param {SVGProps<SVGSVGElement>} props - SVG props.
 * @returns {JSX.Element} An  player-play icon.
 */

function IconPlayerPlay({ ...props }: IconPlayerPlayProps) {
  return (
    <svg
      xmlns='/icons/player-play.svg'
      width='14'
      height='14'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='icon icon-tabler icons-tabler-outline icon-tabler-player-play'
      {...props}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M7 4v16l13 -8z' />
    </svg>
  );
}

export default IconPlayerPlay;
