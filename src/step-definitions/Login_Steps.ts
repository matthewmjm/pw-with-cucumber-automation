import { When, Then } from "@cucumber/cucumber";
import { pageFixture } from "./hooks/browserContextFixture";
import { log } from "console";

When("I type a username {word}", async (username: string) => {
	await pageFixture.page.getByPlaceholder("Username").fill(username);
});

When("I type a password {word}", async (password: string) => {
	await pageFixture.page.getByPlaceholder("Password").fill(password);
});

When("I click on the login button", async () => {
	const loginButton = await pageFixture.page.locator("#login-button");
	await loginButton.hover();
	await loginButton.click({ force: true });
});

Then("I should be presented with an alert box which contains text {string}", async (string) => {});
