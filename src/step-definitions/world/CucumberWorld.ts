import { World, setWorldConstructor } from "@cucumber/cucumber";

export class CucumberWorld extends World {
	// Base URL
	private url?: string;

	// Person
	private firstName?: string;
	private lastName?: string;
	private emailAddress?: string;

	// Setter methods for first name etc:
	setUrl(url: string) {
		this.url = url;
	}
	setFirstName(firstName: string) {
		this.firstName = firstName;
	}
	setLastName(lastName: string) {
		this.lastName = lastName;
	}
	setEmailAddress(emailAddress: string) {
		this.emailAddress = emailAddress;
	}

	// Getter methods for first name etc:
	getURL() {
		return this.url;
	}
	getFirstName() {
		return this.firstName;
	}
	getLastName() {
		return this.lastName;
	}
	getEmailAddress() {
		return this.emailAddress;
	}
}

// Tells Cucumber World to use Custom World
setWorldConstructor(CucumberWorld);
