import { test, expect } from '@playwright/test';

test.describe('Page Loading Tests', () => {
  test('homepage loads', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/za-darmo/i);
    await expect(page.locator('body')).toBeVisible();
  });

  test('question list page loads', async ({ page }) => {
    await page.goto('/spis-pytan');
    
    // Check page loaded - title contains site name
    await expect(page).toHaveTitle(/spis pytań|za-darmo/i);
    
    // Should have question links
    const questionLinks = page.getByRole('link').filter({ hasText: /czy|jak|co/i });
    await expect(questionLinks.first()).toBeVisible();
  });

  test('about page loads', async ({ page }) => {
    await page.goto('/o-stronie');
    
    // Check page loaded
    await expect(page).toHaveTitle(/o stronie|za-darmo/i);
    await expect(page.locator('body')).toBeVisible();
  });

  test('contact page loads', async ({ page }) => {
    await page.goto('/kontakt');
    
    // Check page loaded
    await expect(page).toHaveTitle(/kontakt|za-darmo/i);
    
    // Should have contact form or contact information
    const hasForm = await page.locator('form').count() > 0;
    const hasContactInfo = await page.getByText(/email|kontakt/i).count() > 0;
    
    expect(hasForm || hasContactInfo).toBeTruthy();
  });

  test('how to read Bible page loads', async ({ page }) => {
    await page.goto('/jak-czytac-pismo-swiete');
    
    // Check page loaded
    await expect(page).toHaveTitle(/jak czytać|pismo|za-darmo/i);
    await expect(page.locator('body')).toBeVisible();
  });

  test('question detail page loads', async ({ page }) => {
    await page.goto('/pytania/czy-mozna-utracic-zycie-wieczne');
    
    // Check page loaded
    await expect(page.locator('body')).toBeVisible();
    
    // Should have question content
    const hasHeading = await page.locator('h1, h2').count() > 0;
    expect(hasHeading).toBeTruthy();
  });

  test('404 page works for invalid routes', async ({ page }) => {
    const response = await page.goto('/this-page-does-not-exist');
    
    // Should return 404 status
    expect(response?.status()).toBe(404);
    
    // Should show 404 content
    const has404Text = await page.getByText(/404|nie znaleziono|not found/i).count() > 0;
    expect(has404Text).toBeTruthy();
  });
});
