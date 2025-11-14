import { Browser, chromium, Page, expect, Locator, BrowserContext, FrameLocator } from "@playwright/test";

(async () => {

    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();

    try {
        await page.goto('http://petdiseasealerts.org/forecast-map#/', { waitUntil: 'load' });

        // handling svg element using xpath we need to use 'name()' or 'local-name()' with the prefix of * normal xpath will not work
        // syntax: //*[name()='svg'] //*[name()='svg']//*[name()='g' and @id='regions']/*[name()='g']

        await page.waitForTimeout(3000);

        let frameEle: FrameLocator = page.frameLocator(`iframe[id*='map-instance']`);

        let allStates: Locator[] = await frameEle.locator(`//*[name()='svg']//*[name()='g' and @id='regions']/*[name()='g']`).all();
        console.log('Total number of states: ' + allStates.length);

        // print the name(id) of the states

        for (let e of allStates) {
            let stateName = await e.getAttribute('id');
            console.log(stateName)
        }

        console.log("-------------------------------------------------------------------------");
        // Display the names of the states when the mouse hovers over each one.
        for (let e of allStates) {
            // await e.hover(); to traverse the mouse on each state this aproach will not work it will lost and not perform the exact task
            let box = await e.boundingBox();
            if (box) {
                page.mouse.move(box.x + box.width / 2, box.y + box.height / 2); // it will gitve the center of the bounding box of the element
                await page.waitForTimeout(500);
            }
            let stateName = await e.getAttribute('id');
            console.log(stateName);
            await page.waitForTimeout(100);
        }
        // Playwright moves the mouse within the bounding box of the element to perform actions like hover, while Selenium navigates to the center of that element.

    }
    catch (error) {
        console.log('E:', error)
    }
    finally {
        // await page.close();
    }
})();