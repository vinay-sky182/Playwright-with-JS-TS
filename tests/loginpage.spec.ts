import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage'

test('verify valid login', async ({ page }) => {
    let loginPage = new LoginPage(page); // Arange
    await loginPage.goToLoginPage(); // Action 1
    const actualTitle = await loginPage.performLogin('pwtest@nal.com', 'test123'); // Action 2
    await expect(page).toHaveTitle('My Account'); // Assert
});

test('verify invalid login', async ({ page }) => {
    let loginPage = new LoginPage(page); // Arange
    await loginPage.goToLoginPage(); // Action 1
    await loginPage.performLogin('pwtest@nal.co', 'test1234'); // Action 2
    const errorMsg = await loginPage.getInvalidLoginMessage();
    expect(errorMsg).toContain('Warning: No match for E-Mail Address and/or Password.') // Assert
});