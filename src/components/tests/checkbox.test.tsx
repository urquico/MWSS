import Checkbox from '@/components/ui/Checkbox';
import { MantineProvider } from '@mantine/core';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Checkbox Component', () => {
  it('should render without crashing', () => {
    render(
      <MantineProvider>
        <Checkbox />
      </MantineProvider>,
    );
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('should render the provided props', () => {
    render(
      <MantineProvider>
        <Checkbox label='Checkbox' />
      </MantineProvider>,
    );
    expect(screen.getByText('Checkbox')).toBeInTheDocument();
  });

  it('should render with default checked', () => {
    render(
      <MantineProvider>
        <Checkbox defaultChecked />
      </MantineProvider>,
    );
    expect(screen.getByRole('checkbox')).toBeChecked();
  });
});
