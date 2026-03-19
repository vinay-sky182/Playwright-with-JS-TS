```json
"scripts": {
  "test": "npx playwright test",
  "test:qa": "npx playwright test --config=playwright.config.qa.ts",
  "test:stage": "npx playwright test --config=playwright.config.stage.ts",
  "allure:genrate": "npx allure generate allure-results --clean -o allure-report",
  "allure:open": "npx allure open allure-report"
}
```


# 🎭 Playwright Automation Test Guide

## ⭐ 1. Run the Entire Test Suite

---

## 🚀 1. Running the Complete Test Suite
Use these commands to run **all tests** in your project for a specific environment.

| Environment | Command | Description |
| :--- | :--- | :--- |
| **Default** | `npm run test` | Runs all tests using the default `playwright.config.ts`. |
| **QA** | `npm run test:qa` | Runs all tests using the `playwright.config.qa.ts` configuration. |
| **Staging** | `npm run test:stage` | Runs all tests using the `playwright.config.stage.ts` configuration. |

---

## 📄 2. Running a Specific Test File
To run only one specific file (e.g., `register.spec.ts`), use the `--` separator to pass the file path.

**Syntax:** `npm run <script-name> -- <file-path>`

* **Example (Default):**
  ```bash
  npm run test -- tests/register.spec.ts
  ```

* **Example (QA):**
  ```bash
  npm run test:qa -- tests/register.spec.ts
  ```

* **Example (Stage):**
  ```bash
  npm run test:stage -- tests/register.spec.ts
  ```

---

## 🔍 3. Running a Specific Test Case (By Title)
If you want to run a single test case inside a file using its title, use the `-g` (grep) flag. This avoids running the entire file.

**Syntax:** `npm run <script-name> -- -g "Test Title"`

**Examples:**
* **Default:** `npm run test -- -g "Verify user is able to register"`
* **QA:** `npm run test:qa -- -g "Verify user is able to register"`
* **Staging:** `npm run test:stage -- -g "Register user test for: John"`

---

## 🛠️ 4. Useful Execution Flags
You can add these flags after the `--` separator to change how Playwright executes the tests:

**Syntax:** `npm run <script-name> -- <flag>`

**Examples:**
* **Headed Mode (Show Browser):** `npm run test:qa -- --headed`
* **Debug Mode:** `npm run test:qa -- --debug`
* **Run in a Specific Browser:** `npm run test:qa -- --project=chromium`

---

## 📊 5. Allure Reporting
Follow these steps to generate and view your test reports after the execution is complete.

**Step 1: Generate Report**
Converts raw results from the `allure-results` folder into a viewable HTML report.
`npm run allure:genrate`

**Step 2: Open Report**
Starts a local server to serve and open the generated Allure report in your browser.
`npm run allure:open`

---

> **💡 Pro-Tip:** The `--` (double dash) is strictly required when using `npm run`. It tells npm to pass all following arguments directly to the underlying `playwright` command.
