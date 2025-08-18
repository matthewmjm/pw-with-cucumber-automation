import { Given, When, Then } from "@cucumber/cucumber";
import { Browser, Page } from "playwright";

let browser: Browser; //Represents the browser instance (e.g., Chrome, Firefox) opened by Playwright
let context: any; //Represents a browser context (a separate browsing session); Each context has its own cookies, cache, and storage
let page: Page; //Represents a single webpage within a context

Given("I navigate to the webdriveruniversity homepage", async () => {
	console.log("Step 1");
});

When("I click on the contact us button", async () => {
	console.log("Step 2");
});
