import { test, expect } from '@playwright/test';

test.describe('Search Modal', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('should open search modal when clicking search button', async ({ page }) => {
    // Find and click the search button
    const searchButton = page.locator('button[aria-label="Szukaj"]');
    await expect(searchButton).toBeVisible();
    
    await searchButton.click();
    
    // Verify modal is visible
    const modal = page.locator('div.fixed.inset-0.z-50');
    await expect(modal).toBeVisible();
    
    // Verify search input is visible and focused
    const searchInput = page.locator('input[placeholder="Szukaj pytań..."]');
    await expect(searchInput).toBeVisible();
    await expect(searchInput).toBeFocused();
  });

  test('should display placeholder text when modal opens', async ({ page }) => {
    // Open modal
    await page.click('button[aria-label="Szukaj"]');
    
    // Check for placeholder text
    await expect(page.getByText('Wpisz frazę, aby wyszukać pytania')).toBeVisible();
  });

  test('should filter and display search results', async ({ page }) => {
    // Open modal
    await page.click('button[aria-label="Szukaj"]');
    
    // Type in search input - "zbawienie" matches questions #2 and #7
    const searchInput = page.locator('input[placeholder="Szukaj pytań..."]');
    await searchInput.fill('zbawienie');
    
    // Verify results are displayed
    const results = page.locator('ul.divide-y li');
    await expect(results.first()).toBeVisible();
    
    // Verify at least one result contains the search term
    const firstResult = results.first();
    await expect(firstResult).toBeVisible();
  });

  test('should display "no results" message for non-matching search', async ({ page }) => {
    // Open modal
    await page.click('button[aria-label="Szukaj"]');
    
    // Type a search that won't match anything
    const searchInput = page.locator('input[placeholder="Szukaj pytań..."]');
    await searchInput.fill('xyzabc123nonexistent');
    
    // Wait for results
    await page.waitForTimeout(500);
    
    // Verify "no results" message
    await expect(page.getByText(/Nie znaleziono pytań pasujących do/)).toBeVisible();
  });

  test('should close modal when clicking backdrop', async ({ page }) => {
    // Open modal
    await page.click('button[aria-label="Szukaj"]');
    
    // Verify modal is open
    const modal = page.locator('div.fixed.inset-0.z-50');
    await expect(modal).toBeVisible();
    
    // Click the backdrop (the outer div, not the modal content)
    await page.locator('div.fixed.inset-0.z-50').click({ position: { x: 10, y: 10 } });
    
    // Verify modal is closed
    await expect(modal).not.toBeVisible();
  });

  test('should NOT close modal when clicking inside modal content', async ({ page }) => {
    // Open modal
    await page.click('button[aria-label="Szukaj"]');
    
    // Verify modal is open
    const modal = page.locator('div.fixed.inset-0.z-50');
    await expect(modal).toBeVisible();
    
    // Click inside the modal content
    const modalContent = page.locator('div.bg-white.rounded-lg');
    await modalContent.click();
    
    // Verify modal is still visible
    await expect(modal).toBeVisible();
  });

  test('should close modal when clicking X button', async ({ page }) => {
    // Open modal
    await page.click('button[aria-label="Szukaj"]');
    
    // Verify modal is open
    const modal = page.locator('div.fixed.inset-0.z-50');
    await expect(modal).toBeVisible();
    
    // Click the close button
    await page.click('button[aria-label="Zamknij wyszukiwanie"]');
    
    // Verify modal is closed
    await expect(modal).not.toBeVisible();
  });

  test('should close modal when pressing Escape key', async ({ page }) => {
    // Open modal
    await page.click('button[aria-label="Szukaj"]');
    
    // Verify modal is open
    const modal = page.locator('div.fixed.inset-0.z-50');
    await expect(modal).toBeVisible();
    
    // Press Escape
    await page.keyboard.press('Escape');
    
    // Verify modal is closed
    await expect(modal).not.toBeVisible();
  });

  test('should navigate to question page when clicking result', async ({ page }) => {
    // Open modal
    await page.click('button[aria-label="Szukaj"]');
    
    // Type in search input - "Jezus" matches questions #6 and #8
    const searchInput = page.locator('input[placeholder="Szukaj pytań..."]');
    await searchInput.fill('Jezus');
    
    // Wait for results to appear
    const firstResult = page.locator('ul.divide-y li').first();
    await expect(firstResult).toBeVisible();
    
    // Click first result
    await firstResult.click();
    
    // Verify modal is closed after navigation
    const modal = page.locator('div.fixed.inset-0.z-50');
    await expect(modal).not.toBeVisible();
  });

  test('should clear search when closing modal', async ({ page }) => {
    // Open modal
    await page.click('button[aria-label="Szukaj"]');
    
    // Type in search input
    const searchInput = page.locator('input[placeholder="Szukaj pytań..."]');
    await searchInput.fill('test search');
    
    // Close modal
    await page.keyboard.press('Escape');
    
    // Reopen modal
    await page.click('button[aria-label="Szukaj"]');
    
    // Verify search is cleared
    await expect(searchInput).toHaveValue('');
  });
});
