import { Browser, chromium, Page, expect, Locator } from "@playwright/test";

(async () => {

    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();

    // add one listner at the page lavel. running in background - keep checking do we get any JS popup.
    // if any popup is coming -- dismiss is immediately

    page.on('dialog', async (dialog) => {
        console.log(dialog.message());
        await dialog.accept('Playwright Automation'); // accept the alert - click on OK || It will fill the value inside the prompt popup of textfield
        // await dialog.dismiss(); // dismiss the alert - click on cancel
        console.log(dialog.type());
        console.log('------------------------')
    })

    try {
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

        await page.getByText('Click for JS Alert').click();
        await page.getByText('Click for JS Confirm').click();
        await page.getByText('Click for JS Prompt').click();

    }
    catch (error) {
        console.log('E:', error)
    }
    finally {
        // await page.close();
    }
})();