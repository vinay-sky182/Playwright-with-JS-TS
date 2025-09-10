/* 
.spec ---- for testcases 
with test runner (aproach)
*/

import { test, expect } from '@playwright/test';

test('check page title', async ({ page }) => {
    await page.goto('https://www.google.com/');
    let title: string = await page.title();
    console.log("Title of the page is: " + title);
    expect(title).toBe("Google");

});

test('check page url', async ({ page }) => {
    await page.goto('https://www.google.com/');
    let url: string = page.url();
    console.log("URL of the page is: " + url);
    expect(url).toBe("https://www.google.com/");
});

test('check page logo', async ({ page }) => {
    await page.goto('https://www.google.com/');
    expect(await page.locator("//*[name()='path' and contains(@d,'M115.75 47')]").count()).toBe(1);

    /*     let logo = page.locator("//img[@alt='Google']");
        await expect(logo).toBeVisible();
        await expect(logo).toHaveAttribute("alt", "Google");  0 */
});