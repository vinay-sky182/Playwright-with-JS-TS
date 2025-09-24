import { Browser, chromium, Locator, Page, selectors } from "@playwright/test";

(async () => {

    let browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });

    let page: Page = await browser.newPage();

    try {

        await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

        // it used with <img> tag which has the alt attribute with value
        // "naveenautomationlabs.com/opencart/ui/data-testid-page.html"
        await page.getByAltText('naveenopencart').click();

        // await page.getByTestId('username-input').fill('NaveenAutomation Labs');
        // getByTestId() this can be used when some elemetns have 'data-testid' attribute we cannot use normal id attribute with this method.

        await page.getByTitle('naveenopencart').click();
        // we can find the locator using getByTitle() method if tag has title attribute. 
    }
    catch (error) {
        console.log('E:', error);
    }
    finally {
        // await page.close();
    }

})();