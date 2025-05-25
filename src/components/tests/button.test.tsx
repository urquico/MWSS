import Button from '@/components/ui/Button';
import { MantineProvider } from '@mantine/core';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import IconTicket from '../icons/IconTicket';

describe('Button Component', () => {
  it('should render without crashing', () => {
    render(
      <MantineProvider>
        <Button>Click me</Button>
      </MantineProvider>,
    );
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('should render children correctly', () => {
    render(
      <MantineProvider>
        <Button>Child Content</Button>
      </MantineProvider>,
    );
    expect(screen.getByText('Child Content')).toBeInTheDocument();
  });

  it('should render with default variant', () => {
    render(
      <MantineProvider>
        <Button>Default Variant</Button>
      </MantineProvider>,
    );
    expect(screen.getByText('Default Variant')).toBeInTheDocument();
  });

  it('should render the provided props', () => {
    render(
      <MantineProvider>
        <Button leftSection={<IconTicket />} />
      </MantineProvider>,
    );
  });
});
