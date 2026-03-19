import { CssBaseline, ThemeProvider } from '@mui/material';
import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';
import { theme } from '@/theme/theme';

export function renderWithProviders(ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) {
  return render(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {ui}
    </ThemeProvider>,
    options,
  );
}
