# Learning Playwright Fundamentals 2x

This repository is a hands-on learning project for mastering **Playwright** — the end-to-end testing framework by Microsoft.

## Overview

Playwright enables reliable, fast, and cross-browser automation for modern web applications. This project covers the core fundamentals including test creation, browser configuration, assertions, locators, and reporting.

## Tech Stack

- **Playwright** — Test runner and browser automation
- **TypeScript** — Test files written in TypeScript
- **Node.js** — Runtime environment
- **Cross-browser** — Tests run on Chromium, Firefox, and WebKit

## Project Structure

```
├── .gitignore
├── package.json
├── playwright.config.ts
├── tests/
│   └── example.spec.ts
├── test-results/
├── playwright-report/
└── node_modules/
```

- `tests/` — Contains all test spec files
- `playwright.config.ts` — Central Playwright configuration (browsers, reporters, timeouts, etc.)
- `playwright-report/` — Generated HTML test reports
- `test-results/` — Test run artifacts (screenshots, traces, videos)

## Getting Started

```bash
# Install dependencies
npm install

# Run all tests
npx playwright test

# Run tests in headed mode (watch browser)
npx playwright test --headed

# View the HTML report
npx playwright show-report
```

## Tests

The initial test suite covers basic Playwright functionality:

- **Page title verification** — Navigates to playwright.dev and validates the page title
- **Navigation flows** — Clicks "Get started" link and verifies the Installation page heading

Tests run across **Chromium**, **Firefox**, and **WebKit** in parallel by default.

## Configuration Highlights

| Setting | Value |
|---------|-------|
| Test directory | `./tests` |
| Parallel execution | Enabled (`fullyParallel: true`) |
| CI retries | 2 retries on CI |
| Trace | On first retry (`on-first-retry`) |
| Reporter | HTML report |

## License

ISC
