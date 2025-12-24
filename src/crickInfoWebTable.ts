import { Browser, chromium, Page, expect, Locator } from "@playwright/test";

(async () => {

    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();

    try {
        await page.goto('https://www.espncricinfo.com/series/men-s-t20-asia-cup-2025-1496919/india-vs-pakistan-final-1496938/full-scorecard');

        let txt: string = await page.locator(`//a[@title ='Abhishek Sharma']/ancestor::td/following-sibling::td/span/span`).innerText();

        console.log(txt);

        // span[text()='India']/ancestor::div

        // page.locator(`//td[text()='John.Smith']/preceding-sibling::td/input[@type='checkbox']`).click(); table.ci-scorecard-table   

        // await selectUser(page, 'Joe.Root');
        // await selectUser(page, 'John.Smith');
        // await selectUserWithCss(page, 'Garry.White');

        // // get all the column data values:
        // let userData: string[] = await page.locator(`//td[text()='John.Smith']/following-sibling::td`).allInnerTexts();
        // console.log(userData);

        // let joeData = await getUserData(page, 'Joe.Root');
        // console.log(joeData);

    }
    catch (error) {
        console.log('E:', error)
    }
    finally {
        // await page.close();
    }
})();