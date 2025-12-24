import { Browser, chromium, Page, expect, Locator } from "@playwright/test";

(async () => {

    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();

    try {
        await page.goto('https://www.facebook.com/r.php?entry_point=login');

        let day: Locator = page.locator(`#day`);
        let month: Locator = page.locator(`#month`);
        let year: Locator = page.locator(`#year`);

        // select by value (value attribute): 2nd way
        /*      day.selectOption('14');
                month.selectOption('2');
                year.selectOption('1994');
        
                await page.waitForTimeout(3000);
        
                // select by label (visible text): 1st way
                day.selectOption({ label: '15' });
                month.selectOption({ label: 'Jan' });
                year.selectOption({ label: '1992' });
        
                await page.waitForTimeout(3000);
        
                // select by index: 3rd way
                day.selectOption({ index: 2 });
                month.selectOption({ index: 5 });
                year.selectOption({ index: 10 }); */

        await selectDropDownByValue(day, '10');
        await selectDropDownByValue(month, '6');
        await selectDropDownByValue(year, '2000');

        await page.waitForTimeout(3000);

        await selectDropDownByLabel(day, '12');
        await selectDropDownByLabel(month, 'Aug');
        await selectDropDownByLabel(year, '2005');

        await page.waitForTimeout(3000);

        await selectDropDownByIndex(day, 5);
        await selectDropDownByIndex(month, 8);
        await selectDropDownByIndex(year, 15);

    }
    catch (error) {
        console.log('E:', error)
    }
    finally {
        // await page.close();
    }
})();

async function selectDropDownByValue(element: Locator, value: string): Promise<void> {
    await element.selectOption(value);
    await expect(element).toHaveValue(value);
    // toHaveValue() only works with value attribute
}

async function selectDropDownByLabel(element: Locator, labelvalue: string): Promise<void> {
    await element.selectOption({ label: labelvalue });
    let selectedValue = await element.inputValue();
    await expect(element).toHaveValue(selectedValue);
}

async function selectDropDownByIndex(element: Locator, indexvalue: number): Promise<void> {
    await element.selectOption({ index: indexvalue });
    let selectedIndexValue = await element.inputValue();
    await expect(element).toHaveValue(selectedIndexValue);
}