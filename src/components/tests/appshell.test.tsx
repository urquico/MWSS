// src/components/ui/AppShell.test.tsx
import AppShell from '@/components/ui/AppShell';
import { MantineProvider } from '@mantine/core';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

vi.mock('@/components/ui/Header', () => ({
  default: () => (
    <MantineProvider>
      <div>Mock Header</div>
    </MantineProvider>
  ),
}));

describe('AppShell Component', () => {
  it('should render without crashing', () => {
    render(
      <MantineProvider>
        <AppShell>
          <div>Test Content</div>
        </AppShell>
      </MantineProvider>,
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('should render children correctly', () => {
    render(
      <MantineProvider>
        <AppShell>
          <div>Child Content</div>
        </AppShell>
      </MantineProvider>,
    );
    expect(screen.getByText('Child Content')).toBeInTheDocument();
  });

  it('should render the Header component', () => {
    render(
      <MantineProvider>
        <AppShell>
          <div>Content</div>
        </AppShell>
      </MantineProvider>,
    );
    expect(screen.getByText('Mock Header')).toBeInTheDocument();
  });
});
