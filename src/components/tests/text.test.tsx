import Text from '@/components/ui/Text';
import { MantineProvider } from '@mantine/core';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Text Component', () => {
  it('should render without crashing', () => {
    render(
      <MantineProvider>
        <Text>Test Children</Text>
      </MantineProvider>,
    );
    expect(screen.getByText('Test Children')).toBeInTheDocument();
  });

  it('should render with custom props', () => {
    render(
      <MantineProvider>
        <Text>Custom Props</Text>
      </MantineProvider>,
    );
    expect(screen.getByText('Custom Props')).toBeInTheDocument();
  });
});
