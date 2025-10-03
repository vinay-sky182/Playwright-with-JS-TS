import { Browser, chromium, Page, expect, Locator } from "@playwright/test";

(async () => {

    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();

    try {
        await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

        let headingOne: string = await page.getByRole('heading', { name: 'Register Account' }).innerText();
        console.log('Heading of the Page:', headingOne);

        /*  Directly targeting <legend> with getByRole('legend') will not work, because 'legend' is not a valid ARIA role.
            However, we can target the parent <fieldset> with getByRole('group'), and then use .getByText() or .locator('legend') to reach the <legend>.
        */
        let formHeading: string = await page.getByRole('group').locator('legend').nth(0).innerText();
        console.log('Heading of the Form:', formHeading);

        await page.getByRole('textbox', { name: 'First Name' }).fill('Vishal');
        await page.getByRole('textbox', { name: 'Last Name' }).fill('Gupta');
        await page.getByRole('textbox', { name: 'E-Mail' }).fill('vinay.sky182@gmail.com');
        await page.getByRole('textbox', { name: 'Telephone' }).fill('9219253743');
        // await page.getByRole('textbox', { name: 'Password', exact: true }).fill('Vi@12345');
        // await page.getByRole('textbox', { name: 'Password Confirm', exact: true }).fill('Vi@12345');
        await page.locator('#input-password').fill('Vi@12345');
        await page.locator('#input-confirm').fill('Vi@12345');
        await page.getByRole('radio', { name: 'No' }).click();
        await page.locator(`input[name='agree'][type='checkbox']`).click();
        // await page.getByRole('checkbox', { name: 'agree' }).highlight();
        await page.getByRole('button', { name: 'Continue' }).click();

        let confirmationHeading: Locator = page.getByRole('heading', { name: 'Your Account Has' });
        await expect(confirmationHeading).toBeVisible();
        await expect(confirmationHeading).toHaveText('Your Account Has Been Created!');

        console.log('Test has been passed successfully!');
    }
    catch (error) {
        console.log('E:', error)
    }
    finally {

    }
})();