import { Browser, chromium, Locator, Page, selectors } from "@playwright/test";

(async () => {

    let browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });

    let page: Page = await browser.newPage();

    try {

        await page.goto("https://www.freshworks.com/");

        // h1 ---- to h6 : headers ---- heading

        // h1 -> Uncomplicate
        let header: string = await page.getByRole('heading', { name: 'Uncomplicate' }).innerText();
        console.log(header);

        // getByRole('heading', { name: 'Uncomplicate your IT and customer service' });
        // for <span> ,<div>, <p> tags ----> getByRole is not applicable, better to use page.locator(css/xpath), page.getByText()

        let secondHeader: string = await page.getByText('Freshworks provides').innerText();
        console.log(secondHeader);

        // h2 -> Uncomplicate: level 1- 6
        page.getByRole('heading', { name: 'Uncomplicate', level: 2 });

        // getByRole('Inplicit Role' {accesiblr name})


        await page.getByRole('textbox', { name: 'First Name' }).fill('Naveen'); // The name corresponds to the label-text of the textbox.
        await page.getByRole('textbox', { name: 'Last Name' }).fill('Automation');

    }
    catch (error) {
        console.log('E:', error);
    }
    finally {
        // await page.close();
    }

})();