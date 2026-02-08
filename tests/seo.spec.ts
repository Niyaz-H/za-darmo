import { test, expect } from '@playwright/test';

test.describe('SEO Tests', () => {
  test('homepage has proper title', async ({ page }) => {
    await page.goto('/');
    
    const title = await page.title();
    expect(title).toBeTruthy();
    expect(title.length).toBeGreaterThan(0);
    // Title can be longer for descriptive SEO titles
    expect(title.length).toBeLessThan(100);
  });

  test('homepage has meta description', async ({ page }) => {
    await page.goto('/');
    
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveCount(1);
    
    const content = await metaDescription.getAttribute('content');
    expect(content).toBeTruthy();
    expect(content!.length).toBeGreaterThan(50);
    expect(content!.length).toBeLessThan(160); // SEO best practice
  });

  test('all pages have unique titles', async ({ page }) => {
    const pages = [
      '/',
      '/spis-pytan',
      '/o-stronie',
      '/kontakt',
      '/jak-czytac-pismo-swiete',
    ];
    
    const titles = new Set<string>();
    
    for (const pagePath of pages) {
      await page.goto(pagePath);
      const title = await page.title();
      titles.add(title);
    }
    
    // All titles should be unique
    expect(titles.size).toBe(pages.length);
  });

  test('all pages have meta descriptions', async ({ page }) => {
    const pages = [
      '/',
      '/spis-pytan',
      '/o-stronie',
      '/kontakt',
      '/jak-czytac-pismo-swiete',
    ];
    
    for (const pagePath of pages) {
      await page.goto(pagePath);
      
      const metaDescription = page.locator('meta[name="description"]');
      await expect(metaDescription).toHaveCount(1);
      
      const content = await metaDescription.getAttribute('content');
      expect(content).toBeTruthy();
    }
  });

  test('sitemap.xml is accessible', async ({ page }) => {
    const response = await page.goto('/sitemap.xml');
    
    expect(response?.status()).toBe(200);
    expect(response?.headers()['content-type']).toContain('xml');
    
    // Check sitemap has URLs
    const content = await page.content();
    expect(content).toContain('<urlset');
    expect(content).toContain('<url>');
    expect(content).toContain('<loc>');
  });

  test('robots.txt is accessible', async ({ page }) => {
    const response = await page.goto('/robots.txt');
    
    expect(response?.status()).toBe(200);
    
    // Check robots.txt has content (case-insensitive check)
    const content = await page.content();
    expect(content.toLowerCase()).toContain('user-agent');
  });

  test('pages have proper heading hierarchy', async ({ page }) => {
    await page.goto('/');
    
    // Should have exactly one h1
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBe(1);
    
    // h1 should have content
    const h1Text = await page.locator('h1').first().textContent();
    expect(h1Text).toBeTruthy();
    expect(h1Text!.length).toBeGreaterThan(0);
  });

  test('pages have lang attribute', async ({ page }) => {
    await page.goto('/');
    
    const htmlLang = await page.locator('html').getAttribute('lang');
    expect(htmlLang).toBeTruthy();
    expect(htmlLang).toBe('pl'); // Polish language
  });

  test('images have alt attributes', async ({ page }) => {
    await page.goto('/');
    
    const images = page.locator('img');
    const count = await images.count();
    
    if (count > 0) {
      // Check first few images have alt text
      for (let i = 0; i < Math.min(count, 5); i++) {
        const img = images.nth(i);
        const alt = await img.getAttribute('alt');
        // Alt can be empty string for decorative images, but should exist
        expect(alt).not.toBeNull();
      }
    }
  });
});
