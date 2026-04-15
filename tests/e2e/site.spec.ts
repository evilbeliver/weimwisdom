import { expect, test } from '@playwright/test';

test('home page loads and exposes primary journey links', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { name: /sleek, smart, and endlessly devoted/i })).toBeVisible();
  await expect(page.getByRole('banner').getByRole('link', { name: 'Breed Info' })).toBeVisible();
  await expect(page.getByRole('banner').getByRole('link', { name: 'Training' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Explore breed info' })).toBeVisible();
});

test('secondary content pages render', async ({ page }) => {
  await page.goto('/training');
  await expect(page.getByRole('heading', { name: /training plans for bright dogs with big engines/i })).toBeVisible();

  await page.goto('/activities');
  await expect(page.getByRole('heading', { name: /activities & jobs for dogs who love momentum/i })).toBeVisible();

  await page.goto('/adoption');
  await expect(page.getByRole('heading', { name: /adoption and readiness guidance/i })).toBeVisible();

  await page.goto('/blog');
  await expect(page.getByRole('heading', { name: /weimwisdom blog/i })).toBeVisible();
});

test('external resource links open in new tabs', async ({ page }) => {
  await page.goto('/activities');
  
  // Wait for page to fully load
  await page.waitForLoadState('networkidle');

  // Verify external links have target="_blank" and visual indicators
  const externalLinks = page.getByRole('link').filter({ hasText: 'Learn more at' });
  const count = await externalLinks.count();
  expect(count).toBeGreaterThan(0);

  // Check first external link has correct attributes
  const firstLink = externalLinks.first();
  await expect(firstLink).toHaveAttribute('target', '_blank');
  await expect(firstLink).toHaveAttribute('rel', 'noopener noreferrer');
});
