import { Browser, chromium, Page, expect, Locator } from "@playwright/test";

(async () => {

    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();

    try {
        /*  await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
        
        const source: Locator = page.locator('#column-a');
        const destination: Locator = page.locator('#column-b');
        
        await source.dragTo(destination);
        await expect(destination).toContainText('A'); */

        await page.goto('https://jqueryui.com/resources/demos/droppable/default.html');

        const source: Locator = page.locator('#draggable');
        const target: Locator = page.locator('#droppable');

        await source.dragTo(target);
        await expect(target).toContainText('Dropped!');
    }
    catch (error) {
        console.log('E:', error)
    }
    finally {
        // await page.close();
    }
})();