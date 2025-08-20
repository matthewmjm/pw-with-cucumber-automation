import { Given, When } from "@cucumber/cucumber";
import { pageFixture } from "./hooks/browserContextFixture";

const url = "https://www.webdriveruniversity.com/";

Given("I navigate to the webdriveruniversity homepage", async () => {
	// Access URL
	await pageFixture.page.goto(url);
});

When("I click on the contact us button", async () => {
	// await page.pause();
	const contactUs_Button = await pageFixture.page.getByRole("link", {
		name: "CONTACT US Contact Us Form",
	});
	await contactUs_Button.click();
});

When("I click on the login portal button", async () => {
	const login_Button = await pageFixture.page.getByRole("link", {
		name: "LOGIN PORTAL Login Portal",
	});
	await login_Button.click();
});

// Before the refactor
// When("I switch to the new browser tab", async () => {
// 	page = await context.waitForEvent("page");
// 	await page.bringToFront();
// });

When("I switch to the new browser tab", async () => {
	// reinitialize the page > new tab > page
	await pageFixture.context.waitForEvent("page");

	// Retrieve all current open pages (tabs)
	const allPages = await pageFixture.context.pages();

	// Assign the most recent tab to pageFixture.page
	pageFixture.page = allPages[allPages.length - 1];

	// Bring the newly assigned tab to the front (Make it active)
	await pageFixture.page.bringToFront();

	// Ensure the newly assigned tab is also fully maximised
	await pageFixture.page.setViewportSize({ width: 1920, height: 1080 });
});
