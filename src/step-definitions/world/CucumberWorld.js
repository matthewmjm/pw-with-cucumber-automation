"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CucumberWorld = void 0;
const cucumber_1 = require("@cucumber/cucumber");
const PageManager_1 = require("../../page-objects/base/PageManager");
class CucumberWorld extends cucumber_1.World {
    pageManager;
    basePage;
    homePage;
    contactUsPage;
    loginPage;
    // Base URL
    url;
    // Person
    firstName;
    lastName;
    emailAddress;
    // Make a constructor for World
    // { attach, log, parameters, link }: IWorldOptions are required in the constructor of your CucumberWorld class to
    // inherit functionalities from the Base World class and to initialize your PageManager and BasePage
    constructor({ attach, log, parameters, link }) {
        super({ attach, log, parameters, link }); // Pass the options to the world constructor
        this.pageManager = new PageManager_1.PageManager(); // Initializing PageManager
        this.basePage = this.pageManager.createBasePage(); // Initializing BasePage
        this.homePage = this.pageManager.createHomePage(); // Initializing HomePage
        this.contactUsPage = this.pageManager.createContactUsPage(); // Initializing ContactUsPage
        this.loginPage = this.pageManager.createLoginPage(); // Initializing LoginPage
    }
    // Setter methods for first name etc:
    setUrl(url) {
        this.url = url;
    }
    setFirstName(firstName) {
        this.firstName = firstName;
    }
    setLastName(lastName) {
        this.lastName = lastName;
    }
    setEmailAddress(emailAddress) {
        this.emailAddress = emailAddress;
    }
    // Getter methods for first name etc:
    getURL() {
        return this.url;
    }
    getFirstName() {
        return this.firstName;
    }
    getLastName() {
        return this.lastName;
    }
    getEmailAddress() {
        return this.emailAddress;
    }
}
exports.CucumberWorld = CucumberWorld;
// Tells Cucumber World to use Custom World
(0, cucumber_1.setWorldConstructor)(CucumberWorld);
