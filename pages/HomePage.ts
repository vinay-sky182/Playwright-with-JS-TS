import { Page, Locator } from "@playwright/test";
import { ElementUtil } from '../utils/ElementUtil'
import { LoginPage } from '../pages/LoginPage'
import { SearchResultsPage } from '../pages/SearchResultsPage'

export class HomePage {

    // martin follower: give the Page Object Model

    //1. page locators, elements
    private readonly page: Page;
    private readonly eleutil: ElementUtil;
    private readonly loginLink: Locator;
    private readonly logoutLink: Locator;
    private readonly search: Locator;
    private readonly searchBtn: Locator;

    //2. page class constructor
    constructor(page: Page) {
        this.page = page;
        this.eleutil = new ElementUtil(page);
        this.loginLink = page.getByRole('link', { name: 'Login' });
        this.logoutLink = page.getByRole('link', { name: 'Logout' });
        this.search = page.getByRole('textbox', { name: 'Search' });
        this.searchBtn = page.locator(`#search > span.input-group-btn > button.btn`);
    }

    //3. page actions/methods:

    /**
     * it will chech user is already loged in or not
     * @returns 
     */
    async isUserLogin(): Promise<boolean> {
        return await this.eleutil.isVisible(this.logoutLink, 0);
    }

    /**
     * it will click on logout link 
     */
    async logout(): Promise<LoginPage> {
        await this.eleutil.click(this.logoutLink, { timeout: 5000 }, 0);
        await this.eleutil.click(this.loginLink, { timeout: 5000 }, 1);
        return new LoginPage(this.page);

    }

    /**
     * it will serch the product and return the 'SearchResultsPage' class object
     * @param searchKey 
     * @returns 
     */
    async doSearch(searchKey: string): Promise<SearchResultsPage> {
        console.log(`search key : ${searchKey}`);
        await this.eleutil.fill(this.search, searchKey);
        await this.eleutil.click(this.searchBtn);
        return new SearchResultsPage(this.page);

    }

}