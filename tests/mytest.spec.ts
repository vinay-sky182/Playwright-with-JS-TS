import { test, expect, Page, Locator } from '@playwright/test';

test('test title assertion', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    expect(await page.title()).toBe('Account Login');
    expect(page).toHaveTitle('Account Login');
});

// test.only will execute only this test case if we run the spec file using 'npx playwright test' command
test('test url assertion', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    expect(page).toHaveURL(/.*account\/login.*/);
});

// test.skip will skip the test case execution
test.skip('test header is visible assertion', async ({ page, browserName }) => {

    // it will suport only chromium, firefox and webkit only
    // test.skip(browserName === 'firefox', 'feature is not support in firefox');
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await expect(page.getByText('Returning Customer', { exact: true })).toBeVisible();
});

test('test email-id is visible assertion', async ({ page, browserName }) => {

    // it will suport only chromium, firefox and webkit only
    test.slow(browserName === 'firefox', 'feature is slow in firefox')
    // test.slow();

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await expect(page.getByRole('textbox', { name: 'E-Mail Address' })).toBeVisible();
});

test.fixme('test password is visible assertion', async ({ page, browserName }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await expect(page.getByRole('textbox', { name: 'Password' })).toBeVisible();
});

test('test customer header is visible assertion', async ({ page, browserName }) => {

    // if the test-case is failing then we can mark it as fail using test.fail() it will mark as paas in report because the test is expected to fail and it is actully failing

    test.fail();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await expect(page.getByText('New Customer11', { exact: true })).toBeVisible();
});