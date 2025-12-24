import { test, expect, Page, Locator } from '@playwright/test';

test('test title assertion', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    expect(page).toHaveTitle('Account_Login');
});