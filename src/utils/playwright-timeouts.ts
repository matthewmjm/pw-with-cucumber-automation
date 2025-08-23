import { Page } from "@playwright/test";

export function setGlobalSettings(page: Page) {
	// Set Global 'navigation' timeout
	page.setDefaultNavigationTimeout(50000); // wait up to 50 seconds

	// Set Global 'command' timeout
	page.setDefaultTimeout(30000); // wait up to 30 seconds

	// Override global 'navigation' timeout - Command Example:
	// await page.goto('https://example.com, {.timeout: 60000 });

	// Override global 'command' timeout - Command Example
	// await page.waitForSelector('#my-element', {.timeout: 60000 })
	// await page.type('#my-input','Hello', {.timeout: 60000 })
	// await page.click('#my-button', {.timeout: 60000 })

	// MAKE SURE! ! ! ! ! - Cucumber timeouts value is always HIGHER! ! ! !
}
