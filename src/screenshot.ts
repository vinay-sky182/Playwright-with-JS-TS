import { Browser, chromium, Locator, Page } from "@playwright/test";
import { randomInt } from "crypto";

(async () => {

    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();

    try {
        await page.goto("https://www.orangehrm.com/en/contact-sales/", { waitUntil: 'load' });

        await page.waitForTimeout(1000);

        await page.locator('#CybotCookiebotDialogBodyButtonDecline').click();

        // 1. page screenshot

        /*
            await page.screenshot({ path: getRandomScreenshotName() });
            await page.waitForTimeout(1000);
        
            await page.screenshot({ path: './screenshots/' + getRandomScreenshotName('_fullpage'), fullPage: true });
            await page.waitForTimeout(1000);
        
            await page.screenshot({
                path: './screenshots/' + getRandomScreenshotName('_clip'),
                clip: { x: 0, y: 0, width: 800, height: 600 }
            });
        */

        // 2. element screenshot:

        let logoEle: Locator = page.getByAltText('OrangeHRM Logo').first();
        await logoEle.screenshot({ path: getRandomScreenshotName('_element') });


    }
    catch (error) {
        console.log('E:', error)
    }
    finally {
        // await page.close();
    }
})();


function getRandomScreenshotName(suffix: string = ''): string {
    const random = randomInt(1, 1000); // Generates a random integer between 1 and 999
    return `screenshot_${random}${suffix}.png`;
}
