import { Browser, chromium, Page, expect, Locator } from "@playwright/test";

(async () => {

    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();

    try {
        await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

        // allInnerTexts(): it will return the array of string which will hold the inner text of all matching elements
        let rightPanleLinks: string[] = await page.locator('a.list-group-item').allInnerTexts();
        console.log('count of all right panel links:', rightPanleLinks.length); //13
        console.log(rightPanleLinks);

        for (let e of rightPanleLinks) {
            console.log(e);
            if (e === 'Forgotten Password') {
                await page.getByText(e).first().click();
                break;
            }
        }
        console.log("------------------------------------------------");

        for (let i = 0; i < rightPanleLinks.length; i++) {
            console.log(rightPanleLinks[i]);
        }

        // capture all the footer links:

        // all(): it will return the array of locators
        let footerLinks: Locator[] = await page.locator('footer a').all();
        console.log('count of all footer links:', footerLinks.length);

        let allFooterLinkTxt = [];
        for (let e of footerLinks) {
            console.log(await e.innerText());
            // console.log(await e.getAttribute('href));
            let linkTxt: string = await e.innerText();
            allFooterLinkTxt.push(linkTxt);
        }

        console.log('Footer link length', allFooterLinkTxt.length);
        console.log(allFooterLinkTxt);
    }
    catch (error) {
        console.log('E:', error)
    }
    finally {
        // await page.close();
    }
})();