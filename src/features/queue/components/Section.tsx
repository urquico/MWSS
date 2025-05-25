import Text from '@/components/ui/Text';

type SectionData = { text: string; width: string };

interface SectionProps {
  sectionData: SectionData[];
  color?: string;
}

/**
 * Section Component
 * A component that displays a list of sections with customizable text and width.
 * Each section is styled with a specified color and displays text content.
 *
 * @component
 * @param {SectionProps} props - The props for the Section component.
 * @param {SectionData[]} props.sectionData - An array of section data containing text and width.
 * @param {string} [props.color='text-primary'] - An optional color class for the text.
 * @returns {JSX.Element} A fragment containing styled sections.
 *
 * @example
 * <Section sectionData={[{ text: 'Header', width: 'w-1/2' }]} color="text-secondary" />
 *
 * @dependencies
 * - Text: A UI component for displaying text within each section.
 */

function Section({ sectionData, color = 'text-primary' }: SectionProps) {
  return (
    <>
      {sectionData.map((section, index) => (
        <section
          key={index}
          className={`flex ${section.width} items-center justify-center`}
        >
          <Text
            className={`${color} text-sm font-bold md:text-xl small-kiosk:text-2xl medium-kiosk:text-2xl large-kiosk:text-3xl`}
          >
            {section.text}
          </Text>
        </section>
      ))}
    </>
  );
}

export default Section;
