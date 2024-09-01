import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
  const url = 'https://duckduckgo.com/';
  const title = 'DuckDuckGo — Privacy, simplified.';

  await page.goto(url);
  await expect(page).toHaveTitle(title);
})

test('iOS Browser', async ({ page }) => {
  const expectedTitle = 'DuckDuckGo Private Browser on the App Store';
  const expectedURL = 'https://apps.apple.com/us/app/duckduckgo-private-browser/id663592361?platform=iphone&ct=home-atb-home&pt=866401&mt=8';

  await page.locator('xpath=//*[@id="__next"]/div/main/article/div[1]/div[1]/div[2]/div/header/div/section[3]/nav').click();
  await page.getByRole('link', {name: 'iOS Browser'}).click();
  await expect(page).toHaveTitle(expectedTitle);
  await expect(page).toHaveURL(expectedURL);
});

test('Android Browser', async ({ page }) => {
  const expectedTitle = 'DuckDuckGo Private Browser - Apps on Google Play';
  const expectedURL = 'https://play.google.com/store/apps/details?id=com.duckduckgo.mobile.android&referrer=utm_campaign%3Dhome-atb-home';

  await page.locator('xpath=//*[@id="__next"]/div/main/article/div[1]/div[1]/div[2]/div/header/div/section[3]/nav').click();
  await page.getByRole('link', {name: 'Android Browser'}).click();
  await expect(page).toHaveTitle(expectedTitle);
  await expect(page).toHaveURL(expectedURL);
});

test('Mac Browser', async ({ page }) => {
  const expectedTitle = 'Download DuckDuckGo for Mac';
  const expectedURL = 'https://duckduckgo.com/mac';

  await page.locator('xpath=//*[@id="__next"]/div/main/article/div[1]/div[1]/div[2]/div/header/div/section[3]/nav').click();
  await page.getByRole('link', {name: 'Mac Browser'}).click();
  await expect(page).toHaveTitle(expectedTitle);
  await expect(page).toHaveURL(expectedURL);
});

test('Windows Browser', async ({ page }) => {
  const expectedTitle = 'Download DuckDuckGo for Windows';
  const expectedURL = 'https://duckduckgo.com/windows';

  await page.locator('xpath=//*[@id="__next"]/div/main/article/div[1]/div[1]/div[2]/div/header/div/section[3]/nav').click();
  await page.getByRole('link', {name: 'Windows Browser', exact: true}).click();
  await expect(page).toHaveTitle(expectedTitle);
  await expect(page).toHaveURL(expectedURL);
});

test('Browser Extensions', async ({ page }) => {
  const expectedTitle = 'How To Add the DuckDuckGo Extension to Your Browser | DuckDuckGo Help Pages';
  const expectedURL = 'https://duckduckgo.com/duckduckgo-help-pages/desktop/adding-duckduckgo-to-your-browser/';

  await page.locator('xpath=//*[@id="__next"]/div/main/article/div[1]/div[1]/div[2]/div/header/div/section[3]/nav').click();
  await page.getByRole('link', {name: 'Browser Extensions'}).click();
  await expect(page).toHaveTitle(expectedTitle);
  await expect(page).toHaveURL(expectedURL);
});
