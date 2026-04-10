import { CssBaseline, ThemeProvider } from '@mui/material';
import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import { NextRouter } from 'next/router';
import { theme } from '@/theme/theme';

// Create a mock router for testing
export function createMockRouter(router: Partial<NextRouter> = {}): NextRouter {
  return {
    basePath: '',
    pathname: '/',
    route: '/',
    query: {},
    asPath: '/',
    push: jest.fn(),
    replace: jest.fn(),
    reload: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    prefetch: jest.fn().mockResolvedValue(undefined),
    beforePopState: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    isFallback: false,
    isLocaleDomain: false,
    isReady: true,
    isPreview: false,
    ...router,
  } as NextRouter;
}

export function renderWithProviders(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'> & { router?: Partial<NextRouter> }
) {
  const { router, ...renderOptions } = options || {};
  const mockRouter = createMockRouter(router);

  return render(
    <RouterContext.Provider value={mockRouter}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {ui}
      </ThemeProvider>
    </RouterContext.Provider>,
    renderOptions,
  );
}
