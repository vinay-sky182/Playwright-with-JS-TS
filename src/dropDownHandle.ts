import { Browser, chromium, Page, expect } from "@playwright/test";

(async () => {

    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();

    try {
        await page.goto("https://naveenautomationlabs.com/opencart/ui/dropdowns.html");
        /*      await page.locator(`//div[@class='select-trigger']//span[text()='Choose your preferred programming language']`).click();
                //div[@class ='options show']
                await page.getByText('JavaScript', { exact: true }).click();
        
                await page.locator(`//div[@class='select-trigger']//span[text()='Choose your preferred web framework']`).click();
                await page.getByText('Express.js', { exact: true }).click();
        
                await page.locator(`//div[@class='select-trigger']//span[text()='Select your database preference']`).click();
                await page.getByText('MongoDB', { exact: true }).click();
        
                await page.locator(`//div[@class='select-trigger']//span[text()='Select deployment platform']`).click();
                await page.getByText('Google Cloud Platform', { exact: true }).click();
        
                await page.locator(`//div[@class='select-trigger']//span[text()='Choose your code editor/IDE']`).click();
                await page.getByText('Visual Studio Code', { exact: true }).click();
        
                await page.locator(`//div[@class='select-trigger']//span[text()='Select your experience level']`).click();
                await page.getByText('Mid-level (4-6 years)', { exact: true }).click(); */

        await selectValue(page, 'Choose your preferred programming language', 'JavaScript')
        await selectValue(page, 'Choose your preferred web framework', 'Express.js')
        await selectValue(page, 'Select your experience level', 'Mid-level (4-6 years)')
    }
    catch (error) {
        console.log('E:', error)
    }
    finally {
        // await page.close();
    }
})();

async function selectValue(page: Page, dropdownLabel: string, value: string) {
    await page.locator(`//div[@class='select-trigger']//span[text()='${dropdownLabel}']`).click();
    await page.getByText(`${value}`, { exact: true }).click();
}