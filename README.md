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
```

To compile the .ts file we use this command: npx tsc

To run the TypeScript file using code runner extention we make changes inside of coder runner: executor map 

1. Open settings in VS-Code.
2. Search 'runner.executor' inside of search bar
3. Just bellow the first option click on 'Edit in settings.json'
4. A setting.json file will open.
5. In this file find the 'typescript'.
6. If it is present then replace that with "typescript": "npx tsx" if not present then add it.
