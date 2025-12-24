import { Browser, chromium, Page, expect, Locator } from "@playwright/test";

(async () => {

    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();

    try {
        await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable.html');

        // page.locator(`//td[text()='Joe.Root']/preceding-sibling::td/input[@type='checkbox']`).click();
        // page.locator(`//td[text()='John.Smith']/preceding-sibling::td/input[@type='checkbox']`).click();

        await selectUser(page, 'Joe.Root');
        await selectUser(page, 'John.Smith');
        await selectUserWithCss(page, 'Garry.White');

        // get all the column data values:
        let userData: string[] = await page.locator(`//td[text()='John.Smith']/following-sibling::td`).allInnerTexts();
        console.log(userData);

        let joeData = await getUserData(page, 'Joe.Root');
        console.log(joeData);

    }
    catch (error) {
        console.log('E:', error)
    }
    finally {
        // await page.close();
    }
})();

async function selectUser(page: Page, userName: string): Promise<void> {
    await page.locator(`//td[text()='${userName}']/preceding-sibling::td/input[@type='checkbox']`).click();
}

async function selectUserWithCss(page: Page, userName: string): Promise<void> {
    await page.locator(`tr:has(td:text('${userName}'))`).locator('td').first().click();
}

/**
 * this method returns the user data from other columns for the given user name
 * @param page 
 * @param userName 
 * @returns 
 */
async function getUserData(page: Page, userName: string): Promise<string[]> {
    return await page.locator(`//td[text()='${userName}']/following-sibling::td`).allInnerTexts();
}