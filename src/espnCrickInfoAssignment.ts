// 

import { Browser, chromium, Page, expect, Locator } from "@playwright/test";

(async () => {

    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();

    try {
        await page.goto('https://www.espncricinfo.com/series/men-s-t20-asia-cup-2025-1496919/india-vs-pakistan-final-1496938/full-scorecard');

        let allScores: string[] = await page.locator(`//span[text()='India']/ancestor::div[contains(@class, 'fill-translucent-hover')]/following-sibling::div/table[contains(@class, "ci-scorecard-table")]//tr/td[3]`).allInnerTexts();
        console.log("Total scores from Indian team's end", allScores);
        console.log("------------------------");

        let allScoreVal: number[] = [];

        for (let i = 0; i < allScores.length - 2; i++) {
            allScoreVal.push((Number)(allScores[i]));
        }
        console.log("Only scores from Indian team's end", allScoreVal);
        console.log("------------------------");
        allScoreVal.sort();
        console.log('Highest individual score from India:', allScoreVal[allScoreVal.length - 1]);

    }
    catch (error) {
        console.log('E:', error)
    }
    finally {
        // await page.close(); //span[text()='India']/ancestor::div[contains(@class, 'fill-translucent-hover')]/following-sibling::div/table[contains(@class, "ci-scorecard-table")]//tr/td[3]/preceding-sibling::td/div/div/a
    }
})();