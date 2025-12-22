import { Browser, chromium, Page, expect, Locator } from "@playwright/test";

(async () => {

    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();

    try {

        // Usecase 1:
        /*      await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
        
                // get all the footers ---- 16
                // out of 16, capture that footer link where text = Privacy Policy
        
                let footerEle: Locator = page.locator('footer a');
                footerEle.filter({ hasText: 'Privacy Policy', visible: true }).click(); */

        // Usecase 2: Search sceanrios

        // await page.goto("https://www.google.co.in/");
        // await page.locator(`[name='q']`).fill('selenium testing');
        // await page.locator(`ul[role= 'listbox']>li div[role='option']`).filter({ hasText: 'websites' }).click();

        // Usecase 2: Search sceanrios on e-commerce

        await page.goto("https://www.flipkart.com/");
        await page.getByPlaceholder('Search for Products, Brands and More').fill('macbook');
        await page.locator(`a[class='olebil']`).filter({ hasText: 'pro m4' }).click();

    }
    catch (error) {
        console.log('E:', error)
    }
    finally {
        // await page.close();
    }
})();