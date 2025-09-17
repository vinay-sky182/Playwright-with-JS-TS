import { Browser, chromium, Locator, Page, expect } from "@playwright/test";

(async () => {
    let browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });

    let page: Page = await browser.newPage();

    try {
        /* await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
        
        // find the element using locator (css)
        await page.locator('#input-email').fill('march2024@open.com');
        await page.locator('#input-password').fill('Selenium@12345');
        await page.locator(`input[value='Login']`).click();
        
        // 6 elements are present with the text 'My Account' on the page
        
        // let header: string | null = await page.getByText('My Account').nth(3).textContent(); 
        
        // getByText is a locator method to find the element using text.
        // textContent() is a method to get the text of the element. It is just like getText() in selenium.
        // nth(3) is used to get the 4th element from the list of elements. It is zero based index. 
        
        let header: string | null = await page.locator(`//h2[text()='My Account']`).textContent();
        
        console.log('Header:', header); */

        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

        await page.getByPlaceholder('First Name').fill('Vinay');
    }
    catch (error) {
        console.log('E:', error);
    }
    finally {
        await page.close();
    }
})();