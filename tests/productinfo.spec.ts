import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage'
import { HomePage } from '../pages/HomePage';
import { SearchResultsPage } from '../pages/SearchResultsPage';
import { ProductInfoPage } from '../pages/ProductInfoPage';

/**
 * data provider for product search key and result count
 */
let search = [
    { searchkey: 'macbook', productname: 'MacBook Pro', imagecount: 4 },
    { searchkey: 'samsung', productname: 'Samsung Galaxy Tab 10.1', imagecount: 7 },
    { searchkey: 'macbook', productname: 'MacBook Air', imagecount: 4 },
];

for (let product of search) {

    test(`verify product header ${product.productname}`, async ({ page }) => {
        let loginPage = new LoginPage(page); // Arange
        await loginPage.goToLoginPage(); // Action 1
        let homePage: HomePage = await loginPage.performLogin('pwtest@nal.com', 'test123'); // Action 2
        let resultsPage: SearchResultsPage = await homePage.doSearch(product.searchkey); // Action 3
        let productInfoPage: ProductInfoPage = await resultsPage.selectProduct(product.productname);
        expect(await productInfoPage.getProductHeading()).toBe(product.productname); // Assert
    });
}

for (let product of search) {

    test(`verify product images ${product.productname} : ${product.imagecount}`, async ({ page }) => {
        let loginPage = new LoginPage(page); // Arange
        await loginPage.goToLoginPage(); // Action 1
        let homePage: HomePage = await loginPage.performLogin('pwtest@nal.com', 'test123'); // Action 2
        let resultsPage: SearchResultsPage = await homePage.doSearch(product.searchkey); // Action 3
        let productInfoPage: ProductInfoPage = await resultsPage.selectProduct(product.productname);
        expect(await productInfoPage.getProductImgesCount(product.productname)).toBe(product.imagecount); // Assert
    });
}

