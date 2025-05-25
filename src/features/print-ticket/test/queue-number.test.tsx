import QueueNumber from '@/features/print-ticket/components/QueueNumber';
import { MantineProvider } from '@mantine/core';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('QueueNumber Component', () => {
  it('should render without crashing', () => {
    render(
      <MantineProvider>
        <QueueNumber label='Queue No.' />
      </MantineProvider>,
    );
    expect(screen.getByText('Queue No.')).toBeInTheDocument();
  });

  it('should render the label correctly', () => {
    render(
      <MantineProvider>
        <QueueNumber label='Queue No.' />
      </MantineProvider>,
    );
    expect(screen.getByText('Queue No.')).toBeInTheDocument();
  });
});
