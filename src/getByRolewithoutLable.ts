import { Browser, chromium, Locator, Page, selectors } from "@playwright/test";

(async () => {

    let browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });

    let page: Page = await browser.newPage();

    try {

        await page.goto("https://classic.freecrm.com/register/");

        // if the lable and aria-lable is not available we can use placeholder value as name
        await page.getByRole('textbox', { name: 'First Name' }).fill('Naveen');

        await page.getByRole('checkbox', { name: 'I agree with the' }).check(); // .check() work only when the checkbox is not checked already otherwise it will not give any error

        await page.waitForTimeout(3000);

        await page.getByRole('checkbox', { name: 'I agree with the' }).uncheck(); // .uncheck() work only when the checkbox is not unchecked already otherwise it will not give any error



    }
    catch (error) {
        console.log('E:', error);
    }
    finally {
        // await page.close();
    }

})();