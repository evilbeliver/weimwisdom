import { screen } from '@testing-library/react';
import ActivitiesPage from '@/pages/activities';
import BreedInfoPage from '@/pages/breed-info';
import AdoptionPage from '@/pages/adoption';
import { renderWithProviders } from '@tests/test-utils';

describe('activities page integration', () => {
  it('renders main content and navigation', () => {
    renderWithProviders(<ActivitiesPage />);

    expect(screen.getByRole('heading', { name: /activities & jobs for dogs who love momentum and purpose/i })).toBeInTheDocument();
    expect(screen.getByText(/move beyond generic exercise/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: 'Breed Info' })[0]).toHaveAttribute('href', '/breed-info');
  });
});

describe('breed info page integration', () => {
  it('renders breed characteristics and content', () => {
    renderWithProviders(<BreedInfoPage />);

    expect(screen.getByRole('heading', { name: /breed info that balances beauty, history, and practical care/i })).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: 'Activities & Jobs' })[0]).toHaveAttribute('href', '/activities');
  });
});

describe('adoption page integration', () => {
  it('renders adoption resources and guidance', () => {
    renderWithProviders(<AdoptionPage />);

    expect(screen.getByRole('heading', { name: /adoption and readiness guidance/i })).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: 'Training' })[0]).toHaveAttribute('href', '/training');
  });
});
