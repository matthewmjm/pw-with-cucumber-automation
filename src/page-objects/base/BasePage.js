"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePage = void 0;
const browserContextFixture_1 = require("../../step-definitions/hooks/browserContextFixture");
// Load env variables from .env file
const dotenv_1 = require("dotenv");
const env = (0, dotenv_1.config)({ path: "./env/.env" });
// Create a configuration object for easy access to env variables
const config = {
    width: parseInt(process.env.WIDTH || env.parsed?.BROWSER_WIDTH || "1920"),
    height: parseInt(process.env.HEIGHT || env.parsed?.BROWSER_HEIGHT || "1080"),
};
class BasePage {
    get page() {
        return browserContextFixture_1.pageFixture.page;
    }
    // Promise<void> in TypeScript when you're defining an async function that doesn't explicitly return a value.
    // Navigate to a given URL
    async navigate(url) {
        await this.page.goto(url);
    }
    // Wait and click on an element by role
    async waitAndClickByRole(role, name) {
        const element = await this.page.getByRole(role, { name: name });
        await element.click();
    }
    // Wait for the locator to be visible and then click on it
    async waitAndClick(locator) {
        await locator.isVisible();
        await locator.click();
    }
    // Wait for the selector to be visible and then click on it
    async waitAndClickSelector(selector) {
        await this.page.waitForSelector(selector);
        await this.page.click(selector);
    }
    // Switch to a new tab
    async switchToNewTab() {
        // reinitialize the page > new tab > page
        await this.page.context().waitForEvent("page");
        // Retrieve all current open pages (tabs)
        const allPages = await this.page.context().pages();
        // Assign the most recent tab to pageFixture.page
        browserContextFixture_1.pageFixture.page = allPages[allPages.length - 1];
        // Bring the newly assigned tab to the front (Make it active)
        await this.page.bringToFront();
        // Ensure the newly assigned tab is also fully maximized
        await this.page.setViewportSize({ width: config.width, height: config.height });
    }
}
exports.BasePage = BasePage;
