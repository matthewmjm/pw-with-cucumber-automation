"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const test_1 = require("@playwright/test");
const faker_1 = require("@faker-js/faker");
const logger_1 = __importDefault(require("../logger/logger"));
// Cucumber Expressions
(0, cucumber_1.When)("I type a first name", async function () {
    logger_1.default.info(`Base URL stored in Cucumber World: ${this.getURL()}`);
    await this.contactUsPage.fillFirstName("Joe");
});
(0, cucumber_1.When)("I type a last name", async function () {
    await this.contactUsPage.fillLastName("Smith");
});
(0, cucumber_1.When)("I enter an email", async function () {
    await this.contactUsPage.fillEmailAddress("joe.smith@sol.com");
});
(0, cucumber_1.When)("I type a comment", async function () {
    await this.contactUsPage.fillComment("I am Joe Smith and this is my comment.");
});
(0, cucumber_1.When)("I click on the submit button", async function () {
    await this.contactUsPage.clickOnSubmitButton();
});
(0, cucumber_1.Then)("I should be presented with a successful contact us submission message", async function () {
    const successMessage = await this.contactUsPage.getSuccessfulMessage();
    (0, test_1.expect)(successMessage).toBe("Thank You for your Message!");
});
(0, cucumber_1.Then)("I should be presented with an unsuccessful contact us message", async function () {
    const unsuccessMessage = await this.contactUsPage.getErrorMessage();
    (0, test_1.expect)(unsuccessMessage).toMatch(/Error: (all fields are required|Invalid email address)/);
});
// Cucumber Expressions
(0, cucumber_1.When)("I type a specific first name {string}", async function (firstName) {
    await this.contactUsPage.fillFirstName(firstName);
});
(0, cucumber_1.When)("I type a specific last name {string}", async function (lastName) {
    await this.contactUsPage.fillLastName(lastName);
});
(0, cucumber_1.When)("I enter a specific email address {string}", async function (emailAddress) {
    await this.contactUsPage.fillEmailAddress(emailAddress);
});
(0, cucumber_1.When)("I type a specific text {string} and a number {int} within the comment input field", async function (word, number) {
    await this.contactUsPage.fillComment(word + " " + number);
});
// Using Random Data via Faker
(0, cucumber_1.When)("I type a random first name", async function () {
    const randomFirstName = faker_1.faker.person.firstName();
    this.setFirstName(randomFirstName);
    await this.contactUsPage.fillFirstName(randomFirstName);
});
(0, cucumber_1.When)("I type a random last name", async function () {
    const randomLastName = faker_1.faker.person.lastName();
    this.setLastName(randomLastName);
    await this.contactUsPage.fillLastName(randomLastName);
});
(0, cucumber_1.When)("I enter a random email", async function () {
    const randomEmail = faker_1.faker.internet.email();
    this.setEmailAddress(randomEmail);
    await this.contactUsPage.fillEmailAddress(randomEmail);
});
(0, cucumber_1.When)("I type a random comment", async function () {
    await this.contactUsPage.fillComment(`Please can you contact me? \n Thanks ${this.getFirstName()} ${this.getLastName()} ${this.getEmailAddress()}`);
    // await this.contactUsPage.pause();
});
// Scenario Outlines
(0, cucumber_1.When)("I type a first name {word} and a last name {word}", async function (firstName, lastName) {
    await this.contactUsPage.fillFirstName(firstName);
    await this.contactUsPage.fillLastName(lastName);
});
(0, cucumber_1.When)("I type an email address {string} and a comment {string}", async function (email, comment) {
    await this.contactUsPage.fillEmailAddress(email);
    await this.contactUsPage.fillComment(comment);
    // await this.contactUsPage.pause();
});
(0, cucumber_1.Then)("I should be presented with a header text {string}", async function (message) {
    const headerText = await this.contactUsPage.getHeaderText(message);
    (0, test_1.expect)(headerText).toContain(message);
});
