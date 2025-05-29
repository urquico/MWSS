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
  items: DashboardSummaryItem[]; // Made required by removing default
}

function DashboardSummary({ 
  title = 'Lessee Dashboard Summary', 
  items 
}: DashboardSummaryProps) {
  const theme = useMantineTheme();
  const contextData = useContext(AdminDashboardContext);

  return (
    <Card withBorder radius="md" p="xl" style={{ height: '100%' }}>
      <Text fz={20} fw={600} mb="md" c='#0E3687'>
        {title}
      </Text>
      
      <Text size="sm" color="dimmed" style={{ marginBottom: theme.spacing.lg }}>
        Summary
      </Text>

      <SimpleGrid cols={5} spacing="md" >
        {items.map((item, index) => (
          <Card 
            key={index}
            p="lg"
            radius="md"
            style={{ 
              backgroundColor: item.color || theme.colors.gray[0],
              color: item.textColor || theme.black,
              height: '100%',
              
            }}
          >
            <Text fz={16} fw={600} style={{ marginBottom: theme.spacing.xs }}>
              {item.label}
            </Text>
            <Title fz={25} fw={700} order={3}>{item.value}</Title>
          </Card>
        ))}
      </SimpleGrid>
    </Card>
  );
}

export default DashboardSummary;