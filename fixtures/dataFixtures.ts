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
export const dataTest = base.extend<csvFixture>({
    registerationData: async ({ }, use) => {
        // For this example, we're providing an empty object as placeholder
        // In a real scenario, you might select a specific user from regData array
        await use({} as RegData);
    }
});

// Re-export expect for convenience in test files
export { expect };

