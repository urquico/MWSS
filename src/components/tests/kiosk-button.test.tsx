import IconArrowLeft from '@/components/icons/IconArrowLeft';
import IconPlayerPlay from '@/components/icons/IconPlayerPlay';
import KioskButton from '@/components/ui/KioskButton';
import { MantineProvider } from '@mantine/core';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

describe('KioskButton', () => {
  it('should render without crashing', () => {
    render(
      <MantineProvider>
        <KioskButton />
      </MantineProvider>,
    );
    const button = screen.getByRole('button', { name: 'Button' });
    expect(button).toBeInTheDocument();
  });

  it('should render with custom props', () => {
    render(
      <MantineProvider>
        <KioskButton name='Custom Button' />
      </MantineProvider>,
    );
    const button = screen.getByRole('button', { name: 'Custom Button' });
    expect(button).toBeInTheDocument();
  });

  it('should render with left and right icons', () => {
    render(
      <MantineProvider>
        <KioskButton
          name='Custom Button'
          LeftIcon={IconArrowLeft}
          RightIcon={IconPlayerPlay}
        />
      </MantineProvider>,
    );
    const button = screen.getByRole('button', { name: 'Custom Button' });
    expect(button).toBeInTheDocument();
    const leftIcon = screen.getByTestId('kiosk-button-left-icon');
    const rightIcon = screen.getByTestId('kiosk-button-right-icon');
    expect(leftIcon).toBeInTheDocument();
    expect(rightIcon).toBeInTheDocument();
  });
});
