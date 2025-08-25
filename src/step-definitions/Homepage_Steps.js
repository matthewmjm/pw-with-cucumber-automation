"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const logger_1 = __importDefault(require("../logger/logger"));
const url = "https://www.webdriveruniversity.com/";
(0, cucumber_1.Given)("I navigate to the webdriveruniversity homepage", async function () {
    try {
        await this.homePage.navigate(url);
        logger_1.default.info("Accessing URL: " + url);
        this.setUrl(url);
    }
    catch (error) {
        logger_1.default.error("An error has occurred: " + url);
    }
});
(0, cucumber_1.When)("I click on the contact us button", async function () {
    this.homePage.clickOnContactUsButton();
});
(0, cucumber_1.When)("I click on the login portal button", async function () {
    this.homePage.clickOnLoginPortalButton();
});
