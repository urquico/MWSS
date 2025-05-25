import IconDots from '@/components/icons/IconDots';
import IconInfoCircle from '@/components/icons/IconInfoSmall';
import { ReactNode } from 'react';

interface ChartHeaderProps {
  title: string;
  leftSection: ReactNode;
  iconBgColor?: string;
  withIconBgColor?: Boolean;
  rightSection?: ReactNode;
  hide?: boolean;
}

/**
 * @description This component renders a reusable header for charts, including a title, a customizable left section (e.g., an icon), and optional right-side controls like a toggle or filter.
 * @param {ChartHeaderProps} props - Props for the `ChartHeader` component.
 * @param {string} props.title - Title of the chart, displayed prominently in the header.
 * @param {ReactNode} props.leftSection - A customizable left section, typically used to display an icon or additional content.
 * @param {string} props.iconBgColor - Background color class for the left-section icon container.
 * @param {boolean} [props.displayRightSection=false] - If true, only a dots icon will be displayed on the right section.
 * @returns {JSX.Element} - A styled header section for charts with a title, left content, and additional controls.
 */
function ChartHeader({
  title,
  leftSection,
  iconBgColor,
  rightSection,
  hide = false,
}: ChartHeaderProps) {
  return (
    <main className='flex w-full flex-row justify-between py-2'>
      {/* Left Section */}
      <section className='flex flex-row items-center space-x-2'>
        {/* Icon Background */}
        <div
          className={`flex h-9 w-9 items-center justify-center rounded-full ${iconBgColor}`}
        >
          {leftSection}
        </div>
        {/* Title */}
        <p className='text-lg font-bold'>{title}</p>
        {/* Info Icon */}
        <IconInfoCircle
          className='h-4 w-4 rounded-full bg-[#afafaf]'
          stroke='white'
        />
      </section>

      {/* Right Section */}
      <section className='flex flex-row items-center space-x-2'>
        {hide ? (
          rightSection && <div>{rightSection}</div>
        ) : (
          <>
            <p className='rounded-lg border border-[#e0e0e0] px-4 py-2 text-center text-sm font-semibold text-[#888888]'>
              Monthly
            </p>
            <div className='flex h-9 w-9 items-center justify-center rounded-lg border border-[#e0e0e0]'>
              <IconDots color='#888888' />
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export default ChartHeader;
