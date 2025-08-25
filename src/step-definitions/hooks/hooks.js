"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const test_1 = require("@playwright/test");
const browserContextFixture_1 = require("./browserContextFixture");
const playwright_timeouts_1 = require("../../utils/playwright-timeouts");
const PageManager_1 = require("../../page-objects/base/PageManager");
// Load env variables from .env file
const dotenv_1 = require("dotenv");
const env = (0, dotenv_1.config)({ path: "./env/.env" });
// Create a configuration object for easy access to env variables
const config = {
    headless: env.parsed?.HEADLESS === "true",
    browser: process.env.BROWSER_CHOICE || env.parsed?.UI_AUTOMATION_BROWSER || "chromium",
    width: parseInt(process.env.WIDTH || env.parsed?.BROWSER_WIDTH || "1920"),
    height: parseInt(process.env.HEIGHT || env.parsed?.BROWSER_HEIGHT || "1080"),
};
// Create dictionary mapping browser names to their launch functions
const browsers = {
    chromium: test_1.chromium,
    firefox: test_1.firefox,
    webkit: test_1.webkit,
};
//Represents the browser instance (e.g., Chrome, Firefox, Webkit(Safari)) opened by Playwright
let browserInstance = null;
async function initializeBrowserContext(selectedBrowser) {
    const launchBrowser = browsers[selectedBrowser];
    if (!launchBrowser) {
        throw new Error(`Invalid browser selected: ${selectedBrowser}`);
    }
    return await launchBrowser.launch({ headless: config.headless });
}
async function initializePage() {
    if (!browserInstance) {
        throw new Error("Browser instance is null");
    }
    browserContextFixture_1.pageFixture.context = await browserInstance.newContext({
        ignoreHTTPSErrors: true,
    });
    browserContextFixture_1.pageFixture.page = await browserContextFixture_1.pageFixture.context.newPage();
    (0, playwright_timeouts_1.setGlobalSettings)(browserContextFixture_1.pageFixture.page);
    await browserContextFixture_1.pageFixture.page.setViewportSize({ width: config.width, height: config.height });
}
// BeforeAll hook: Runs once before all scenarios
(0, cucumber_1.BeforeAll)(async function () {
    console.log("\nExecuting test suite...");
});
// AfterAll hook: Runs once after all scenarios
(0, cucumber_1.AfterAll)(async function () {
    console.log("\nFinished execution of test suite!");
});
// Before hook: Runs before each scenario
(0, cucumber_1.Before)(async function () {
    try {
        // browser = await chromium.launch({ headless: false });
        browserInstance = await initializeBrowserContext(config.browser);
        console.log(`Browser context initialized for: ${config.browser}`);
        // pageFixture.context = await browser.newContext({
        // 	viewport: { width: 1920, height: 1080 },
        // });
        // pageFixture.page = await pageFixture.context.newPage();
        await initializePage();
        // initialize page manager, base page and home page
        this.pageManager = new PageManager_1.PageManager();
        this.basePage = this.pageManager.createBasePage();
        this.homePage = this.pageManager.createHomePage();
        this.contactUsPage = this.pageManager.createContactUsPage();
        this.loginPage = this.pageManager.createLoginPage();
    }
    catch (error) {
        console.error("Browser content initialization failed:", error);
    }
});
// After hook: Runs after each scenario
(0, cucumber_1.After)(async function ({ pickle, result }) {
    if (result?.status === cucumber_1.Status.FAILED) {
        if (browserContextFixture_1.pageFixture.page) {
            const screenshotPath = `./reports/screenshots/${pickle.name}-${Date.now()}.png`;
            const image = await browserContextFixture_1.pageFixture.page.screenshot({
                path: screenshotPath,
                type: "png",
                //timeout: 60000
            });
            await this.attach(image, "image/png");
        }
        else {
            console.error("pageFixture.page is undefined");
        }
    }
    // If the browser instance exists, this is the tear-down
    if (browserInstance) {
        await browserContextFixture_1.pageFixture.page?.close();
        await browserInstance.close();
    }
});
