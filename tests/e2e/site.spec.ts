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
  await expect(page.getByRole('heading', { name: /training plans for bright dogs/i })).toBeVisible();

  await page.goto('/rescue');
  await expect(page.getByRole('heading', { name: /rescue resources built around patience/i })).toBeVisible();
});
