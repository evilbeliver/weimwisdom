import { axe, toHaveNoViolations } from 'jest-axe';
import HomePage from '@/pages/index';
import TrainingPage from '@/pages/training';
import ActivitiesPage from '@/pages/activities';
import BreedInfoPage from '@/pages/breed-info';
import AdoptionPage from '@/pages/adoption';
import BlogPage from '@/pages/blog';
import { renderWithProviders } from '@tests/test-utils';
import type { BlogPostMeta } from '@/lib/blog';

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

  it('activities page has no obvious accessibility violations', async () => {
    const { container } = renderWithProviders(<ActivitiesPage />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('breed info page has no obvious accessibility violations', async () => {
    const { container } = renderWithProviders(<BreedInfoPage />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('adoption page has no obvious accessibility violations', async () => {
    const { container } = renderWithProviders(<AdoptionPage />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('blog page has no obvious accessibility violations', async () => {
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
    ];
    
    const { container } = renderWithProviders(<BlogPage posts={mockPosts} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
