import { test, expect } from '@playwright/test';

test.describe('Mobile View Tests', () => {
  test.use({ viewport: { width: 375, height: 667 } }); // iPhone SE

  test.describe('Mobile Menu', () => {
    test('mobile menu opens and closes via button', async ({ page }) => {
      await page.goto('/');

      // Desktop nav should be hidden on mobile
      const desktopNav = page.locator('nav.hidden.lg\\:block');
      await expect(desktopNav).toBeHidden();

      // Open mobile menu
      const menuButton = page.getByLabel('Otwórz menu');
      await expect(menuButton).toBeVisible();
      await menuButton.click();

      // Wait for animation
      await page.waitForTimeout(400);

      // Menu dialog should be visible
      const menuDialog = page.locator('[role="dialog"][aria-modal="true"]');
      await expect(menuDialog).toBeVisible();

      // Navigation links should be visible inside the menu
      const menuLinks = menuDialog.getByRole('link');
      await expect(menuLinks.first()).toBeVisible();

      // Close via close button
      const closeButton = page.getByLabel('Zamknij menu');
      await expect(closeButton).toBeVisible();
      await closeButton.click();

      // Wait for close animation
      await page.waitForTimeout(400);

      // Menu panel should be off-screen (translated)
      const menuPanel = page.locator('[role="dialog"]');
      await expect(menuPanel).toHaveClass(/translate-x-full/);
    });

    test('mobile menu closes when clicking overlay', async ({ page }) => {
      await page.goto('/');

      // Open menu
      await page.getByLabel('Otwórz menu').click();
      await page.waitForTimeout(400);

      // Click the backdrop overlay (not the menu panel)
      const backdrop = page.locator('[aria-hidden="true"].fixed.inset-0');
      await backdrop.click({ position: { x: 10, y: 300 } });

      await page.waitForTimeout(400);

      // Menu should be closed
      const menuPanel = page.locator('[role="dialog"]');
      await expect(menuPanel).toHaveClass(/translate-x-full/);
    });

    test('mobile menu closes when pressing Escape', async ({ page }) => {
      await page.goto('/');

      // Open menu
      await page.getByLabel('Otwórz menu').click();
      await page.waitForTimeout(400);

      // Press Escape
      await page.keyboard.press('Escape');
      await page.waitForTimeout(400);

      // Menu should be closed
      const menuPanel = page.locator('[role="dialog"]');
      await expect(menuPanel).toHaveClass(/translate-x-full/);
    });

    test('mobile menu closes when clicking a nav link', async ({ page }) => {
      await page.goto('/');

      // Open menu
      await page.getByLabel('Otwórz menu').click();
      await page.waitForTimeout(400);

      // Click a navigation link
      const menuDialog = page.locator('[role="dialog"]');
      const spisLink = menuDialog.getByRole('link', { name: 'Spis pytań' });
      await expect(spisLink).toBeVisible();
      await spisLink.click();

      // Should navigate to the page
      await expect(page).toHaveURL(/spis-pytan/);
    });

    test('body scroll is locked when menu is open', async ({ page }) => {
      await page.goto('/');

      // Open menu
      await page.getByLabel('Otwórz menu').click();
      await page.waitForTimeout(400);

      // Check body overflow is hidden
      const overflow = await page.evaluate(() => document.body.style.overflow);
      expect(overflow).toBe('hidden');

      // Close menu
      await page.getByLabel('Zamknij menu').click();
      await page.waitForTimeout(400);

      // Body overflow should be restored
      const overflowAfter = await page.evaluate(() => document.body.style.overflow);
      expect(overflowAfter).toBe('');
    });
  });

  test.describe('No Horizontal Overflow', () => {
    const pages = [
      { name: 'Homepage', url: '/' },
      { name: 'Spis pytań', url: '/spis-pytan' },
      { name: 'O stronie', url: '/o-stronie' },
      { name: 'Kontakt', url: '/kontakt' },
      { name: 'Polecane', url: '/polecane' },
      { name: 'Jak czytać', url: '/jak-czytac-pismo-swiete' },
    ];

    for (const p of pages) {
      test(`${p.name} has no horizontal overflow`, async ({ page }) => {
        await page.goto(p.url);
        await page.waitForLoadState('networkidle');

        // Check that the page doesn't have horizontal scroll
        const hasHorizontalOverflow = await page.evaluate(() => {
          return document.documentElement.scrollWidth > document.documentElement.clientWidth;
        });

        expect(hasHorizontalOverflow).toBe(false);
      });
    }
  });

  test.describe('Content Readability', () => {
    test('homepage hero text is readable on mobile', async ({ page }) => {
      await page.goto('/');

      // Hero heading should be visible
      const heroHeading = page.locator('h1').first();
      await expect(heroHeading).toBeVisible();

      // Check font size is reasonable (at least 20px on mobile)
      const fontSize = await heroHeading.evaluate((el) => {
        return parseFloat(window.getComputedStyle(el).fontSize);
      });
      expect(fontSize).toBeGreaterThanOrEqual(20);
    });

    test('spis-pytan question cards are readable', async ({ page }) => {
      await page.goto('/spis-pytan');

      // Page heading should be visible
      await expect(page.getByRole('heading', { name: 'Spis pytań' })).toBeVisible();

      // Question items should be visible - scope to main content area
      const mainContent = page.locator('main');
      const questionItems = mainContent.locator('a[href*="/pytania/"], a[href*="/#scroll1"]');
      const count = await questionItems.count();
      expect(count).toBeGreaterThan(0);

      // Check first visible question link has adequate height (min 40px touch target)
      const firstLink = questionItems.first();
      await expect(firstLink).toBeVisible();
      const box = await firstLink.boundingBox();
      expect(box).not.toBeNull();
      if (box) {
        expect(box.height).toBeGreaterThanOrEqual(40);
      }
    });

    test('contact form is usable on mobile', async ({ page }) => {
      await page.goto('/kontakt');

      // Form fields should be visible and full width
      const nameInput = page.locator('input[name="name"]');
      await expect(nameInput).toBeVisible();

      const inputBox = await nameInput.boundingBox();
      expect(inputBox).not.toBeNull();
      if (inputBox) {
        // Input should be at least 300px wide on 375px viewport
        expect(inputBox.width).toBeGreaterThanOrEqual(280);
      }
    });

    test('footer stacks properly on mobile', async ({ page }) => {
      await page.goto('/');

      // Scroll to footer
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await page.waitForTimeout(500);

      // Footer should be visible
      const footer = page.locator('footer');
      await expect(footer).toBeVisible();

      // Footer content should not overflow
      const footerBox = await footer.boundingBox();
      expect(footerBox).not.toBeNull();
      if (footerBox) {
        expect(footerBox.width).toBeLessThanOrEqual(375);
      }
    });

    test('sidebar stacks below content on mobile', async ({ page }) => {
      await page.goto('/spis-pytan');

      // Main content should come before sidebar
      const mainContent = page.locator('main');
      const sidebar = page.locator('aside');

      const mainBox = await mainContent.boundingBox();
      const sidebarBox = await sidebar.boundingBox();

      expect(mainBox).not.toBeNull();
      expect(sidebarBox).not.toBeNull();

      if (mainBox && sidebarBox) {
        // Sidebar should be below main content (higher Y value)
        expect(sidebarBox.y).toBeGreaterThan(mainBox.y);
        // Both should be full width (not side by side)
        expect(mainBox.width).toBeGreaterThanOrEqual(300);
        expect(sidebarBox.width).toBeGreaterThanOrEqual(300);
      }
    });
  });
});
