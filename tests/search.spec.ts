import { test, expect } from '../fixtures/baseFixtures'
import { SearchResultsPage } from '../pages/SearchResultsPage';

/**
 * data provider for product search key and result count
 */
let searchData = [
    { searchkey: 'macbook', productcount: 3 },
    { searchkey: 'samsung', productcount: 2 },
    { searchkey: 'nikon', productcount: 1 },
    { searchkey: 'imac', productcount: 1 },
    { searchkey: 'dummy', productcount: 0 },
];

for (let product of searchData) {

    test(`verify product search ${product.searchkey}`, async ({ homePage }) => {
        let resultsPage: SearchResultsPage = await homePage.doSearch(product.searchkey); // Action 1
        expect(await resultsPage.getSearchResultsCount()).toBe(product.productcount); // Assert
    });
}






// import { test, expect } from '@playwright/test';
// import { LoginPage } from '../pages/LoginPage'
// import { HomePage } from '../pages/HomePage';
// import { SearchResultsPage } from '../pages/SearchResultsPage';

// /**
//  * data provider for product search key and result count
//  */
// let searchData = [
//     { searchkey: 'macbook', productcount: 3 },
//     { searchkey: 'samsung', productcount: 2 },
//     { searchkey: 'nikon', productcount: 1 },
//     { searchkey: 'imac', productcount: 1 },
//     { searchkey: 'dummy', productcount: 0 },
// ];

// for (let product of searchData) {

//     test(`verify product search ${product.searchkey}`, async ({ page }) => {
//         let loginPage = new LoginPage(page); // Arange
//         await loginPage.goToLoginPage(); // Action 1
//         let homePage: HomePage = await loginPage.performLogin('pwtest@nal.com', 'test123'); // Action 2
//         let resultsPage: SearchResultsPage = await homePage.doSearch(product.searchkey); // Action 3
//         expect(await resultsPage.getSearchResultsCount()).toBe(product.productcount); // Assert
//     });
// }

