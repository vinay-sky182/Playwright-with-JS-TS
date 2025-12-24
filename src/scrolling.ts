import { Browser, chromium, Page } from "@playwright/test";

(async () => {

    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();

    try {
        await page.goto('https://www.orangehrm.com/en/contact-sales/', { waitUntil: 'load' });

        // Playwright supports auto scrolling if it is not working then we can use these methods.

        await page.locator('#CybotCookiebotDialogBodyButtonDecline').click();

        /*
            // 1. scrollIntoViewIfNeeded (if element is not visible within the screen frame the it scroll to reach the element)
            await page.locator(`//a[contains(text(), 'Careers')]`).nth(2).scrollIntoViewIfNeeded();
            await page.locator(`//a[contains(text(), 'Careers')]`).nth(2).click(); 
        */

        // 2. scroll down 1000 pixels: 
        await page.evaluate(() => window.scrollBy(0, 1000));
        await page.waitForTimeout(3000);
        await page.evaluate(() => window.scrollBy(0, 2000));

        // 3. scroll down to the bottom of the page:
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
        await page.waitForTimeout(2000);

        // 4. scroll up to the top of the page:
        await page.evaluate(() => window.scrollTo(0, 0))
        await page.waitForTimeout(2000);

        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

        // CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll
    }
    catch (error) {
        console.log('E:', error)
    }
    finally {
        // await page.close();
    }
})();