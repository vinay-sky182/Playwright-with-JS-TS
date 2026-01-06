import { Page, Locator } from "@playwright/test";
import { ElementUtil } from '../utils/ElementUtil'


export class ProductInfoPage {

    // martin follower: give the Page Object Model

    //1. page locators, elements
    private readonly page: Page;
    private readonly eleutil: ElementUtil;
    private readonly productHeading: Locator;
    private readonly productImageCount: Locator;


    //2. page class constructor
    constructor(page: Page) {
        this.page = page;
        this.eleutil = new ElementUtil(page);
        this.productHeading = page.locator('h1');
        this.productImageCount = page.locator('div#content img');

    }

    //3. page actions/methods:

    /**
     * it will give the product heading
     * @returns 
     */
    async getProductHeading(): Promise<string> {
        const heading = await this.eleutil.getInnerText(this.productHeading);
        console.log('product heading :' + heading);
        return heading.trim();
    }

    /**
     * it will return the count of product images
     * @param productName 
     * @returns 
     */
    async getProductImgesCount(productName: string): Promise<number> {
        await this.eleutil.waitForElementVisible(this.productImageCount)
        const productImgCount = await this.productImageCount.count();
        console.log(`total number of images for ${this.getProductHeading} ==> ${productImgCount} `);
        return productImgCount;
    }

}