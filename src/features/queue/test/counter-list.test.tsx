import CounterList from '@/features/queue/components/CounterList';
import { MantineProvider } from '@mantine/core';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

describe('CounterList', () => {
  it('should render without crashing', () => {
    render(
      <MantineProvider>
        <CounterList />
      </MantineProvider>,
    );
    const counters = screen.getAllByText('Counter');
    expect(counters.length).toBeGreaterThan(0);
  });

  it('should render with counter list data', () => {
    render(
      <MantineProvider>
        <CounterList />
      </MantineProvider>,
    );

    const counters = screen.getAllByText('Counter');
    expect(counters.length).toBeGreaterThan(0);
  });
});
