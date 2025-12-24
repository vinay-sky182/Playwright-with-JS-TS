import { test, expect, Page, Locator } from '@playwright/test';

test.describe('basic test suite', () => {
    test('test title assertion', async ({ page }) => {
        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
        expect(await page.title()).toBe('Account Login');
        expect(page).toHaveTitle('Account Login');
    });

    test('test url assertion', async ({ page }) => {
        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
        expect(page).toHaveURL(/.*account\/login.*/);
    });

    test('test header is visible assertion', async ({ page, browserName }) => {

        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
        await expect(page.getByText('Returning Customer', { exact: true })).toBeVisible();
    });
});


test.describe('advanced test suite', () => {
    test('test email-id is visible assertion', async ({ page, browserName }) => {

        // it will suport only chromium, firefox and webkit only
        test.slow(browserName === 'chromium', 'feature is slow in chromium')
        // test.slow();

        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
        await expect(page.getByRole('textbox', { name: 'E-Mail Address' })).toBeVisible();
    });

    test('test password is visible assertion', async ({ page, browserName }) => {

        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
        await expect(page.getByRole('textbox', { name: 'Password' })).toBeVisible();
    });

    test('test customer header is visible assertion', async ({ page, browserName }) => {

        // if the test-case is failing then we can mark it as fail using test.fail() it will mark as paas in report because the test is expected to fail and it is actully failing

        test.fail();
        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
        await expect(page.getByText('New Customer11', { exact: true })).toBeVisible();
    });
});