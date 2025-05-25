import { MantineProvider } from '@mantine/core';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import TextInputLogin from '../ui/TextInputLogin';

describe('TextInputLogin Component', () => {
  it('should render without crashing', () => {
    render(
      <MantineProvider>
        <TextInputLogin placeholder='Enter your email' label='Email' />
      </MantineProvider>,
    );
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
  });

  it('should render without error state when isError is false', () => {
    render(
      <MantineProvider>
        <TextInputLogin placeholder='Enter your email' label='Email' />
      </MantineProvider>,
    );
    const input = screen.getByPlaceholderText('Enter your email');
    expect(input).not.toHaveClass('border-red-500');
  });

  it('should update value when typing', () => {
    const mockOnChange = vi.fn();
    render(
      <MantineProvider>
        <TextInputLogin
          placeholder='Enter your email'
          label='Email'
          onChange={mockOnChange}
        />
      </MantineProvider>,
    );
    const input = screen.getByPlaceholderText('Enter your email');
    fireEvent.change(input, { target: { value: 'test@example.com' } });
    expect(mockOnChange).toHaveBeenCalled();
  });

  it('should render with the correct value', () => {
    render(
      <MantineProvider>
        <TextInputLogin
          defaultValue='test@example.com'
          placeholder='Enter your email'
          label='Email'
        />
      </MantineProvider>,
    );
    const input = screen.getByPlaceholderText('Enter your email');
    expect(input).toHaveValue('test@example.com');
  });
});
