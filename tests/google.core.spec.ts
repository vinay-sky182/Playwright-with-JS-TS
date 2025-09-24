import { Browser, chromium, firefox, webkit, Locator, Page, expect } from "@playwright/test";

(async () => {
    let browser: Browser = await chromium.launch({ headless: false }); // it will launch the browser
    // let browser: Browser = await firefox.launch({ headless: false });
    // let browser: Browser = await webkit.launch({ headless: false });


    let page: Page = await browser.newPage(); // it will open a tab within the browser

    try {
        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login'); // it will open url within the browser tab

        let title: string = await page.title(); // it will give the page title
        console.log(`Page title is: ${title}`);

        let url: string = page.url();
        console.log('Page url is:', url); // it will give the page url

        // 1st way to write the locator to perform the action by creating element
        let email: Locator = page.locator('#input-email'); // it will return a locator just like an element return within Selenium
        await email.fill('admin@admin.com'); // it will fill the value inside of webelement just like sendkeys() in Selenium

        // 2nd way to write the locator to perform the action
        let password = await page.locator('#input-password').fill('admin@123');
        let loginBtn = await page.locator('xpath=//input[@value="Login"]').click();

        let warningMsg: Locator = page.locator('xpath=//div[@class="alert alert-danger alert-dismissible"]')

        await expect(warningMsg).toBeVisible();
        await expect(warningMsg).toHaveText(' Warning: No match for E-Mail Address and/or Password.');

    } catch (error) {
        console.log('E:', error);
    } finally {
        await page.close();
    }

})();