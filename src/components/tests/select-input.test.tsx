import SelectInput from '@/components/ui/select-input/SelectInput';
import { MantineProvider } from '@mantine/core';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

// Mock ResizeObserver
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.ResizeObserver = ResizeObserver;

describe('SelectInput Component', () => {
  it('should render without crashing', () => {
    render(
      <MantineProvider>
        <SelectInput data={['react', 'angular']} />
      </MantineProvider>,
    );
    expect(screen.getByRole('textbox', { name: '' })).toBeInTheDocument();
  });

  it('should render with custom props', () => {
    render(
      <MantineProvider>
        <SelectInput
          data={['react', 'angular']}
          placeholder='Custom Placeholder'
        />
      </MantineProvider>,
    );
    expect(
      screen.getByPlaceholderText('Custom Placeholder'),
    ).toBeInTheDocument();
  });
});
