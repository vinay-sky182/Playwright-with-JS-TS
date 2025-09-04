Installation/Setup of TypeScript:
--------------------------------

1. Install TypeScript Globally

npm install -g typescript

2. Initialize a New Node.js Project

npm init -y

3. Install TypeScript as a Development Dependency Locally

npm install -D typescript

4. Verify the Installed Version of TypeScript Compiler

npx tsc -v

5. Create a tsconfig.json File to Configure the Project

npx tsc --init

This generates a tsconfig.json file where you can customize how TypeScript compiles your code

tsconfig.json containt:

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
