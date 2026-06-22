# Calculator Project

This project is a simple JavaScript calculator used to practice software development workflows in a CI/CD environment. It includes calculator functions, unit tests, a small browser user interface, linting, Git version control, and GitHub Actions automation.

## Features

- Add two numbers
- Subtract two numbers
- Multiply two numbers
- Divide two numbers
- Square a number
- Cube a number
- Simple HTML and CSS user interface

## Technologies Used

- JavaScript
- NodeJS
- Git
- GitHub
- Jest
- ESLint
- GitHub Actions

## Installation

```bash
npm install
```

## Run Tests

```bash
npm test
```

## Run ESLint

```bash
npm run lint
```

## CI/CD Flow

The GitHub Actions workflow runs automatically when code is pushed to `main` or when a pull request targets `main`. It can also be started manually with `workflow_dispatch` and runs on a schedule every day at 8:00 UTC. The workflow checks out the code, sets up Node.js, prints environment information, installs dependencies, runs ESLint, and runs Jest tests. It also includes simple build and deploy placeholder steps to simulate a company CI/CD pipeline. A separate scheduled report job runs only for scheduled workflow events, and a second `hello` job prints a message in its own job.

## Files

- `calculator.js`: calculator functions
- `calculator.test.js`: Jest unit tests
- `index.html`: simple calculator UI
- `style.css`: simple page styling
- `eslint.config.mjs`: ESLint configuration
- `.github/workflows/ci.yml`: GitHub Actions workflow

## Commands

```bash
npm install
npm test
npm run lint
```
