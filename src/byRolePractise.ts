import { Browser, chromium, Locator, Page, selectors } from "@playwright/test";

(async () => {

    let browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });

    let page: Page = await browser.newPage();

    try {

        await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

        await page.getByRole('textbox', { name: 'First Name' }).fill('Naveen'); // The name corresponds to the label-text of the textbox.
        await page.getByRole('textbox', { name: 'Last Name' }).fill('Automation');

        // every txtBox and txtAria should have a <lable> tag or aria-lable attribute (it is an attribut which is provided for accesbility testing)

        await page.getByRole('checkbox').click();
        // await page.getByRole('button', { name: 'Continue' }).click();
        // await page.getByRole('radio', { name: 'Yes' }).click();  // avoid it because there is no label name

        await page.locator(`input[name='agree']`).click();

        // link
        // await page.getByRole('link', {name: 'Forgoten Password'}).click();

        // h1 ---- to h6 : headers ---- heading
        let header: string = await page.getByRole('heading', { name: 'Register Account' }).innerText();

        /* We can use either textContent() or innerText() to retrieve the text, both of which work like getText() in Selenium. The innerText() method returns a string, while textContent() can return either a string or null. */
        console.log(header);


    }
    catch (error) {
        console.log('E:', error);
    }
    finally {
        // await page.close();
    }

})();