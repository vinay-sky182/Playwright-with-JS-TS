import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage'
import { HomePage } from '../pages/HomePage';
import { SearchResultsPage } from '../pages/SearchResultsPage';

/**
 * data provider for product search key and result count
 */
let searchData = [
    { searchKey: 'macbook', productCount: 3 },
    { searchKey: 'samsung', productCount: 2 },
    { searchKey: 'nikon', productCount: 1 },
    { searchKey: 'imac', productCount: 1 },
    { searchKey: 'dummy', productCount: 0 },
];

for (let product of searchData) {

    test(`verify product search ${product.searchKey}`, async ({ page }) => {
        let loginPage = new LoginPage(page); // Arange
        await loginPage.goToLoginPage(); // Action 1
        let homePage: HomePage = await loginPage.performLogin('pwtest@nal.com', 'test123'); // Action 2
        let resultsPage: SearchResultsPage = await homePage.doSearch(product.searchKey); // Action 3
        expect(await resultsPage.getSearchResultsCount()).toBe(product.productCount); // Assert
    });
}

