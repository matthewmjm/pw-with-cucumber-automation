import { Locator, Page } from "@playwright/test";
import { pageFixture } from "../../step-definitions/hooks/browserContextFixture";

// Load env variables from .env file
import { config as loadEnv } from "dotenv";
const env = loadEnv({ path: "./env/.env" });

// Create a configuration object for easy access to env variables
const config = {
	width: parseInt(process.env.WIDTH || env.parsed?.BROWSER_WIDTH || "1920"),
	height: parseInt(process.env.HEIGHT || env.parsed?.BROWSER_HEIGHT || "1080"),
};

export class BasePage {
	get page(): Page {
		return pageFixture.page;
	}

	// Promise<void> in TypeScript when you're defining an async function that doesn't explicitly return a value.

	// Navigate to a given URL
	public async navigate(url: string): Promise<void> {
		await this.page.goto(url);
	}

	// Wait and click on an element by role
	public async waitAndClickByRole(role: string, name: string): Promise<void> {
		const element = await this.page.getByRole(role as any, { name: name });
		await element.click();
	}

	// Wait for the locator to be visible and then click on it
	public async waitAndClick(locator: Locator): Promise<void> {
		await locator.isVisible();
		await locator.click();
	}

	// Wait for the selector to be visible and then click on it
	public async waitAndClickSelector(selector: string): Promise<void> {
		await this.page.waitForSelector(selector);
		await this.page.click(selector);
	}

	// Switch to a new tab
	public async switchToNewTab(): Promise<void> {
		// reinitialize the page > new tab > page
		await this.page.context().waitForEvent("page");

		// Retrieve all current open pages (tabs)
		const allPages = await this.page.context().pages();

		// Assign the most recent tab to pageFixture.page
		pageFixture.page = allPages[allPages.length - 1];

		// Bring the newly assigned tab to the front (Make it active)
		await this.page.bringToFront();

		// Ensure the newly assigned tab is also fully maximized
		await this.page.setViewportSize({ width: config.width, height: config.height });
	}
}
