import { Browser, chromium, Locator, Page, selectors } from "@playwright/test";

(async () => {

    let browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });

    let page: Page = await browser.newPage();

    try {
        await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

        // let header: string | null = await page.getByText('Register Account', { exact: true }).textContent();
        // will give the text of element + any hidden text in the DOM

        // console.log(header);

        let header: string = await page.getByText('Register Account', { exact: true }).innerText(); // it will give only the visible text of element 
        console.log(header);

    }
    catch (error) {
        console.log('E:', error);
    }
    finally {
        // await page.close();
    }

})();