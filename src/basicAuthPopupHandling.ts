import { Browser, chromium, Page, expect, Locator, BrowserContext } from "@playwright/test";

(async () => {

    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });

    // creating a context from browser
    let context: BrowserContext = await browser.newContext({
        httpCredentials: {
            username: 'admin',
            password: 'admin'
        }
    })

    // creating a page using the context

    let page: Page = await context.newPage();

    try {
        // 1st way: but if passsword have @ in it then this will not work.

        // let username = 'admin';
        // let password = 'admin';
        // await page.goto(`https://${username}:${password}@the-internet.herokuapp.com/basic_auth`);

        // 2nd way: using browser context
        await page.goto(`https://the-internet.herokuapp.com/basic_auth`);

    }
    catch (error) {
        console.log('E:', error)
    }
    finally {
        // await page.close();
    }
})();