import { Browser, chromium, Locator, Page, selectors } from "@playwright/test";

(async () => {

    let browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });

    let page: Page = await browser.newPage();

    try {

        await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

        await page.getByRole('button', { name: 'Login' }).click();
        await page.getByRole('link', { name: 'Continue' }).highlight();

        // if button is written in DOM as input or button ----> role will be 'button'
        // if button is written in DOM as <a> ----> role will be 'link'
        // https://classic.freecrm.com/register/

    }
    catch (error) {
        console.log('E:', error);
    }
    finally {
        // await page.close();
    }

})();