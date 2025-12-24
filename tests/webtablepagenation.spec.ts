import { test, expect, Page, Locator } from '@playwright/test';

test('web table pagination handling', async ({ page }) => {
    await page.goto('https://selectorshub.com/xpath-practice-page/');

    while (true) {
        let eleExists: Locator = page.locator(`//tbody[@class='row-striping row-hover']//td[contains(text(), 'Hong Kong')]/preceding-sibling::td/input[@type='checkbox']`);

        if (await eleExists.isVisible()) {
            console.log("Element is found");
            await eleExists.click();
            break;
        }
        else {
            // click on next button : pagenation logic
            let nextBtn: Locator = page.getByRole('link', { name: 'Next' });
            await nextBtn.click();
            await page.waitForTimeout(2000);

            console.log("Clicked on next button");

            if (await nextBtn.isDisabled()) {
                console.log("pagination is over....");
                break;
            }
        }
    }
    page.pause();
});


test('multi-selection in web table pagination handling', async ({ page }) => {

    await page.goto('https://selectorshub.com/xpath-practice-page/');

    while (true) {
        let eleExists: Locator[] = await page.locator(`//tbody[@class='row-striping row-hover']//td[contains(text(), 'India')]/preceding-sibling::td/input[@type='checkbox']`).all();

        if (eleExists.length > 0) {
            for (let e of eleExists) {
                if (await e.isVisible()) {
                    console.log("Element is found");
                    await e.click();
                }
                // break;
            }
        }
        // click on next button : pagenation logic
        let nextBtn: Locator = page.getByRole('link', { name: 'Next' });
        // await page.waitForTimeout(2000);

        console.log("Clicked on next button");

        if (await nextBtn.isDisabled()) {
            console.log("pagination is over....");
            break;
        }
        await nextBtn.click();
    }
    await page.pause();
});