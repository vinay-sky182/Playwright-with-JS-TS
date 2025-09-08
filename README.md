# 🚀 JavaScript Tutorial for Playwright Automation

This repository contains JavaScript code snippets and concepts learned during the Playwright Automation with JavaScript and TypeScript course by Naveen Automation Labs.


## 🛠️ Setup Instructions

### 📦 Install Node.js
#### Download and install Node.js from the official website:
👉 https://nodejs.org/en/download

###  🧑‍💻 Install Visual Studio Code
### Download and install VS Code from:
👉 https://code.visualstudio.com/download

### 📁 Project Initialization
1. Initialize your project with Node: `npm init`
2. This will generate a package.json file inside your folder/package.
3. Open package.json and add the following line to use the latest JavaScript features: `"type": "module"`
4. To run your JavaScript file, use: `
node <folderName/fileName.js>
`

## 🔍 V8 Engine Debugging Flags
### 🧠 Print Bytecode:
```bash
node --print-bytecode <folderName/fileName.js>
```
Use this to inspect how your JS code is compiled into bytecode by the V8 engine.
### ⚙️ Optimization Tracing
```bash
node --trace-opt <folderName/fileName.js>
```
Shows when your code is being optimized.

## ❌ De-optimization Tracing

```bash
node --trace-deopt <folderName/fileName.js>
```
Shows when optimization is cancelled.

## 🚀 Inline Caching Behavior

```bash
node --trace-ic <folderName/fileName.js>
```
Displays inline caching behavior for performance tuning.
