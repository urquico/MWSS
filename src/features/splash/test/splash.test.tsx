import Splash from '@/features/splash/components/Splash';
import { MantineProvider } from '@mantine/core';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

describe('Splash Component', () => {
  it('should render the logo image', () => {
    render(
      <MantineProvider>
        <MemoryRouter>
          <Splash />
        </MemoryRouter>
      </MantineProvider>,
    );

    const logoImage = screen.getByAltText('background');
    expect(logoImage).toBeInTheDocument();
  });

  it('should render the start button', () => {
    render(
      <MantineProvider>
        <MemoryRouter>
          <Splash />
        </MemoryRouter>
      </MantineProvider>,
    );

    const startButton = screen.getByText('Start');
    expect(startButton).toBeInTheDocument();
  });

  
});
