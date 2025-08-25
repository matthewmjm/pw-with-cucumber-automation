"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactUsPage = void 0;
const BasePage_1 = require("../page-objects/base/BasePage");
class ContactUsPage extends BasePage_1.BasePage {
    // type a first name
    async fillFirstName(firstName) {
        await this.page.getByPlaceholder("First Name").fill(firstName);
    }
    // type a last name
    async fillLastName(lastName) {
        await this.page.getByPlaceholder("Last Name").fill(lastName);
    }
    // type an email address
    async fillEmailAddress(emailAddress) {
        await this.page.getByPlaceholder("Email Address").fill(emailAddress);
    }
    // type a comment
    async fillComment(comment) {
        await this.page.getByPlaceholder("Comments").fill(comment);
    }
    // click on submit button
    async clickOnSubmitButton() {
        await this.page.waitForSelector("input[value='SUBMIT']");
        await this.page.click("input[value='SUBMIT']");
    }
    // get successful message
    async getSuccessfulMessage() {
        await this.page.waitForSelector("#contact_reply h1", { timeout: 60000 });
        return await this.page.innerText("#contact_reply h1");
    }
    // get error page
    async getErrorMessage() {
        await this.page.waitForSelector("body");
        const bodyElement = await this.page.locator("body");
        const bodyText = await bodyElement.textContent();
        return bodyText ?? ""; // If bodyText is null, we will return an empty string
    }
    // get header text
    async getHeaderText(message) {
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
exports.ContactUsPage = ContactUsPage;
