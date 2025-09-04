Here I'll upload the all code related content which I will learn during the Playwright automation with JavaScript and TypeScript course by Naveen Automation Labs
-----------------------------------------------------------------------------------------------------------------------------------------------------------------

Playwright Installation/Setup Commands:
--------------------------------------

npm init -y

npm init playwright@latest

npx playwright --version

npm install --save-dev @playwright/test typescript ts-node

npx playwright install

After this we need to add tsconfig.json file also:
-------------------------------------------------

{
  "compilerOptions": {
    "target": "ESNext",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "strict": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "types": ["node", "@playwright/test"]
  },
  "include": ["tests/**/*.ts", "playwright.config.ts", "tests-examples/demo-todo-app.spec.ts"]
}
