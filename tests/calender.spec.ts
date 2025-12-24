import { test, expect, Page, Locator } from '@playwright/test';

test('single selection in calender', async ({ page }) => {
    await page.goto('https://seleniumpractise.blogspot.com/2016/08/how-to-handle-calendar-in-selenium.html');

    await page.locator('#datepicker').click();

    let currentMonth_Year = await page.locator('.ui-datepicker-title').textContent();

    let targetMonth_Year = 'April 2026';

    while (true) {
        // here we are removing the spaces (special character) from the string using regex because trim() is not removing the special character
        if (currentMonth_Year?.replace(/\s+/g, '') === targetMonth_Year) {
            await page.getByText('16', { exact: true }).click();
            break;
        }
        await page.locator(`span:has-text("Next")`).click();
        currentMonth_Year = await page.locator('.ui-datepicker-title').textContent();
        console.log(currentMonth_Year);

    }

});