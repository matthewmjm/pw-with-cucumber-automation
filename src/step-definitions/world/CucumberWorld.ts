import { World, setWorldConstructor, IWorldOptions } from "@cucumber/cucumber";
import { PageManager } from "../../page-objects/base/PageManager";
import { BasePage } from "../../page-objects/base/BasePage";
import { HomePage } from "../../page-objects/HomePage";
import { ContactUsPage } from "../../page-objects/ContactUsPage";

export class CucumberWorld extends World {
	public pageManager: PageManager;
	public basePage: BasePage;
	public homePage: HomePage;
	public contactUsPage: ContactUsPage;

	// Base URL
	private url?: string;

	// Person
	private firstName?: string;
	private lastName?: string;
	private emailAddress?: string;

	// Make a constructor for World
	// { attach, log, parameters, link }: IWorldOptions are required in the constructor of your CucumberWorld class to
	// inherit functionalities from the Base World class and to initialize your PageManager and BasePage
	constructor({ attach, log, parameters, link }: IWorldOptions) {
		super({ attach, log, parameters, link }); // Pass the options to the world constructor
		this.pageManager = new PageManager(); // Initializing PageManager
		this.basePage = this.pageManager.createBasePage(); // Initializing BasePage
		this.homePage = this.pageManager.createHomePage(); // Initializing HomePage
		this.contactUsPage = this.pageManager.createContactUsPage(); // Initializing ContactUsPage
	}

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
