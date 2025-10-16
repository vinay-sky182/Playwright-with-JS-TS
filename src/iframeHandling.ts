import { Browser, chromium, Page, expect, FrameLocator, Locator } from "@playwright/test";

(async () => {
    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();

    try {

        /*      await page.goto("https://www.formsite.com/templates/registration-form-templates/vehicle-registration-form/");
                await page.getByTitle("Vehicle-Registration-Forms-and-Examples").click();
        
                //tagname[starts-with(@attribute, 'prefix value')]
                let frameElement: FrameLocator = page.frameLocator(`iframe[id*='frame-one']`);
                await frameElement.locator('#RESULT_TextField-1').fill('TestAutomation');
        
                let header = await page.locator('h3.details__form-preview-title').innerText();
                console.log(header); */


        await page.goto("https://www.londonfreelance.org/courses/frames/index.html");

        let frameEle: FrameLocator = page.frameLocator(`[name='main]`);
        let headerText = await frameEle.locator('h2').innerText();
        console.log(headerText);

        // print total number of frames on the page.
        let allFrames: Locator[] = await page.locator(`//frame`).all();
        console.log("Total number of frames on page:" + allFrames.length);

        // print names and src of the frames:
        for (let frameElem of allFrames) {
            console.log(await frameElem.getAttribute('name'), ": ", await frameElem.getAttribute('src'));
        }
    }
    catch (error) {
        console.log('E:', error)
    }
    finally {
        // await page.close();
    }
})();