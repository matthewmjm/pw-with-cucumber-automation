import { When } from "@cucumber/cucumber";
import { pageFixture } from "./hooks/browserContextFixture";

When("I type a first name", async () => {
	await pageFixture.page.getByPlaceholder("First Name").fill("Joe");
	// await pageFixture.page.pause();
});
