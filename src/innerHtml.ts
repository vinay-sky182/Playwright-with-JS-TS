import { Browser, chromium, Page, expect, Locator } from "@playwright/test";

(async () => {

    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();

    try {
        await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
        let headerHTML: string = await page.getByRole('heading', { name: 'Register Account' }).innerHTML();
        // <h1> Register Account </h1>

        /*  What innerHTML() returns:
           If the element has no child elements, it returns the text content.
           If the element has child elements, it returns the HTML string of all children (tags + text).
        */
        console.log(headerHTML);
    }
    catch (error) {
        console.log('E:', error)
    }
    finally {
        // await page.close();
    }
})();