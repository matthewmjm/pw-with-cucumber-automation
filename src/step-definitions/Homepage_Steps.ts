import { Given, When } from "@cucumber/cucumber";
import { pageFixture } from "./hooks/browserContextFixture";
import logger from "../logger/logger";
import { CucumberWorld } from "./world/CucumberWorld";

const url = "https://www.webdriveruniversity.com/";

Given("I navigate to the webdriveruniversity homepage", async function (this: CucumberWorld) {
	try {
		// Access URL
		// await pageFixture.page.goto(url);
		await this.basePage.navigate(url);
		logger.info("Accessing URL: " + url);
		this.setUrl(url);
		// throw new Error("Simulating an error during navigation");
	} catch (error: any) {
		logger.error("An error has occurred: " + url);
	}
});

When("I click on the contact us button", async function (this: CucumberWorld) {
	// await page.pause();
	// const contactUs_Button = await pageFixture.page.getByRole("link", {
	// 	name: "CONTACT US Contact Us Form",
	// });
	// await contactUs_Button.click();
	this.basePage.waitAndClickByRole("link", "Contact Us Form");
});

When("I click on the login portal button", async function (this: CucumberWorld) {
	// const login_Button = await pageFixture.page.getByRole("link", {
	// 	name: "LOGIN PORTAL Login Portal",
	// });
	// await login_Button.click();
	this.basePage.waitAndClickByRole("link", "Login Portal");
});
