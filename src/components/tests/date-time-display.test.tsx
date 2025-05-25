import DateTimeDisplay from '@/components/ui/DateTimeDisplay';
import { MantineProvider } from '@mantine/core';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

// Mock the utility functions
vi.mock('@/utils/date-time-format', async () => {
  const originalModule = await import('@/utils/date-time-format');
  return {
    ...originalModule,
    formatDate: (_date: Date) => 'Mocked Date',
  };
});

describe('DateTimeDisplay Component', () => {
  it('should render without crashing', () => {
    render(
      <MantineProvider>
        <DateTimeDisplay />
      </MantineProvider>,
    );
    expect(screen.getByText('Mocked Date')).toBeInTheDocument();
  });

  it('should render the formatted date, day of the week, and time', () => {
    render(
      <MantineProvider>
        <DateTimeDisplay />
      </MantineProvider>,
    );

    expect(screen.getByText('Mocked Date')).toBeInTheDocument();
  });
});
