import { Given, When } from "@cucumber/cucumber";
import { pageFixture } from "./hooks/browserContextFixture";

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

Given("I wait for {int} seconds", async (seconds: number) => {
	await pageFixture.page.waitForTimeout(seconds * 1000);
});
