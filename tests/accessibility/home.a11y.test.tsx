import { axe, toHaveNoViolations } from 'jest-axe';
import HomePage from '@/pages/index';
import TrainingPage from '@/pages/training';
import { renderWithProviders } from '@tests/test-utils';

expect.extend(toHaveNoViolations);

describe('accessibility smoke tests', () => {
  it('home page has no obvious accessibility violations', async () => {
    const { container } = renderWithProviders(<HomePage />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('training page has no obvious accessibility violations', async () => {
    const { container } = renderWithProviders(<TrainingPage />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
