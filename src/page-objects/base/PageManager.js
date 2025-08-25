"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageManager = void 0;
const BasePage_1 = require("./BasePage");
const browserContextFixture_1 = require("../../step-definitions/hooks/browserContextFixture");
const HomePage_1 = require("../HomePage");
const ContactUsPage_1 = require("../ContactUsPage");
const LoginPage_1 = require("../LoginPage");
class PageManager {
    get page() {
        return browserContextFixture_1.pageFixture.page;
    }
    createBasePage() {
        return new BasePage_1.BasePage();
    }
    createHomePage() {
        return new HomePage_1.HomePage();
    }
    createContactUsPage() {
        return new ContactUsPage_1.ContactUsPage();
    }
    createLoginPage() {
        return new LoginPage_1.LoginPage();
    }
}
exports.PageManager = PageManager;
