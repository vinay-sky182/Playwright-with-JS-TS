import { test } from '@playwright/test';

test.use({ storageState: 'auth/state.json' });
test('navigate to cart page without login', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=checkout/cart');

    await page.waitForTimeout(5000);
});

// Ideal use case: when you have multiple test cases to run after login once and you want to avoid login for each test case

// It will not work for multifactor authentication 