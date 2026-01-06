# 🚀 Allure Report for Playwright Automation


## 🛠️ Setup Instructions

### 📦 Install allure-report
```bash
npm install --save-dev allure-playwright allure-commandline
```

###  🧑‍💻 Need to add allure-report info in playwright.config.ts file
### Open playwright.config.ts:
👉 add   ['allure-playwright', { outputFolder: path.join('./Playwright_Framework/', 'allure-results') }]inside the reporter section

after adding this and running the test case it will genrate the allure results

### 📁 Genrate allure report
```bash
npx allure generate allure-results --clean -o allure-report
```

```bash
npx allure open allure-report
```

