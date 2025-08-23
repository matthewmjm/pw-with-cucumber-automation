import { Given, When } from "@cucumber/cucumber";
import { pageFixture } from "./hooks/browserContextFixture";
import logger from "../logger/logger";
import { CucumberWorld } from "./world/CucumberWorld";

const url = "https://www.webdriveruniversity.com/";

Given("I navigate to the webdriveruniversity homepage", async function (this: CucumberWorld) {
	try {
		await this.basePage.navigate(url);
		logger.info("Accessing URL: " + url);
		this.setUrl(url);
	} catch (error: any) {
		logger.error("An error has occurred: " + url);
	}
});

When("I click on the contact us button", async function (this: CucumberWorld) {
	this.basePage.waitAndClickByRole("link", "Contact Us Form");
});

When("I click on the login portal button", async function (this: CucumberWorld) {
	this.basePage.waitAndClickByRole("link", "Login Portal");
});
