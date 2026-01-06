import { Page, Locator } from "@playwright/test";
import { ElementUtil } from '../utils/ElementUtil'
import { ProductInfoPage } from '../pages/ProductInfoPage'

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

    /**
     * it will click on a specific product and land on ProductInfoPage
     * @param productName 
     * @returns 
     */
    async selectProduct(productName: string): Promise<ProductInfoPage> {
        console.log('-----product name:-----' + productName);
        await this.eleutil.click(this.page.getByRole('link', { name: 'productName' })); // here we have used daynamic locator hence we are using this here directly and not using through constructor
        return new ProductInfoPage(this.page);
    }

}