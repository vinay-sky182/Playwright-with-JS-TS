import { Browser, chromium, Locator, Page } from "@playwright/test";

(async () => {

    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();

    // create event listner for accept/deny cookies
    // backgroung listner
    page.on('framenavigated', async () => {
        let denyCookiesBtn = page.locator('#CybotCookiebotDialogBodyButtonDecline');
        if (await denyCookiesBtn.isVisible()) {
            await denyCookiesBtn.click();
        }
    });

    try {
        await page.goto("https://www.orangehrm.com/en/contact-sales/", { waitUntil: 'load' });

        await page.waitForTimeout(1000);

        // check this html attribute 'target' = _blank ----> for new tab/window

        let [newTab] = await Promise.all([
            // parrelal mode execution not in sequential mode
            page.waitForEvent('popup'),
            page.locator(`//a[contains(@href, 'linkedin')]`).click()
        ]);

        await page.waitForTimeout(2000);
        console.log(await newTab.title())
        console.log(newTab.url());

        // close the tab/child_window
        await newTab.close();
        await page.waitForTimeout(2000);

        await page.bringToFront(); // it is safer to use this method to switch from child to parent
        console.log('parent window title: ' + await page.title());
    }
    catch (error) {
        console.log('E:', error)
    }
    finally {
        // await page.close();
    }
})();

