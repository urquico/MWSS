import Header from '@/components/ui/Header';
import { MantineProvider } from '@mantine/core';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

describe('Header Component', () => {
  it('should render without crashing', () => {
    render(
      <MantineProvider>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </MantineProvider>,
    );
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should render with the correct logo', () => {
    render(
      <MantineProvider>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </MantineProvider>,
    );
    expect(screen.getByRole('img')).toHaveAttribute('src', '/header-logo.png');
  });

  it('should render with the correct logo for the home page', () => {
    render(
      <MantineProvider>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </MantineProvider>,
    );
    expect(screen.getByRole('img')).toHaveAttribute('src', '/header-logo.png');
  });
});
