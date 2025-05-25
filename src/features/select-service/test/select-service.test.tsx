import { MantineProvider } from '@mantine/core';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import SelectService from '../components/SelectService';

describe('SelectService', () => {
  it('renders without crashing', () => {
    render(
      <MantineProvider>
        <SelectService />
      </MantineProvider>,
    );
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(
      <MantineProvider>
        <SelectService label='Custom Label' />
      </MantineProvider>,
    );
    expect(screen.getByText('Custom Label')).toBeInTheDocument();
  });
});
