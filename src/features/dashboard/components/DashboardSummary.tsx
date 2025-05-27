import { Card, SimpleGrid, Text, Title, useMantineTheme } from '@mantine/core';
import { useContext } from 'react';
import { AdminDashboardContext } from '@/features/dashboard/provider/admin-dashboard-provider';

interface DashboardSummaryItem {
  label: string;
  value: string | number;
  color?: string; // Card background color
  textColor?: string; // Text color
}

interface DashboardSummaryProps {
  title?: string;
  items?: DashboardSummaryItem[];
}

function DashboardSummary({ title = 'Lessee Dashboard Summary', items }: DashboardSummaryProps) {
  const theme = useMantineTheme();
  const contextData = useContext(AdminDashboardContext);
  
  // Default items with sample colors
  const defaultItems: DashboardSummaryItem[] = [
    { label: 'Total No. Lessees', value: '25', color: theme.colors.blue[6], textColor: 'white' },
    { label: 'Monthly Rentals per Lessee Type', value: '40', color: theme.colors.green[6], textColor: 'white' },
    { label: 'Monthly Rentals vs. Projected', value: '80', color: theme.colors.orange[6], textColor: 'white' },
    { label: 'Billing Summary (Issued vs. Unissued)', value: '100', color: theme.colors.red[6], textColor: 'white' },
    { label: 'Expiring Contracts', value: '251', color: theme.colors.violet[6], textColor: 'white' },
  ];

  const summaryItems = items || defaultItems;

  return (
    <Card withBorder radius="md" p="xl" style={{ height: '100%' }}>
      <Title order={2} style={{ marginBottom: theme.spacing.md }}>
        {title}
      </Title>
      
      <Text size="sm" color="dimmed" style={{ marginBottom: theme.spacing.lg }}>
        Summary
      </Text>

      <SimpleGrid cols={5} spacing="md">
        {summaryItems.map((item, index) => (
          <Card 
            key={index}
            p="lg"
            radius="md"
            style={{ 
              backgroundColor: item.color || theme.colors.gray[0],
              color: item.textColor || theme.black,
              height: '100%'
            }}
          >
            <Text size="sm" style={{ marginBottom: theme.spacing.xs }}>
              {item.label}
            </Text>
            <Title order={3}>{item.value}</Title>
          </Card>
        ))}
      </SimpleGrid>
    </Card>
  );
}

export default DashboardSummary;