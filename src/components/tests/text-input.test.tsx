import TextInput from '@/components/ui/TextInput';
import { MantineProvider } from '@mantine/core';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('TextInput Component', () => {
  it('should render without crashing', () => {
    render(
      <MantineProvider>
        <TextInput />
      </MantineProvider>,
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should render with custom props', () => {
    render(
      <MantineProvider>
        <TextInput placeholder='Custom Placeholder' />
      </MantineProvider>,
    );
    expect(
      screen.getByPlaceholderText('Custom Placeholder'),
    ).toBeInTheDocument();
  });
});
