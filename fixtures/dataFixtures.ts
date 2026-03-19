import { expect, test as base } from "@playwright/test";
import fs from 'fs';
import { parse } from 'csv-parse/sync';

// Define the structure of registration data from CSV
interface RegData {
    firstName: string,
    lastName: string,
    telephone: string,
    password: string,
    subscribeNewsletter: string
}

// Read and parse CSV data synchronously at module load time
// This provides static data for tests without needing async fixtures

// 1. Ise bahar hi rakhein taaki test file loop chala sake
export const regData: RegData[] = parse(fs.readFileSync('./data/register.csv', 'utf-8'), {
    columns: true, skip_empty_lines: true
});

// Define the type for the custom fixture
// This fixture will provide a single user data object to tests
type csvFixture = {
    registerationData: RegData;
}

// Extend the base Playwright test with custom fixture
// This allows tests to access CSV data via the 'registerationData' parameter
export const dataTest = base.extend<{ userIndex: number, registerationData: RegData }>({
    userIndex: [0, { option: true }],
    // Ye Playwright ka ek advanced feature hai jise "Parameterizable Fixtures" ya "Test Options" kehte hain. Iska istemal tab kiya jata hai jab aap chahte hain ki ek fixture ka behavior har test case ke liye alag ho sake.

    // 'workerIndex' Playwright ka built-in fixture hai jo har parallel worker ko ek unique number deta hai (0, 1, 2...)
    registerationData: async ({ userIndex }, use) => {

        // 1. Worker index nikaalein (e.g., Worker 1 ko index 0 milega, Worker 2 ko 1)
        // const index = workerInfo.workerIndex;

        // Agar workers zyada hain aur data kam, toh '%' (modulo) use karein taaki data repeat ho sake safely
        const user = regData[userIndex];
        // For this example, we're providing an empty object as placeholder
        // In a real scenario, you might select a specific user from regData array
        // console.log(`Worker ${userIndex} is using data for: ${user.firstName}`);
        await use(user);
    }
});

// Re-export expect for convenience in test files
export { expect };

// import { expect, test as base } from "@playwright/test";
// import fs from 'fs';
// import { parse } from 'csv-parse/sync';

// // Define the structure of registration data from CSV
// interface RegData {
//     firstName: string,
//     lastName: string,
//     telephone: string,
//     password: string,
//     subscribeNewsletter: string
// }

// // Read and parse CSV data synchronously at module load time
// // This provides static data for tests without needing async fixtures
// export const regData: RegData[] = parse(fs.readFileSync('./data/register.csv', 'utf-8'), {
//     columns: true, skip_empty_lines: true
// });

// // Define the type for the custom fixture
// // This fixture will provide a single user data object to tests
// type csvFixture = {
//     registerationData: RegData;
// }

// // Extend the base Playwright test with custom fixture
// // This allows tests to access CSV data via the 'registerationData' parameter
// export const dataTest = base.extend<csvFixture>({
//     registerationData: async ({ }, use) => {
//         // For this example, we're providing an empty object as placeholder
//         // In a real scenario, you might select a specific user from regData array
//         await use({} as RegData);
//     }
// });

// // Re-export expect for convenience in test files
// export { expect };

