import { Then, When } from "@cucumber/cucumber";
import { pageFixture } from "./hooks/browserContextFixture";
import { expect } from "@playwright/test";

When("I type a first name", async () => {
	await pageFixture.page.getByPlaceholder("First Name").fill("Joe");
});

When("I type a last name", async () => {
	await pageFixture.page.getByPlaceholder("Last Name").fill("Smith");
});

When("I enter an email", async () => {
	await pageFixture.page.getByPlaceholder("Email Address").fill("joe.smith@sol.com");
});

When("I type a comment", async () => {
	await pageFixture.page.getByRole("textbox", { name: "Comments" }).fill("I am Joe Smith and this is my comment.");
});

When("I click on the submit button", async () => {
	// await pageFixture.page.getByRole("button", { name: "SUBMIT" }).click();

	// wait for the button to load
	await pageFixture.page.waitForSelector("input[value='SUBMIT']");
	// once loaded, click on the button
	await pageFixture.page.click("input[value='SUBMIT']");
});

Then("I should be presented with a successful contact us submission message", async () => {
	await pageFixture.page.waitForSelector("#contact_reply h1", { timeout: 60000 });

	// get the text from the h1 element
	const text = await pageFixture.page.innerText("#contact_reply h1");

	// use Playwright assertion
	expect(text).toBe("Thank You for your Message!");

	// await pageFixture.page.getByRole("heading", { name: "Thank You for your Message!" });
	// await pageFixture.page.pause();
	// locator('#contact_reply')
});

Then("I should be presented with an unsuccessful contact us message", async () => {
	// Wait for the body tag element
	await pageFixture.page.waitForSelector("body");

	// locate the body tag element
	const bodyElement = await pageFixture.page.locator("body");

	// Extract the text from the element
	const bodyText = await bodyElement.textContent();

	// Assertion
	expect(bodyText).toMatch(/Error: (all fields are required|Invalid email address)/);
});
