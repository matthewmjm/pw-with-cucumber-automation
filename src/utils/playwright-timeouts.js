"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setGlobalSettings = setGlobalSettings;
// Load env variables from .env file
const dotenv_1 = require("dotenv");
const env = (0, dotenv_1.config)({ path: "./env/.env" });
function setGlobalSettings(page) {
    // Set Global 'navigation' timeout
    const navigationTimeout = parseInt(env.parsed?.UI_AUTOMATION_NAVIGATION_TIMEOUT || "50000");
    page.setDefaultNavigationTimeout(navigationTimeout); // wait up to 50 seconds
    // Set Global 'command' timeout
    const commandTimeout = parseInt(env.parsed?.UI_AUTOMATION_COMMAND_TIMEOUT || "45000");
    page.setDefaultTimeout(commandTimeout); // wait up to 30 seconds
    // Override global 'navigation' timeout - Command Example:
    // await page.goto('https://example.com, {.timeout: 60000 });
    // Override global 'command' timeout - Command Example
    // await page.waitForSelector('#my-element', {.timeout: 60000 })
    // await page.type('#my-input','Hello', {.timeout: 60000 })
    // await page.click('#my-button', {.timeout: 60000 })
    // MAKE SURE! ! ! ! ! - Cucumber timeouts value is always HIGHER! ! ! !
}
