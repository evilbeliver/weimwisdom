import { screen } from '@testing-library/react';
import { HeroSection } from '@/components/HeroSection';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { SpotlightGrid } from '@/components/SpotlightGrid';
import { renderWithProviders } from '@tests/test-utils';
import type { SpotlightCard } from '@/data/siteContent';

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

describe('SpotlightGrid component', () => {
  const mockCards: SpotlightCard[] = [
    {
      title: 'Card Without Link',
      description: 'This card has no external link',
      eyebrow: 'Test',
    },
    {
      title: 'Card With Link',
      description: 'This card has an external resource link',
      eyebrow: 'Test',
      link: {
        url: 'https://example.com',
        label: 'Learn more at Example',
      },
    },
  ];

  it('renders cards with and without external links', () => {
    renderWithProviders(<SpotlightGrid title="Test Grid" items={mockCards} />);

    expect(screen.getByText('Card Without Link')).toBeInTheDocument();
    expect(screen.getByText('Card With Link')).toBeInTheDocument();
    expect(screen.getByText('Learn more at Example')).toBeInTheDocument();
  });

  it('renders external links with correct attributes', () => {
    renderWithProviders(<SpotlightGrid title="Test Grid" items={mockCards} />);

    const externalLink = screen.getByRole('link', { name: /learn more at example/i });
    expect(externalLink).toHaveAttribute('href', 'https://example.com');
    expect(externalLink).toHaveAttribute('target', '_blank');
    expect(externalLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders external link icon for accessibility', () => {
    renderWithProviders(<SpotlightGrid title="Test Grid" items={mockCards} />);

    // OpenInNewIcon should be present in the link
    const externalLink = screen.getByRole('link', { name: /learn more at example/i });
    expect(externalLink.querySelector('svg')).toBeInTheDocument();
  });
});
