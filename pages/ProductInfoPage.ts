import { Page, Locator } from "@playwright/test";
import { ElementUtil } from '../utils/ElementUtil'


export class ProductInfoPage {

    // martin follower: give the Page Object Model

    //1. page locators, elements
    private readonly page: Page;
    private readonly eleutil: ElementUtil;
    private readonly productHeading: Locator;
    private readonly productImageCount: Locator;
    private readonly productMetaData: Locator;  // div.col-sm-4 > h1 + ul >li
    private readonly productPriceData: Locator;

    private readonly productAttributes = new Map<string, string | number | null>();


    //2. page class constructor
    constructor(page: Page) {
        this.page = page;
        this.eleutil = new ElementUtil(page);
        this.productHeading = page.locator('h1');
        this.productImageCount = page.locator('div#content img');
        this.productMetaData = page.locator('div#content .col-sm-4 ul.list-unstyled:nth-of-type(1)>li');
        this.productPriceData = page.locator('div#content .col-sm-4 ul.list-unstyled:nth-of-type(2)>li');
    }

    //3. page actions/methods:

    /**
     * it will give the product heading
     * @returns product heading
     */
    async getProductHeading(): Promise<string> {
        const heading = await this.eleutil.getInnerText(this.productHeading);
        console.log('product heading :' + heading);
        return heading.trim();
    }

    /**
     * it will return the count of product images
     * @returns the count of product images
     */
    async getProductImgesCount(): Promise<number> {
        await this.eleutil.waitForElementVisible(this.productImageCount)
        const productImgCount = await this.productImageCount.count();
        console.log(`total number of images for ${await this.getProductHeading()} ==> ${productImgCount} `);
        return productImgCount;
    }

    /**
     * @returns it will return complete product info
     */
    async getProductDetails(): Promise<Map<string, string | number | null>> {
        this.productAttributes.set('Header', await this.getProductHeading());
        this.productAttributes.set('Imagecount', await this.getProductImgesCount());
        await this.getProductMetaData();
        await this.getProductPricingData();

        console.log(`Full product details for product: ${await this.getProductHeading()}`);
        await this.printProductDetails();
        return this.productAttributes;
    }

    /**
     * this is just for details printing purpose
     */
    private async printProductDetails() {
        for (const [key, value] of this.productAttributes) {
            console.log(`${key}: ${value}`);
        }
    }

    /**
     * Brand: Apple
       Product Code: Product 18
       Reward Points: 800
       Availability: Out Of Stock
     *  it will extracting the product meta data and storing into map 
     */
    private async getProductMetaData() {
        let productInfoData: string[] = await this.productMetaData.allInnerTexts();
        for (let meta of productInfoData) {
            let metaData: string[] = meta.split(':');
            let metaKey: string = metaData[0].trim();
            let metaValue: string = metaData[1].trim();
            this.productAttributes.set(metaKey, metaValue);
        }
    }


    /**
     * $2,000.00 ---- 0th
       Ex Tax: $2,000.00 ---- 1st
     * it will extracting the product price data and storing into map with user define 'keys'
     */
    private async getProductPricingData() {
        let productCostData: string[] = await this.productPriceData.allInnerTexts();
        let productCost: string = productCostData[0].trim();
        let productExTax: string = productCostData[1].split(':')[1].trim();
        this.productAttributes.set('Product price', productCost);
        this.productAttributes.set('Extaprice', productExTax);

    }

}