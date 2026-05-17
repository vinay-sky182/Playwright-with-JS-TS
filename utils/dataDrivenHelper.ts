// utils/DataDrivenHelper.ts
import { test, Page } from '@playwright/test';
import { regData, RegData } from '../utils/testData'; // TestData se import karein

// 1. Yahan humne ek custom type bana liya Function type alias / signature:Promise<void> return karega kyunki async function hai

// यहाँ type बेहतर choice है क्योंकि आप function callback का type बना रहे हैं, जिससे code ज्यादा readable और maintainable हो जाता है। Interface भी काम करेगा, लेकिन type alias इस case में ज्यादा natural लगता है।

type TestAction = (user: RegData, page: Page, baseURL?: string) => Promise<void>;

// interface TestAction {
//   (user: RegData, page: Page, baseURL?: string): Promise<void>;
// }

// Callback function ab user ke sath-sath page aur baseURL bhi accept karega
export function forEachUser(testCallback: TestAction) {
    
    for (const user of (regData as RegData[])) {
        
        // Playwright ka default test yahan chalega, aur 'page' / 'baseURL' uthayega
        test(`Verify user is able to register: ${user.firstName}`, async ({ page, baseURL }) => {
            
            // Ye callback actual test file mein define hoga
            await testCallback(user, page, baseURL);
        });
    }
}



// import { test } from '@playwright/test';
// import { regData } from '../utils/testData';

// // 1. Pehle data ka structure define karein
// interface RegData {
//     firstName: string;
//     lastName: string;
//     telephone: string;
//     password: string;
//     subscribeNewsletter: string;
// }

// // Ye function loop chalayega aur data test ko pass karega
// export function forEachUser(testCallback: (user: any) => Promise<void>) {
//     for (const user of (regData as RegData[])) {
//         test(`Test for user: ${user.firstName}`, async () => {
//             await testCallback(user);
//         });
//     }
// }