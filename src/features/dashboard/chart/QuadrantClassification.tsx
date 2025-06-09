import { useDisclosure } from '@mantine/hooks';
import {
  Popover,
  Text,
  Button,
  Card,
  Group,
  Box,
  Stack,
  Grid,
} from '@mantine/core';
import {  IconInfoCircleFilled } from '@tabler/icons-react';

interface QuadrantItem {
  label: string;
  value: number;
  color: string;
}

interface QuadrantClassificationCardProps {
  data: QuadrantItem[];
}

const quadrantDefinitions = [
  {
    title: 'Quadrant 1',
    description: 'has an active lease contract and is updated with lease payments',
  },
  {
    title: 'Quadrant 2',
    description: 'has an active lease contract but is not updated with lease payments',
  },
  {
    title: 'Quadrant 3',
    description: 'has an expired lease contract but is updated with lease payments',
  },
  {
    title: 'Quadrant 4',
    description: 'has an expired lease contract and is not updated with lease payments',
  },
];

export function QuadrantClassificationCard({ data }: QuadrantClassificationCardProps) {
  const [opened, { open, close }] = useDisclosure(false);

  // Manually split data by desired layout
  const leftColumn = [data[0], data[1]];  // Quadrants 1 & 2
  const rightColumn = [data[2], data[3]]; // Quadrants 3 & 4

  const renderQuadrantBox = (item: QuadrantItem) => (
    <Box
      key={item.label}
      style={{
        backgroundColor: '#f1f3f5',
        borderRadius: 10,
        padding: '10px 10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '8px',
      }}
    >
      <Text pl={20}>{item.label}</Text>
      <Box
        style={{
          backgroundColor: item.color,
          color: 'white',
          borderRadius: 8,
          width: 55,
          height: 52,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 700,
        }}
      >
        {item.value}
      </Box>
    </Box>
  );

  return (
    <Card withBorder radius="md" p="md" style={{ position: 'relative', overflow: 'visible' }}>
      <Group justify="space-between" mb="sm">
        <Text fw={600}>Quadrant Classification</Text>

        <Popover
          width={500}
          position="bottom"
          withArrow
          shadow="md"
          opened={opened}
          withinPortal
          transitionProps={{ duration: 150 }}
          middlewares={{ flip: true, shift: true }}
          zIndex={1000}
        >
          <Popover.Target>
            <Button
              variant="subtle"
              p={0}
              h="auto"
              onMouseEnter={open}
              onMouseLeave={close}
              aria-label="Quadrant info"
              style={{ position: 'relative', zIndex: 1 }}
            >
              <IconInfoCircleFilled size={20} color='gray'/>
            </Button>
          </Popover.Target>
          <Popover.Dropdown
            onMouseEnter={open}
            onMouseLeave={close}
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 1000,
              padding: '20px',
              maxHeight: '70vh',
              overflowY: 'auto',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <Text fz="xl" fw={700}>QUADRANT CLASSIFICATION</Text>
            </div>
            {quadrantDefinitions.map((q) => (
              <Text key={q.title} mb="md" size="md">
                <Text span fw={700}>{q.title}</Text> - {q.description}
              </Text>
            ))}
          </Popover.Dropdown>
        </Popover>
      </Group>

      <Grid>
        <Grid.Col span={6}>
          <Stack>
            {leftColumn.map(renderQuadrantBox)}
          </Stack>
        </Grid.Col>
        <Grid.Col span={6}>
          <Stack>
            {rightColumn.map(renderQuadrantBox)}
          </Stack>
        </Grid.Col>
      </Grid>
    </Card>
  );
}
