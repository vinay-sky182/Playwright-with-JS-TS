import { test, expect } from '../fixtures/baseFixtures'
import { LoginPage } from '../pages/LoginPage'
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

    test(`verify product header ${product.productname}`, async ({ homePage }) => {

        let resultsPage: SearchResultsPage = await homePage.doSearch(product.searchkey); // Action 1
        let productInfoPage: ProductInfoPage = await resultsPage.selectProduct(product.productname);
        expect(await productInfoPage.getProductHeading()).toBe(product.productname); // Assert
    });
}

for (let product of search) {

    test(`verify product images ${product.productname} : ${product.imagecount}`, async ({ homePage }) => {

        let resultsPage: SearchResultsPage = await homePage.doSearch(product.searchkey); // Action 3
        let productInfoPage: ProductInfoPage = await resultsPage.selectProduct(product.productname);
        expect(await productInfoPage.getProductImgesCount()).toBe(product.imagecount); // Assert
    });
}

test(`verify product attributes`, async ({ homePage }) => {

    let resultsPage: SearchResultsPage = await homePage.doSearch('macbook'); // Action 3
    let productInfoPage: ProductInfoPage = await resultsPage.selectProduct('MacBook Pro');

    let actualProductFullDetails = await productInfoPage.getProductDetails();

    expect.soft(actualProductFullDetails.get('Header')).toBe('MacBook Pro'); // Assert
    expect.soft(actualProductFullDetails.get('Brand')).toBe('Apple'); // Assert
    expect.soft(actualProductFullDetails.get('Product Code')).toBe('Product 18'); // Assert
    expect.soft(actualProductFullDetails.get('Reward Points')).toBe('800'); // Assert
    expect.soft(actualProductFullDetails.get('Availability')).toBe('Out Of Stock'); // Assert

});

test(`verify product price attributes`, async ({ homePage }) => {

    let resultsPage: SearchResultsPage = await homePage.doSearch('macbook'); // Action 3
    let productInfoPage: ProductInfoPage = await resultsPage.selectProduct('MacBook Pro');

    let actualProductFullDetails = await productInfoPage.getProductDetails();

    expect.soft(actualProductFullDetails.get('Header')).toBe('MacBook Pro'); // Assert
    expect.soft(actualProductFullDetails.get('Product price')).toBe('$2,000.00'); // Assert
    expect.soft(actualProductFullDetails.get('Extaprice')).toBe('$2,000.00'); // Assert
});






// import { test, expect } from '@playwright/test';
// import { LoginPage } from '../pages/LoginPage'
// import { HomePage } from '../pages/HomePage';
// import { SearchResultsPage } from '../pages/SearchResultsPage';
// import { ProductInfoPage } from '../pages/ProductInfoPage';

// /**
//  * data provider for product search key and result count
//  */
// let search = [
//     { searchkey: 'macbook', productname: 'MacBook Pro', imagecount: 4 },
//     { searchkey: 'samsung', productname: 'Samsung Galaxy Tab 10.1', imagecount: 7 },
//     { searchkey: 'macbook', productname: 'MacBook Air', imagecount: 4 },
// ];

// for (let product of search) {

//     test(`verify product header ${product.productname}`, async ({ page }) => {
//         let loginPage = new LoginPage(page); // Arange
//         await loginPage.goToLoginPage(); // Action 1
//         let homePage: HomePage = await loginPage.performLogin('pwtest@nal.com', 'test123'); // Action 2
//         let resultsPage: SearchResultsPage = await homePage.doSearch(product.searchkey); // Action 3
//         let productInfoPage: ProductInfoPage = await resultsPage.selectProduct(product.productname);
//         expect(await productInfoPage.getProductHeading()).toBe(product.productname); // Assert
//     });
// }

// for (let product of search) {

//     test(`verify product images ${product.productname} : ${product.imagecount}`, async ({ page }) => {
//         let loginPage = new LoginPage(page); // Arange
//         await loginPage.goToLoginPage(); // Action 1
//         let homePage: HomePage = await loginPage.performLogin('pwtest@nal.com', 'test123'); // Action 2
//         let resultsPage: SearchResultsPage = await homePage.doSearch(product.searchkey); // Action 3
//         let productInfoPage: ProductInfoPage = await resultsPage.selectProduct(product.productname);
//         expect(await productInfoPage.getProductImgesCount()).toBe(product.imagecount); // Assert
//     });
// }

// test(`verify product attributes`, async ({ page }) => {
//     let loginPage = new LoginPage(page); // Arange
//     await loginPage.goToLoginPage(); // Action 1
//     let homePage: HomePage = await loginPage.performLogin('pwtest@nal.com', 'test123'); // Action 2
//     let resultsPage: SearchResultsPage = await homePage.doSearch('macbook'); // Action 3
//     let productInfoPage: ProductInfoPage = await resultsPage.selectProduct('MacBook Pro');

//     let actualProductFullDetails = await productInfoPage.getProductDetails();

//     expect.soft(actualProductFullDetails.get('Header')).toBe('MacBook Pro'); // Assert
//     expect.soft(actualProductFullDetails.get('Brand')).toBe('Apple'); // Assert
//     expect.soft(actualProductFullDetails.get('Product Code')).toBe('Product 18'); // Assert
//     expect.soft(actualProductFullDetails.get('Reward Points')).toBe('800'); // Assert
//     expect.soft(actualProductFullDetails.get('Availability')).toBe('Out Of Stock'); // Assert

// });

// test(`verify product price attributes`, async ({ page }) => {
//     let loginPage = new LoginPage(page); // Arange
//     await loginPage.goToLoginPage(); // Action 1
//     let homePage: HomePage = await loginPage.performLogin('pwtest@nal.com', 'test123'); // Action 2
//     let resultsPage: SearchResultsPage = await homePage.doSearch('macbook'); // Action 3
//     let productInfoPage: ProductInfoPage = await resultsPage.selectProduct('MacBook Pro');

//     let actualProductFullDetails = await productInfoPage.getProductDetails();

//     expect.soft(actualProductFullDetails.get('Header')).toBe('MacBook Pro'); // Assert
//     expect.soft(actualProductFullDetails.get('Product price')).toBe('$2,000.00'); // Assert
//     expect.soft(actualProductFullDetails.get('Extaprice')).toBe('$2,000.00'); // Assert
// });

