import { test, expect, Page, Locator } from '@playwright/test';

test('valu assertion', async () => {
    expect(2 + 3).toBe(5);
    expect('playwright').toContain('play');
    expect([1, 2, 3]).toEqual([1, 2, 3]);
    expect(true).toBeTruthy();
    expect(false).toBeFalsy();
    expect(null).toBeNull();
    expect(undefined).toBeUndefined();
    expect(NaN).toBeNaN();
    expect(10).toBeGreaterThan(5);
    expect(10).toBeLessThan(20);
    expect({ role: 'admin' }).toHaveProperty('role');
});

test('locator based assertion', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    let header: Locator = page.getByText('Returning Customer', { exact: true });
    await expect(header).toBeVisible();
    await expect(header).toHaveText('Returning Customer');
    // default timeout is 5 sec for expect
    expect(header).toContainText('Customer');

    let emailId: Locator = page.getByRole('textbox', { name: 'E-Mail Address' });
    await expect(emailId).toHaveAttribute('id', 'input-email');
    await expect(emailId).toHaveCSS('height', '34px');

    let footerLinks: Locator = page.locator('footer >> a');
    await expect(footerLinks).toHaveCount(16);

});
test('soft assertion', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    let header: Locator = page.getByText('Returning Customer', { exact: true });
    // await expect(header).toHaveText('Returning_Customer');

    await expect.soft(header).toHaveText('Returning_Customer');
    console.log('Done');

});
test('screenshot assertion', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    let header: Locator = page.getByText('Returning Customer', { exact: true });
    await expect(header).toHaveScreenshot('returning-customer.png');

});

test('url and title assertion', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    // we have to use regex for partial match and in js regex is represented between two /.../ along with .* at both ends and to escape special characters use \, not inside of '' or "".

    await expect(page).toHaveURL(/.*route=account\/login/);

    let appURL = page.url();
    expect(appURL).toContain('account/login');

    await expect(page).toHaveTitle('Account Login');

});

test('element is visible, enabled, disabled assertion', async ({ page }) => {
    await page.goto('https://classic.freecrm.com/register/');

    let submitBtn: Locator = page.getByRole('button', { name: 'SUBMIT' });
    let checkbox: Locator = page.getByLabel('I agree to the terms and conditions.');

    await expect(checkbox).not.toBeChecked();
    await expect(submitBtn).toBeDisabled();
    await expect(submitBtn).toBeVisible();
    await checkbox.check();
    await expect(checkbox).toBeChecked();
    await expect(submitBtn).toBeEnabled();

    await page.pause(); // it will not close the browser immediately untill we close it manually
});