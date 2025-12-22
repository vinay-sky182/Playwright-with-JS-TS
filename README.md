# Playwright Tutorial

In this branch I'll upload Playwright related code which I'll write during learning of Playwright.

## 📦 Playwright Installation & Setup Commands:

#### 1. Initializes a new Node.js project with default settings (package.json).
```bash
npm init -y
```

#### 2. Sets up Playwright with the latest version and recommended project structure.
```bash
npm init playwright@latest
```

#### 3. Displays the installed version of Playwright CLI.
```bash
npx playwright --version
```

#### 4. Installs Playwright Test framework along with TypeScript and ts-node for TypeScript execution.
```bash
npm install --save-dev @playwright/test typescript ts-node
```

#### 5. Downloads browser binaries (Chromium, Firefox, WebKit) required by Playwright.
```bash
npx playwright install
```
##### After this we need to add tsconfig.json file

#### tsconfig.json :

```json

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
```
