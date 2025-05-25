import { SVGProps } from 'react';

/**
 * IconBolt renders a bolt icon.
 *
 * @param {SVGProps<SVGSVGElement>} props - SVG props.
 * @returns {JSX.Element} A bolt icon.
 */

function IconBolt({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='/icons/bolt.svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='icon icon-tabler icons-tabler-outline icon-tabler-bolt'
      {...props}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11' />
    </svg>
  );
}

export default IconBolt;
