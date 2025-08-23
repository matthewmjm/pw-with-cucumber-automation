import { Given, Then, When } from "@cucumber/cucumber";
import { pageFixture } from "./hooks/browserContextFixture";
import { expect } from "@playwright/test";

let alertText: string;

Given("I navigate to the webdriveruniversity login page", async () => {
	await pageFixture.page.goto("https://www.webdriveruniversity.com/Login-Portal/index.html");
});

When("I type a username {word}", async (username: string) => {
	await pageFixture.page.getByPlaceholder("Username").fill(username);
});

When("I type a password {word}", async (password: string) => {
	await pageFixture.page.getByPlaceholder("Password").fill(password);
});

When("I click on the login button", async () => {
	// listener for alert
	await pageFixture.page.on("dialog", async (alert) => {
		alertText = alert.message();
		await alert.accept();
	});
	const loginButton = await pageFixture.page.locator("#login-button");
	await loginButton.hover();
	await loginButton.click({ force: true });
});

Then("I should be presented with an alert box which contains text {string}", async (expectedAlertText: string) => {
	expect(alertText).toBe(expectedAlertText);
});
