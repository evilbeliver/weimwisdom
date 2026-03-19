import { screen } from '@testing-library/react';
import HomePage from '@/pages/index';
import { renderWithProviders } from '@tests/test-utils';

describe('home page integration', () => {
  it('exposes key navigation paths and breed content', () => {
    renderWithProviders(<HomePage />);

    expect(screen.getAllByRole('link', { name: 'Breed Info' })[0]).toHaveAttribute('href', '/breed-info');
    expect(screen.getAllByRole('link', { name: 'Training' })[0]).toHaveAttribute('href', '/training');
    expect(screen.getByRole('heading', { name: /what makes weimaraners unforgettable/i })).toBeInTheDocument();
    expect(screen.getByText(/mobile-friendly layouts, accessible navigation/i)).toBeInTheDocument();
  });
});
