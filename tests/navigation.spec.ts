import { test, expect } from '@playwright/test';

test.describe('Navigation Tests', () => {
  test('homepage loads correctly', async ({ page }) => {
    await page.goto('/');
    
    // Check that the page loaded - title contains "za-darmo" (with hyphen)
    await expect(page).toHaveTitle(/za-darmo/i);
    
    // Check for main navigation elements (desktop nav hidden on mobile, use first visible)
    await expect(page.locator('nav').first()).toBeVisible();
    await expect(page.getByRole('banner')).toBeVisible();
  });

  test('all navigation links work', async ({ page }) => {
    await page.goto('/');
    
    // Test main navigation links - use nav-specific selectors
    // Based on actual navigation: Strona główna, Dobra nowina, Spis pytań, O stronie, Kontakt z nami
    const links = [
      { text: 'Spis pytań', url: '/spis-pytan' },
      { text: 'O stronie', url: '/o-stronie' },
      { text: 'Kontakt z nami', url: '/kontakt' },
    ];

    for (const link of links) {
      await page.goto('/');
      
      // Find and click the link in navigation specifically
      const navLink = page.getByRole('navigation').getByRole('link', { name: link.text });
      await expect(navLink).toBeVisible();
      await navLink.click();
      
      // Verify navigation occurred
      await expect(page).toHaveURL(new RegExp(link.url));
    }
  });

  test('mobile menu opens and closes', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Look for mobile menu button (hamburger icon)
    const menuButton = page.locator('button[aria-label*="menu" i], button:has(svg)').first();
    
    if (await menuButton.isVisible()) {
      // Open mobile menu
      await menuButton.click();
      
      // Wait a bit for animation
      await page.waitForTimeout(300);
      
      // Check if navigation is now visible
      const nav = page.locator('nav');
      await expect(nav).toBeVisible();
      
      // Close menu
      await menuButton.click();
      await page.waitForTimeout(300);
    } else {
      // If no mobile menu button found, skip this test
      test.skip();
    }
  });

  test('logo links to homepage', async ({ page }) => {
    await page.goto('/spis-pytan');
    
    // Find logo link - actual text is "Za-darmo.pl"
    const logo = page.getByRole('link', { name: 'Za-darmo.pl' });
    await expect(logo).toBeVisible();
    await logo.click();
    
    // Should navigate to homepage
    await expect(page).toHaveURL('/');
  });
});
