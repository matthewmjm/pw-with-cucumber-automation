"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePage = void 0;
const BasePage_1 = require("./base/BasePage");
class HomePage extends BasePage_1.BasePage {
    // Specific methods for the HomePage
    async clickOnContactUsButton() {
        await this.waitAndClickByRole("link", "Contact Us Form");
    }
    async clickOnLoginPortalButton() {
        await this.waitAndClickByRole("link", "Login Portal");
    }
}
exports.HomePage = HomePage;
