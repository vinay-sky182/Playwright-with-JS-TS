
# TypeScript Tutorial

In this branch we have some TypeScript related code which I write during learning of TypeScript.

## 📦 TypeScript Installation & Setup Commands:

#### 1. Install TypeScript globally
```bash
npm install -g typescript
```

#### 2. Initialize a new Node.js project
```bash
npm init -y
```

#### 3. Install TypeScript locally as a dev dependency
```bash
npm install -D typescript
```

#### 4. Verify the installed TypeScript compiler version
```bash
npx tsc -v
```

#### 5. Create a tsconfig.json file to configure the project
```bash
npx tsc --init
```
##### This generates a tsconfig.json file where you can customize how TypeScript compiles your code

#### tsconfig.json :

```json
{
  "compilerOptions": {
    "target": "es2022",
    "module": "es2022",
    "rootDir": "./src",
    "outDir": "./dist",
    "moduleResolution": "bundler",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "strict": true,
    "types": [ "node" ],
    "noEmitOnError": true,
    "allowImportingTsExtensions": true,
    "noEmit": true,
    "sourceMap": true
  },
  "include": [ "src/**/*.ts" ],
  "exclude": ["node_modules", "dist"],
  "ts-node": {
    "esm": true
  }
}
```

#### To compile the `.ts` file, use this command: `npx tsc`

### 🚀 Running TypeScript with Code Runner Extension

To run .ts files directly using the Code Runner extension in VS Code, update the executor map in your settings.json file.

### 🛠️ Configuration Steps

Open Settings in VS Code.

Search for runner.executor in the search bar.

Under the first result, click “Edit in settings.json”.

This will open your settings.json file.

Locate the "typescript" key inside the code-runner.executorMap object.

Update or add the following entry: `"typescript": "npx tsx"`

```json
"code-runner.executorMap": {
  "typescript": "npx tsx"
}
```
✅ If "typescript" already exists, replace its value with "npx tsx".

➕ If it doesn't exist, simply add the line inside the executorMap object.



