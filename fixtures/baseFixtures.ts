import { test as base, expect } from "@playwright/test";
import { HomePage } from '../pages/HomePage';
import { LoginPage } from "../pages/LoginPage";

type MyFixtures = {
    homePage: HomePage;
};

export const test = base.extend<MyFixtures>({
    homePage: async ({ page, baseURL }, use, testInfo) => {
        // { page, baseURL } ----> these are the default fixtures provided by Playwright. Object destructuring is used to get the page and baseURL from the default fixtures.

        // use, testInfo ----> these are the custom fixtures provided by us. Object destructuring is used to get the use and testInfo from the custom fixtures. Independent parameters at the function level

        const loginPage = new LoginPage(page);
        await loginPage.goToLoginPage(baseURL);
        const username = testInfo.project.metadata.appUserName;
        const password = testInfo.project.metadata.appPassword;
        const homePage = await loginPage.performLogin(username, password);
        expect(await homePage.isUserLogin()).toBeTruthy;

        await use(homePage); // giver it will return the homePage reference to the tescases.

    }
});

export { expect };