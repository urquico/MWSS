import Maintenance from '@/components/ui/Maintenance';
import { MantineProvider } from '@mantine/core';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';

vi.mock('@/api/mutation/logout', () => ({
  useLogoutMutation: () => ({
    mutateAsync: vi.fn().mockResolvedValueOnce(undefined),
    isPending: false,
  }),
}));

describe('Maintenance', () => {
  it('should render without crashing', () => {
    render(
      <MantineProvider>
        <MemoryRouter>
          <Maintenance />
        </MemoryRouter>
      </MantineProvider>,
    );

    expect(screen.getByText('KIOSK IS UNDER MAINTENANCE')).toBeInTheDocument();
  });

  it('should render with a link', () => {
    render(
      <MantineProvider>
        <MemoryRouter>
          <Maintenance />
        </MemoryRouter>
      </MantineProvider>,
    );

    const link = screen.getByRole('link', { name: 'Return to homepage' });
    expect(link).toBeInTheDocument();
  });

  it('should call mutateAsync when link is clicked', async () => {
    render(
      <MantineProvider>
        <MemoryRouter>
          <Maintenance />
        </MemoryRouter>
      </MantineProvider>,
    );

    const link = screen.getByRole('link', { name: 'Return to homepage' });
    fireEvent.click(link);

    await waitFor(() => {
      expect(
        screen.getByText('KIOSK IS UNDER MAINTENANCE'),
      ).toBeInTheDocument();
    });
  });
});
