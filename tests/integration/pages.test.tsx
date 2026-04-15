import { screen } from '@testing-library/react';
import ActivitiesPage from '@/pages/activities';
import BreedInfoPage from '@/pages/breed-info';
import AdoptionPage from '@/pages/adoption';
import BlogPage from '@/pages/blog';
import { renderWithProviders } from '@tests/test-utils';
import type { BlogPostMeta } from '@/lib/blog';

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

  it('renders rescue organization links with external indicators', () => {
    renderWithProviders(<AdoptionPage />);

    // Verify Weim Friends Rescue links have external indicators
    const weimFriendsLink = screen.getByRole('link', { name: /weim friends rescue/i });
    expect(weimFriendsLink).toHaveAttribute('target', '_blank');
    expect(weimFriendsLink).toHaveAttribute('rel', 'noopener noreferrer');
    expect(weimFriendsLink.querySelector('svg')).toBeInTheDocument();

    // Verify Tarheel rescue links have external indicators
    const tarheelLink = screen.getByRole('link', { name: /tarheel weimaraner rescue/i });
    expect(tarheelLink).toHaveAttribute('target', '_blank');
    expect(tarheelLink).toHaveAttribute('rel', 'noopener noreferrer');
    expect(tarheelLink.querySelector('svg')).toBeInTheDocument();
  });
});

describe('blog page integration', () => {
  const mockPosts: BlogPostMeta[] = [
    {
      slug: 'test-post-1',
      title: 'Test Post 1',
      date: '2026-03-27',
      author: 'Test Author',
      excerpt: 'Test excerpt 1',
      order: 1,
      image: '/images/test1.jpg',
    },
    {
      slug: 'test-post-2',
      title: 'Test Post 2',
      date: '2026-03-28',
      author: 'Test Author',
      excerpt: 'Test excerpt 2',
      order: 2,
      image: '/images/test2.jpg',
    },
  ];

  it('renders blog listing with posts', () => {
    renderWithProviders(<BlogPage posts={mockPosts} />);

    expect(screen.getByRole('heading', { name: /weimwisdom blog/i })).toBeInTheDocument();
    expect(screen.getByText('Test Post 1')).toBeInTheDocument();
    expect(screen.getByText('Test Post 2')).toBeInTheDocument();
  });

  it('renders pagination when more than 6 posts exist', () => {
    const manyPosts: BlogPostMeta[] = Array.from({ length: 8 }, (_, i) => ({
      slug: `post-${i + 1}`,
      title: `Post ${i + 1}`,
      date: '2026-03-27',
      author: 'Test Author',
      excerpt: `Excerpt ${i + 1}`,
      order: i + 1,
      image: null,
    }));

    renderWithProviders(<BlogPage posts={manyPosts} />);

    // Should show first 6 posts on page 1
    expect(screen.getByText('Post 1')).toBeInTheDocument();
    expect(screen.getByText('Post 6')).toBeInTheDocument();
    // Posts 7 and 8 should not be visible on page 1
    expect(screen.queryByText('Post 7')).not.toBeInTheDocument();
    expect(screen.queryByText('Post 8')).not.toBeInTheDocument();
    // Pagination should be visible
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('does not render pagination with 6 or fewer posts', () => {
    renderWithProviders(<BlogPage posts={mockPosts} />);

    // With only 2 posts, pagination should not be visible
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  });
});
