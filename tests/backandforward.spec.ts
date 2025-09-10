import { test, expect } from '@playwright/test';

test('back and forward navigation', async ({ page }) => {
    await page.goto('https://www.google.com/');
    console.log(await page.title());
    await page.goto('https://www.amazon.com/');
    console.log(await page.title());
    await page.goBack();
    console.log(await page.title());
    await page.goForward();
    console.log(await page.title());

    await page.waitForTimeout(5000);

    await page.reload(); // to refresh the page
});