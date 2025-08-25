"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const test_1 = require("@playwright/test");
let alertText;
(0, cucumber_1.Given)("I navigate to the webdriveruniversity login page", async function () {
    await this.loginPage.navigateToLoginPage();
});
(0, cucumber_1.When)("I type a username {word}", async function (username) {
    await this.loginPage.fillUsername(username);
});
(0, cucumber_1.When)("I type a password {word}", async function (password) {
    await this.loginPage.fillPassword(password);
});
(0, cucumber_1.When)("I click on the login button", async function () {
    // listener for alert
    this.loginPage.page.on("dialog", async (alert) => {
        alertText = alert.message();
        await alert.accept();
    });
    await this.loginPage.clickOnLoginButton();
});
(0, cucumber_1.Then)("I should be presented with an alert box which contains text {string}", async function (expectedAlertText) {
    (0, test_1.expect)(alertText).toBe(expectedAlertText);
});
