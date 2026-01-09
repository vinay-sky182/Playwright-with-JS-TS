import { test as base, expect } from "@playwright/test";
import { HomePage } from '../pages/HomePage';
import { LoginPage } from "../pages/LoginPage";

type MyFixtures = {
    homePage: HomePage;
};

export const test = base.extend<MyFixtures>({
    homePage: async ({ page, baseURL }, use, testInfo) => {
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