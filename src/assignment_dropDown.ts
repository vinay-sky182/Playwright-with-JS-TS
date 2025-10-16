import { Browser, chromium, Page, expect } from "@playwright/test";

(async () => {
    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();

    try {
        await page.goto("https://react-select.com/home");

        // await page.locator(`//input[@id='react-select-3-input']`).click();
        // await page.getByText('Silver', { exact: true }).click();

        // await page.locator(`//input[@id='react-select-4-input']`).click();
        // await page.getByText('Forest', { exact: true }).click();

        await selectValue(page, 'react-select-3-input', 'Slate')
        await selectValue(page, 'react-select-4-input', 'Forest')

    }
    catch (error) {
        console.log('E:', error)
    }
    finally {
        // await page.close();
    }
})();

async function selectValue(page: Page, inputId: string, value: string) {
    await page.locator(`//input[@id='${inputId}']`).click();
    await page.getByText(`${value}`, { exact: true }).click();
}