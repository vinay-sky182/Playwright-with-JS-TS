import { Page, Locator } from "@playwright/test";
import { ElementUtil } from '../utils/ElementUtil'

export class LoginPage {

    //1. page locators, elements
    private readonly page: Page;
    private readonly eleutil;
    private readonly emailId: Locator;
    private readonly password: Locator;
    private readonly loginBtn: Locator;
    private readonly warningMsg: Locator;

    //2. page class constructor
    constructor(page: Page) {
        this.page = page;
        this.eleutil = new ElementUtil(page);
        this.emailId = page.getByRole('textbox', { name: 'E-Mail Address' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.loginBtn = page.locator(`input[type='submit'][value='Login']`);
        this.warningMsg = page.locator('.alert.alert-danger.alert-dismissible');
    }

    //3. page actions/methods:

    /**
     * navigate to login page
     */
    async goToLoginPage() {
        await this.page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    }

    /**
     * login to app using username/password 
     * @param email 
     * @param password 
     * @returns 
     */
    async performLogin(email: string, password: string): Promise<string> {

        // without use of utility
        /*         await this.emailId.fill(email);
                await this.password.fill(password);
                await this.loginBtn.click(); */

        // using utility methods
        await this.eleutil.fill(this.emailId, email);
        await this.eleutil.fill(this.password, password);
        await this.eleutil.click(this.loginBtn, { force: true, timeout: 5000 });
        const pageTitle = await this.page.title();
        console.log(`Home Page Title: ${pageTitle}`);
        return pageTitle;
    }

    /**
     * get the warning message in case of invalid login
     * @returns 
     */
    async getInvalidLoginMessage(): Promise<string | null> {
        const errorMessage = await this.eleutil.getText(this.warningMsg);
        console.log('invalid login warning message: ' + errorMessage);
        return errorMessage;
    }
}