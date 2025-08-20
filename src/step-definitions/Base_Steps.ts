import { Given, When } from "@cucumber/cucumber";
import { pageFixture } from "./hooks/browserContextFixture";

// Load env variables from .env file
import { config as loadEnv } from "dotenv";
const env = loadEnv({ path: "./env/.env" });

// Create a configuration object for easy access to env variables
const config = {
	// headless: env.parsed?.HEADLESS === "true",
	// browser: env.parsed?.UI_AUTOMATION_BROWSER || "chromium",
	width: parseInt(env.parsed?.BROWSER_WIDTH || "1920"),
	height: parseInt(env.parsed?.BROWSER_HEIGHT || "1080"),
};

When("I switch to the new browser tab", async () => {
	// reinitialize the page > new tab > page
	await pageFixture.context.waitForEvent("page");

	// Retrieve all current open pages (tabs)
	const allPages = await pageFixture.context.pages();

	// Assign the most recent tab to pageFixture.page
	pageFixture.page = allPages[allPages.length - 1];

	// Bring the newly assigned tab to the front (Make it active)
	await pageFixture.page.bringToFront();

	// Ensure the newly assigned tab is also fully maximized
	await pageFixture.page.setViewportSize({ width: config.width, height: config.height });
});

Given("I wait for {int} seconds", async (seconds: number) => {
	await pageFixture.page.waitForTimeout(seconds * 1000);
});
