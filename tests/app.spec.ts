import { test, expect } from '@playwright/test'

// parallel mode में execution order random होता है इसलिए कभी-कभी testcases fail हो जाते हैं अगर वो किसी shared resource पर depend करते हैं जैसे database, file system आदि। ऐसे cases में हम describe को serial mode में चला सकते हैं ताकि उसके अंदर के सारे testcases sequentially execute हों।
// test.describe.serial() का use करके हम describe के अंदर के सारे testcases को sequentially execute कर सकते हैं।
test.describe.serial('login feature', () => {

    test.beforeAll('global pre-condition', async () => {
        console.log('check DB connection...and connect to DB');
    });

    test.beforeEach(async () => {
        console.log('---------Starting the Test--------');
    });

    test.beforeEach('pre-condition before each test', async ({ page }) => {
        console.log('open the url');
        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    });

    test.afterEach('post-condition after each test', async ({ page }) => {
        console.log('close the page');
        page.close();
    });

    test.afterEach(async () => {
        console.log('---------Ending the Test--------');
    });

    test.afterAll('global post-condition', async () => {
        console.log('close the DB connection...');
    });


    test('Title Test', async ({ page }) => {
        await expect(page).toHaveTitle('Account Login');
    });
    test('Header Test', async ({ page }) => {
        await expect(page.getByText('Returning Customer', { exact: true })).toBeVisible();
    });
});