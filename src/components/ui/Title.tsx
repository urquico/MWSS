// components/ui/Title.tsx
import { Title as MantineTitle, TitleProps } from '@mantine/core';


interface TitlePropsExtended extends TitleProps {
  words?: string[];
  colors?: string[];
  vertical?: boolean; // optional prop to toggle vertical stacking
}

/**
 * Title component with multi-colored words.
 *
 * @param {string[]} [words] - The words to display in the title.
 * @param {string[]} [colors] - The Tailwind classes (e.g., 'text-red-500') for each word.
 * @param {boolean} [vertical] - Whether to display words stacked vertically (each on its own line).
 * @param {TitleProps} props - Mantine Title props.
 *
 * @returns {JSX.Element} A styled Title with colored words.
 *
 * @example
 * <Title
 *   words={['Financial', 'Management', 'Information', 'System']}
 *   colors={['text-blue-600', 'text-green-600', 'text-purple-600', 'text-red-600']}
 *   vertical
 * />
 */
function Title({
  words = [],
  colors = [],
  vertical = false,
  order = 1,
  className = '',
  ...props
}: TitlePropsExtended) {
  return (
    <MantineTitle order={order} {...props} className={`${className}`}>
      {words.length > 0
        ? words.map((word, index) => (
            <span
              key={index}
              style={{ color: colors[index] ?? undefined }} 
              className={`uppercase ${vertical ? 'mb-1 block' : 'mr-1 inline-block'}`}
            >
              {word}
            </span>
          ))
        : props.children}
    </MantineTitle>
  );
}

export default Title;