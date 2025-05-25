import LoaderPage from '@/components/ui/Loader';
import { MantineProvider } from '@mantine/core';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('LoaderPage Component', () => {
  it('should render without crashing', () => {
    render(
      <MantineProvider>
        <LoaderPage />
      </MantineProvider>,
    );
    const loaderElement = document.querySelector('.mantine-Loader-root');
    expect(loaderElement).toBeInTheDocument();
  });
});
