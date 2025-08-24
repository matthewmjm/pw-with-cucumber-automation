import { BasePage } from "../page-objects/base/BasePage";
export class ContactUsPage extends BasePage {
	// type a first name
	public async fillFirstName(firstName: string): Promise<void> {
		await this.page.getByPlaceholder("First Name").fill(firstName);
	}

	// type a last name
	public async fillLastName(lastName: string): Promise<void> {
		await this.page.getByPlaceholder("Last Name").fill(lastName);
	}

	// type an email address
	public async fillEmailAddress(emailAddress: string): Promise<void> {
		await this.page.getByPlaceholder("Email Address").fill(emailAddress);
	}

	// type a comment
	public async fillComment(comment: string): Promise<void> {
		await this.page.getByPlaceholder("Comments").fill(comment);
	}

	// click on submit button
	public async clickOnSubmitButton(): Promise<void> {
		await this.page.waitForSelector("input[value='SUBMIT']");
		await this.page.click("input[value='SUBMIT']");
	}
	// get successful message
	public async getSuccessfulMessage(): Promise<string> {
		await this.page.waitForSelector("#contact_reply h1", { timeout: 60000 });
		return await this.page.innerText("#contact_reply h1");
	}

	// get error page
	public async getErrorMessage(): Promise<string> {
		await this.page.waitForSelector("body");
		const bodyElement = await this.page.locator("body");
		const bodyText = await bodyElement.textContent();
		return bodyText ?? ""; // If bodyText is null, we will return an empty string
	}

	// get header text
	public async getHeaderText(message: string): Promise<string> {
		await this.page.waitForSelector("//h1 | //body", { state: "visible" });
		const elements = await this.page.locator("//h1 | //body").elementHandles();
		let foundElementText = "";
		for (let element of elements) {
			let text = await element.innerText();
			if (text.includes(message)) {
				foundElementText = text;
				break;
			}
		}
		return foundElementText;
	}
}
