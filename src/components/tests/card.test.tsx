import Card from '@/components/ui/card/Card';
import { MantineProvider } from '@mantine/core';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Card Component', () => {
  it('should render without crashing', () => {
    render(
      <MantineProvider>
        <Card>
          <div>Card Content</div>
        </Card>
      </MantineProvider>,
    );
    expect(screen.getByText('Card Content')).toBeInTheDocument();
  });

  it('should render with custom props', () => {
    render(
      <MantineProvider>
        <Card radius='xl'>
          <div>Card Content</div>
        </Card>
      </MantineProvider>,
    );
    expect(screen.getByText('Card Content')).toBeInTheDocument();
  });

  it('should render with custom class', () => {
    render(
      <MantineProvider>
        <Card className='bg-primary'>
          <div>Card Content</div>
        </Card>
      </MantineProvider>,
    );
    expect(screen.getByText('Card Content')).toBeInTheDocument();
  });
});
