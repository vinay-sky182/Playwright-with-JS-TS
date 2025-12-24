import { test, expect } from '@playwright/test';
import { ElementUtil } from '../utils/ElementUtil.js'

test('has title', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    let eleUtil = new ElementUtil(page, 10000);

    // await eleUtil.getLocator(`//input[@id='input-email']`).fill('test@gmail.com');
    // await eleUtil.getLocator(page.getByRole('textbox', { name: 'Password' })).fill('test@123');
    // await eleUtil.getLocator(`input[type='submit'][value='Login']`).click();

    await eleUtil.fill(`//input[@id='input-email']`, 'test@nal.com');
    await eleUtil.fill(page.getByLabel('Password'), 'test@123');
    await eleUtil.click(`input[type='submit'][value='Login']`, { force: true, timeout: 5000 });


})