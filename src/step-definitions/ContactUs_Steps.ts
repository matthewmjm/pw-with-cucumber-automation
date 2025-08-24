import { Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { CucumberWorld } from "./world/CucumberWorld";
import logger from "../logger/logger";

// Cucumber Expressions
When("I type a first name", async function (this: CucumberWorld) {
	logger.info(`Base URL stored in Cucumber World: ${this.getURL()}`);
	await this.contactUsPage.fillFirstName("Joe");
});

When("I type a last name", async function (this: CucumberWorld) {
	await this.contactUsPage.fillLastName("Smith");
});

When("I enter an email", async function (this: CucumberWorld) {
	await this.contactUsPage.fillEmailAddress("joe.smith@sol.com");
});

When("I type a comment", async function (this: CucumberWorld) {
	await this.contactUsPage.fillComment("I am Joe Smith and this is my comment.");
});

When("I click on the submit button", async function (this: CucumberWorld) {
	await this.contactUsPage.clickOnSubmitButton();
});

Then("I should be presented with a successful contact us submission message", async function (this: CucumberWorld) {
	const successMessage = await this.contactUsPage.getSuccessfulMessage();

	expect(successMessage).toBe("Thank You for your Message!");
});

Then("I should be presented with an unsuccessful contact us message", async function (this: CucumberWorld) {
	const unsuccessMessage = await this.contactUsPage.getErrorMessage();
	expect(unsuccessMessage).toMatch(/Error: (all fields are required|Invalid email address)/);
});

// Cucumber Expressions
When("I type a specific first name {string}", async function (this: CucumberWorld, firstName: string) {
	await this.contactUsPage.fillFirstName(firstName);
});

When("I type a specific last name {string}", async function (this: CucumberWorld, lastName: string) {
	await this.contactUsPage.fillLastName(lastName);
});

When("I enter a specific email address {string}", async function (this: CucumberWorld, emailAddress: string) {
	await this.contactUsPage.fillEmailAddress(emailAddress);
});

When("I type a specific text {string} and a number {int} within the comment input field", async function (this: CucumberWorld, word: string, number: number) {
	await this.contactUsPage.fillComment(word + " " + number);
});

// Using Random Data via Faker
When("I type a random first name", async function (this: CucumberWorld) {
	const randomFirstName = faker.person.firstName();
	this.setFirstName(randomFirstName);
	await this.contactUsPage.fillFirstName(randomFirstName);
});

When("I type a random last name", async function (this: CucumberWorld) {
	const randomLastName = faker.person.lastName();
	this.setLastName(randomLastName);
	await this.contactUsPage.fillLastName(randomLastName);
});

When("I enter a random email", async function (this: CucumberWorld) {
	const randomEmail = faker.internet.email();
	this.setEmailAddress(randomEmail);
	await this.contactUsPage.fillEmailAddress(randomEmail);
});

When("I type a random comment", async function (this: CucumberWorld) {
	await this.contactUsPage.fillComment(`Please can you contact me? \n Thanks ${this.getFirstName()} ${this.getLastName()} ${this.getEmailAddress()}`);
	// await this.contactUsPage.pause();
});

// Scenario Outlines

When("I type a first name {word} and a last name {word}", async function (this: CucumberWorld, firstName: string, lastName: string) {
	await this.contactUsPage.fillFirstName(firstName);
	await this.contactUsPage.fillLastName(lastName);
});

When("I type an email address {string} and a comment {string}", async function (this: CucumberWorld, email: string, comment: string) {
	await this.contactUsPage.fillEmailAddress(email);
	await this.contactUsPage.fillComment(comment);
	// await this.contactUsPage.pause();
});

Then("I should be presented with a header text {string}", async function (this: CucumberWorld, message: string) {
	const headerText = await this.contactUsPage.getHeaderText(message);
	expect(headerText).toContain(message);
});
