// for accesibility testing - tab sequence || keyboard navigation testing || keyboard keys action

import { Browser, chromium, Page, expect, Locator } from "@playwright/test";
import { randomInt } from "crypto";

(async () => {

    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();

    try {
        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

        await page.locator('#input-firstname').focus();
        await page.locator('#input-firstname').pressSequentially('Testing', { delay: 200 });
        await page.keyboard.press('Tab');

        await page.keyboard.type('Automation', { delay: 200 });
        await page.keyboard.press('Tab');

        await page.keyboard.type(getRandomEmail(), { delay: 200 });
        await page.keyboard.press('Tab');

        await page.keyboard.type('9090909090', { delay: 200 });
        await page.keyboard.press('Tab');

        await page.keyboard.type('Automation@123', { delay: 200 });
        await page.keyboard.press('Tab');

        await page.keyboard.type('Automation@123', { delay: 200 });
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');
        await page.keyboard.press('Space');
        await page.keyboard.press('Tab');

        await page.keyboard.press('Enter');


    }
    catch (error) {
        console.log('E:', error)
    }
    finally {
        // await page.close();
    }
})();

// genrate random email for every registration

function getRandomEmail(): string {

    // crypto.randomInt(100, 1000) returns an integer in [100, 999]
    const rand3 = randomInt(100, 1000);
    return `opencart${rand3}@mail.com`;

    // return `opencart` + Date.now().toString() + `@mail.com`;
}
