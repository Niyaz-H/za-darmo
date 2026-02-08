import { test, expect } from '@playwright/test';

test.describe('Content Tests', () => {
  test('homepage has hero section', async ({ page }) => {
    await page.goto('/');
    
    // Look for hero section with heading
    const heroHeading = page.locator('h1, h2').first();
    await expect(heroHeading).toBeVisible();
    
    // Hero should have some text content
    const heroText = await heroHeading.textContent();
    expect(heroText).toBeTruthy();
    expect(heroText!.length).toBeGreaterThan(0);
  });

  test('homepage has gospel message', async ({ page }) => {
    await page.goto('/');
    
    // Look for gospel-related content
    const gospelContent = page.getByText(/ewangelia|zbawienie|jezus|chrystus|bóg/i).first();
    await expect(gospelContent).toBeVisible();
  });

  test('question pages have content sections', async ({ page }) => {
    await page.goto('/pytania/czy-mozna-utracic-zycie-wieczne');
    
    // Should have main heading
    const heading = page.locator('h1').first();
    await expect(heading).toBeVisible();
    
    // Should have paragraphs of content
    const paragraphs = page.locator('p');
    const count = await paragraphs.count();
    expect(count).toBeGreaterThan(0);
  });

  test('Bible verses are displayed', async ({ page }) => {
    await page.goto('/pytania/czy-mozna-utracic-zycie-wieczne');
    
    // Look for Bible verse references (e.g., "Jan 3:16", "Rzymian 8:1")
    const versePattern = /\d+:\d+|\d+,\d+/;
    const bodyText = await page.locator('body').textContent();
    
    // Should contain verse references
    expect(bodyText).toMatch(versePattern);
  });

  test('question list shows multiple questions', async ({ page }) => {
    await page.goto('/spis-pytan');
    
    // Should have multiple question links
    const questionLinks = page.getByRole('link').filter({ hasText: /\?/ });
    const count = await questionLinks.count();
    
    // Should have at least a few questions
    expect(count).toBeGreaterThan(2);
  });

  test('footer is present on all pages', async ({ page }) => {
    const pages = ['/', '/spis-pytan', '/o-stronie', '/kontakt'];
    
    for (const pagePath of pages) {
      await page.goto(pagePath);
      
      // Check for footer using contentinfo role
      const footer = page.getByRole('contentinfo');
      await expect(footer).toBeVisible();
    }
  });

  test('header is present on all pages', async ({ page }) => {
    const pages = ['/', '/spis-pytan', '/o-stronie', '/kontakt'];
    
    for (const pagePath of pages) {
      await page.goto(pagePath);
      
      // Check for header using banner role (main site header)
      const header = page.getByRole('banner');
      await expect(header).toBeVisible();
    }
  });
});
