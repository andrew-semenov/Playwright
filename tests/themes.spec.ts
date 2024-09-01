import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
  const url = 'https://duckduckgo.com/';
  const title = 'DuckDuckGo — Privacy, simplified.';

  await page.goto(url);
  await expect(page).toHaveTitle(title);
})

test('check themes list', async ({ page }) => {
  await page.locator('xpath=//*[@id="__next"]/div/main/article/div[1]/div[1]/div[2]/div/header/div/section[3]/nav').click();
  await page.getByRole('link', {name: 'Themes'}).click();
  await expect(page.locator('//div[@data-theme-id="-1"]')).toBeVisible();
  await expect(page.locator('//div[@data-theme-id="b"]')).toBeVisible();
  await expect(page.locator('//div[@data-theme-id="c"]')).toBeVisible();
  await expect(page.locator('//div[@data-theme-id="d"]')).toBeVisible();
  await expect(page.locator('//div[@data-theme-id="g"]')).toBeVisible();
  await expect(page.locator('//div[@data-theme-id="t"]')).toBeVisible();
});

test('change theme', async ({ page }) => {
  await page.locator('xpath=//*[@id="__next"]/div/main/article/div[1]/div[1]/div[2]/div/header/div/section[3]/nav').click();
  await page.getByRole('link', {name: 'Themes'}).click();
  await page.locator('//div[@data-theme-id="d"]').click();
});
