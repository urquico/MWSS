import Paper from '@/components/ui/Paper';
import { MantineProvider } from '@mantine/core';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Paper Component', () => {
  it('should render without crashing', () => {
    render(
      <MantineProvider>
        <Paper>Test Children</Paper>
      </MantineProvider>,
    );
    expect(screen.getByText('Test Children')).toBeInTheDocument();
  });

  it('should render with custom props', () => {
    render(
      <MantineProvider>
        <Paper>Custom Props</Paper>
      </MantineProvider>,
    );
    expect(screen.getByText('Custom Props')).toBeInTheDocument();
  });
});
