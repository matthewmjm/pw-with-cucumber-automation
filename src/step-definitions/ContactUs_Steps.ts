import { Given, When } from "@cucumber/cucumber";
import { Browser, chromium, Page } from "playwright";

let page: Page; //Represents a single webpage within a context

When("I type a first name", async () => {
	await page.getByPlaceholder("First Name").fill("Joe");
});
