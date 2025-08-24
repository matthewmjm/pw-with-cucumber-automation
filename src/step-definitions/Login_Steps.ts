import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CucumberWorld } from "./world/CucumberWorld";

let alertText: string;

Given("I navigate to the webdriveruniversity login page", async function (this: CucumberWorld) {
	await this.loginPage.navigateToLoginPage();
});

When("I type a username {word}", async function (this: CucumberWorld, username: string) {
	await this.loginPage.fillUsername(username);
});

When("I type a password {word}", async function (this: CucumberWorld, password: string) {
	await this.loginPage.fillPassword(password);
});

When("I click on the login button", async function (this: CucumberWorld) {
	// listener for alert
	this.loginPage.page.on("dialog", async (alert) => {
		alertText = alert.message();
		await alert.accept();
	});
	await this.loginPage.clickOnLoginButton();
});

Then("I should be presented with an alert box which contains text {string}", async function (this: CucumberWorld, expectedAlertText: string) {
	expect(alertText).toBe(expectedAlertText);
});
