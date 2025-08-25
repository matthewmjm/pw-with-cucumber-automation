"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const browserContextFixture_1 = require("./hooks/browserContextFixture");
(0, cucumber_1.When)("I switch to the new browser tab", async function () {
    await this.basePage.switchToNewTab();
});
(0, cucumber_1.Given)("I wait for {int} seconds", async (seconds) => {
    await browserContextFixture_1.pageFixture.page.waitForTimeout(seconds * 1000);
});
