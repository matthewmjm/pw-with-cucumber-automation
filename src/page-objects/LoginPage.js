"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
const BasePage_1 = require("../page-objects/base/BasePage");
class LoginPage extends BasePage_1.BasePage {
    async navigateToLoginPage() {
        await this.navigate("https://www.webdriveruniversity.com/Login-Portal/index.html");
    }
    async fillUsername(username) {
        await this.page.getByPlaceholder("Username").fill(username);
    }
    async fillPassword(password) {
        await this.page.getByPlaceholder("Password").fill(password);
    }
    async clickOnLoginButton() {
        const loginButton = await this.page.locator("#login-button");
        await loginButton.hover();
        await loginButton.click({ force: true });
    }
}
exports.LoginPage = LoginPage;
