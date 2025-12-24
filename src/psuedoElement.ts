/* 
Psuedo elements:- it created with the use of psuedo classes ::before, ::after, these have no html tag, no attributes
*/

import { Browser, chromium, Page, Locator, FrameLocator } from "@playwright/test";

(async () => {

    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();

    try {
        await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

        // to access the psuedo elements in playwright we ned to use JavaScript code to access the properties of psuedo elements.

        // window.getComputedStyle(document.querySelector('label[for="input-firstname"]'), '::before').getPropertyValue('content');

        // we need to invoke JavaScript in Playwright to envoke this we uses 'evaluate' method || '!' to handle the nullable.

        let content = await page.evaluate(() => {
            return window.getComputedStyle(
                document.querySelector('label[for="input-firstname"]')!,
                '::before')
                .getPropertyValue('content');
        })

        console.log('content :', content)
        if (content.includes('*')) {
            console.log('first name is a mandatory field')
        }

        let color = await page.evaluate(() => {
            return window.getComputedStyle(
                document.querySelector('label[for="input-firstname"]')!,
                '::before')
                .getPropertyValue('color');
        })

        console.log('color :', color)

        // get the background color of a normal element

        let continueBtn = page.getByRole('button', { name: 'Continue' });

        let bgColor: string = await continueBtn.evaluate((ele) => {
            return getComputedStyle(ele).backgroundColor;
        });
        console.log('background color: ', bgColor);

        // get the text color of a normal element
        let textColor: string = await continueBtn.evaluate((ele) => {
            return getComputedStyle(ele).color;
        });
        console.log('Text color: ', textColor);

        // page.evaluate(()=> alert('Hello Automation'));
    }
    catch (error) {
        console.log('E:', error)
    }
    finally {
        // await page.close();
    }
})();