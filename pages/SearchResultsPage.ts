import { Page, Locator } from "@playwright/test";
import { ElementUtil } from '../utils/ElementUtil'
import { LoginPage } from '../pages/LoginPage'

export class SearchResultsPage {

    // martin follower: give the Page Object Model

    //1. page locators, elements
    private readonly page: Page;
    private readonly eleutil: ElementUtil;
    private readonly productResults: Locator;


    //2. page class constructor
    constructor(page: Page) {
        this.page = page;
        this.eleutil = new ElementUtil(page);
        this.productResults = page.locator('.product-thumb');

    }

    //3. page actions/methods:

    /**
     * it will give the count of elements
     * @returns 
     */
    async getSearchResultsCount(): Promise<number> {
        return await this.productResults.count();
    }

}