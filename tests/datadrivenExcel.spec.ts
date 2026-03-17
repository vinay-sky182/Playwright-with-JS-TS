import { test, expect } from '@playwright/test';
import XLSX from 'xlsx';

// Define the structure of test data from Excel
interface testData {
    firstName: string,
    lastName: string,
    phone: string,
    password: string
}

// Note: Excel file needs to be installed on the system with license

// Read the Excel workbook
const workbook = XLSX.readFile('./test-data/users.xlsx');
// Get the specific sheet
const sheet = workbook.Sheets['Sheet1'];

// Convert sheet to JSON array
const rawData = XLSX.utils.sheet_to_json(sheet);

// Map raw data to ensure types match the interface
const data: testData[] = rawData.map((column: any) => ({
    firstName: column.firstName as string,
    lastName: column.lastName as string,
    phone: String(column.phone), // Convert phone to string
    password: column.password as string
}));

// Loop through each user data entry
for (let [index, user] of data.entries()) {

    // Destructure user object to get individual fields
    let { firstName, lastName, phone, password } = user;

    // Define a test for each user registration
    test(`Registration of a new user# ${index + 1} : ${firstName}`, async ({ page }) => {

        // Navigate to the registration page
        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

        // Fill in the registration form fields
        await page.getByRole('textbox', { name: 'First Name' }).fill(firstName);
        await page.getByRole('textbox', { name: 'Last Name' }).fill(lastName);
        await page.getByRole('textbox', { name: 'E-Mail' }).fill(getRandomEmail());
        await page.getByRole('textbox', { name: 'Telephone' }).fill(phone);
        await page.getByRole('textbox', { name: 'Password' }).first().fill(password);
        await page.getByRole('textbox', { name: 'Password Confirm' }).fill(password);

        // Select newsletter option
        await page.getByRole('radio', { name: 'Yes', checked: false }).click();
        // Agree to terms
        await page.locator('[name="agree"]').click();
        // Submit the form
        await page.getByRole('button', { name: 'Continue' }).click();

        // Verify account creation success message
        await expect(page.getByText('Your Account Has Been Created!', { exact: true })).toBeVisible();

        // Optional: Pause for debugging
        // await page.pause();
    });

}

function getRandomEmail(): string {
    let randomValue = Math.random().toString(36).substring(2, 9);
    return `auto_${randomValue}@nal.com`;
} 