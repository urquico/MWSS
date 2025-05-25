import BackLink from '@/components/ui/BackLink';
import { MantineProvider } from '@mantine/core';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';

vi.mock('react-router-dom', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...(typeof actual === 'object' ? actual : {}),
    useNavigate: () => mockNavigate,
  };
});

const mockNavigate = vi.fn();

describe('BackLink Component', () => {
  it('should render without crashing', () => {
    render(
      <MantineProvider>
        <MemoryRouter>
          <BackLink title='Back' />
        </MemoryRouter>
      </MantineProvider>,
    );
    expect(screen.getByText('Back')).toBeInTheDocument();
  });

  it('should navigate to the previous page on click', async () => {
    const navigate = useNavigate();
    render(
      <MantineProvider>
        <MemoryRouter>
          <BackLink
            title='Back'
            onClick={() => {
              navigate('/queue');
            }}
          />
        </MemoryRouter>
      </MantineProvider>,
    );

    await userEvent.click(screen.getByText('Back'));
    expect(mockNavigate).toHaveBeenCalledWith('/queue');
  });
});
