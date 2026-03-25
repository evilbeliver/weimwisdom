import { screen } from '@testing-library/react';
import { HeroSection } from '@/components/HeroSection';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { renderWithProviders } from '@tests/test-utils';

describe('shared shell components', () => {
  it('renders the header navigation', () => {
    renderWithProviders(<SiteHeader />);

    expect(screen.getByRole('link', { name: 'WeimWisdom Logo WeimWisdom' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Open navigation menu' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Breed Info' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Activities & Jobs' })).toBeInTheDocument();
  });

  it('renders the footer summary and links', () => {
    renderWithProviders(<SiteFooter />);

    expect(screen.getByText(/Breed facts, activities & jobs, training plans/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Training' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Adoption' })).toBeInTheDocument();
  });

  it('renders the hero call to action content', () => {
    renderWithProviders(<HeroSection />);

    expect(screen.getByRole('heading', { name: /sleek, smart, and endlessly devoted/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /explore breed info/i })).toHaveAttribute('href', '/breed-info');
    expect(screen.getByAltText(/weimaraner standing on a mountain ridge during sunset/i)).toBeInTheDocument();
  });
});
