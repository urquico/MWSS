import { Card, SimpleGrid, Text, Title, useMantineTheme } from '@mantine/core';
import { useContext } from 'react';
import { AdminDashboardContext } from '@/features/dashboard/provider/admin-dashboard-provider';

interface DashboardSummaryItem {
  label: string;
  value: string | number;
  color?: string; // Card background color
  textColor?: string; // Text color
  showHalfCircle?: boolean; // Optional visual overlay

}

interface DashboardSummaryProps {
  title?: string;
  items: DashboardSummaryItem[];
  showHeader?: boolean;
  cardHeight?: string | number;
}


function DashboardSummary({
  title = 'Lessee Dashboard Summary',
  items,
  showHeader = true,
  cardHeight = '100%'
}: DashboardSummaryProps) {
  const theme = useMantineTheme();
  const contextData = useContext(AdminDashboardContext);

  return (
    <Card withBorder radius="md" p="xl" style={{ height: '100%' }}>
      {showHeader && (
        <>
          <Text fz={20} fw={600} mb="md" c="#0E3687">
            {title}
          </Text>
          <Text size="sm" color="dimmed" style={{ marginBottom: theme.spacing.lg }}>
            Summary
          </Text>
        </>
      )}


      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 5 }}
        spacing={{ base: 'md', sm: 'lg' }}
        verticalSpacing={{ base: 'sm', sm: 'md' }}
      >
        {items.map((item, index) => (
          <Card
            key={index}
            p="lg"
            radius="md"
            style={{
              backgroundColor: item.color || theme.colors.gray[0],
              color: item.textColor || theme.black,
              height: cardHeight || '100%',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative', // Required for absolute child like the half-circle
            }}
          >
            {/* Half-circle decoration */}
            {item.showHalfCircle && (
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '5rem',
                  height: '5rem',
                  borderBottomLeftRadius: '5rem',
                  backgroundColor: '#FFF5F580',
                  zIndex: 0,
                }}
              />
            )}

            <Title fz="1.5rem" fw={700} order={3}>
              {item.value}
            </Title>

            {/* Push label to bottom */}
            <Text
              fz="1.1rem"
              fw={600}
              mt="auto"
              className="z-10"
            >
              {item.label}
            </Text>
          </Card>

        ))}
      </SimpleGrid>

    </Card>
  );
}

export default DashboardSummary;