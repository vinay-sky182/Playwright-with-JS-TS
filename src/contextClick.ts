import { Browser, chromium, Page, expect, Locator } from "@playwright/test";

(async () => {

    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();

    try {
        await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');

        await page.locator('span.context-menu-one').click({ button: 'right' });

        let allOptions: string[] = await page.locator('ul.context-menu-list span').allInnerTexts();
        console.log(allOptions);
        await page.getByText('Copy', { exact: true }).click();
    }
    catch (error) {
        console.log('E:', error)
    }
    finally {
        // await page.close();
    }
})();