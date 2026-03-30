import { render, screen } from '@testing-library/react';
import { SiteFooter } from '@/components/SiteFooter';

describe('SiteFooter', () => {
  it('renders footer with social media links', () => {
    render(<SiteFooter />);
    
    // Check that footer is rendered
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    
    // Check for WeimWisdom heading
    expect(screen.getByText('WeimWisdom')).toBeInTheDocument();
  });

  it('renders Facebook social media link', () => {
    render(<SiteFooter />);
    
    const facebookLink = screen.getByRole('link', { name: /visit weimwisdom on facebook/i });
    expect(facebookLink).toBeInTheDocument();
    expect(facebookLink).toHaveAttribute('href', 'https://www.facebook.com/profile.php?id=61574378210667');
    expect(facebookLink).toHaveAttribute('target', '_blank');
    expect(facebookLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders Follow Us section', () => {
    render(<SiteFooter />);
    
    expect(screen.getByText('Follow Us')).toBeInTheDocument();
  });

  it('renders navigation links in footer', () => {
    render(<SiteFooter />);
    
    // Check that explore section exists
    expect(screen.getByText('Explore')).toBeInTheDocument();
    
    // Check for some navigation links (they should be in both header and footer)
    const homeLinks = screen.getAllByRole('link', { name: /home/i });
    expect(homeLinks.length).toBeGreaterThan(0);
  });

  it('renders contact information', () => {
    render(<SiteFooter />);
    
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /weimcrime@weimwisdom.com/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /513-607-6445/i })).toBeInTheDocument();
  });

  it('Facebook link has proper accessibility attributes', () => {
    render(<SiteFooter />);
    
    const facebookLink = screen.getByRole('link', { name: /visit weimwisdom on facebook/i });
    
    // Should have aria-label for screen readers
    expect(facebookLink).toHaveAttribute('aria-label', 'Visit WeimWisdom on Facebook');
    
    // Should open in new tab with security attributes
    expect(facebookLink).toHaveAttribute('target', '_blank');
    expect(facebookLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
