import { Title, Text, Group, Box } from "@mantine/core";
import CurrentDate from "@/utils/CurrentDate";

/**
 * SectionHeader component
 * - Displays a welcome message, user name, and current date/time.
 * - Layout: 
 *   - First row: Welcome (left), current time (right)
 *   - Second row: User name (left), current date (right)
 * - Props:
 *   - title: string (e.g. "Welcome")
 *   - userName: string (e.g. "Juan Dela Cruz")
 *   - description?: string (optional, shown below)
 *
 * Example usage:
 * <SectionHeader title="Welcome" userName="Juan Dela Cruz" description="Your dashboard overview" />
 */
interface SectionHeaderProps {
  title?: string;
  userName?: string;
  description?: string;
}

export default function SectionHeader({ title = 'Welcome,', userName = 'Juan Dela Cruz', description }: SectionHeaderProps) {
  const { formattedDate, formattedTime } = CurrentDate();

  return (
    <Box className="w-full px-12 py-12">
      {/* First row: Welcome and Time */}
      <Group justify="space-between" className="-mb-2" >
        <Text fz={48} fw={600} className="text-darkBlue font-roboto-slab">{title}</Text>
        <Text fz={48} fw={600} className="text-darkBlue font-roboto-slab">{formattedTime}</Text>
      </Group>
      {/* Second row: User Name and Date */}
      <Group justify="space-between">
        <div className="flex items-center gap-2">
          <img
            src="/icons/user.svg"
            alt="User"
            className="w-6 h-6 md:w-8 md:h-8"
            style={{ minWidth: '1.5em', minHeight: '1.5em' }}
          />
          <Title fz={24} fw={300} className="uppercase text-gray">{userName}</Title>
        </div>
        <Text fz={24} fw={300} className="uppercase text-gray">{formattedDate}</Text>
      </Group>
      {/* Optional description */}
      {description && (
        <Text size="sm" className="mt-2 text-gray-500">{description}</Text>
      )}
    </Box>
  );
}