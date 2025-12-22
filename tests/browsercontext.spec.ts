import { test, expect, chromium, Page, Locator, BrowserContext, Browser } from '@playwright/test';

test('check page title', async () => {
    let browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const context1: BrowserContext = await browser.newContext();
    const context2: BrowserContext = await browser.newContext();

    // create a new incognito browser context
    let page1: Page = await context1.newPage();
    let page2: Page = await context2.newPage();

    // user1: admin
    await page1.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    await page1.locator(`#input-email`).fill("march2024@open.com");
    await page1.locator(`#input-password`).fill("Selenium@12345");
    await page1.locator(`//input[@value='Login']`).click();
    // await expect(page1.locator("text=My Account")).toBeVisible();

    // user2: customer
    await page2.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await page2.locator(`#input-email`).fill("pwtest@play.com");
    await page2.locator(`#input-password`).fill("test@123");
    await page2.locator(`//input[@value='Login']`).click();
    // await expect(page2.locator("text=My Account")).toBeVisible();

    context1.close();

    // await page1.waitForTimeout(5000);
    await page2.waitForTimeout(5000);
});