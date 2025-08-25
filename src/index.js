"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: "./env/.env" });
// Setting a retry value from environment variables or defaulting to '0' or '1'
const parallelValue = process.env.PARALLEL || "1";
const retryValue = process.env.RETRY || "0";
// Define a common command string for running cucumber tests
const common = `./src/features/*.feature \
--require-module ts-node/register \
--require ./src/step-definitions/**/**/*.ts \
--require ./src/utils/cucumber-timeout.ts \
-f json:./reports/report.json \
--format html:./reports/report.html \
--parallel ${parallelValue} \
--retry ${retryValue} \
--tags 'not @ignore'`;
// Define a command strings for different test profiles
const profiles = {
    smoke: `${common} --tags "@smoke"`,
    regression: `${common} --tags @regression`,
    login: `${common} --tags @login`,
    contactUs: `${common} --tags @contact-us`,
};
// Get the third command-line argument and assign it to the profile
// i.e. smoke, regression etc
const profile = process.argv[2];
// Construct the command-line string based on the selected profile
// command is the full command to run the tests for the selected profile
let command = `npx cucumber-js ${profiles[profile]}`;
// Print the constructed command
//console.log("command: ", command);
// Execute the command
(0, child_process_1.exec)(command, { encoding: "utf-8" }, (error, stdout) => {
    // Log the output of the command
    console.log("stdout: ", stdout);
    // Check if there was an error during execution
    if (error) {
        // throw a new error with a simple message
        throw new Error("⚠️ 💥 Some automation test(s) have failed! - Please review. ⚠️ 💥");
    }
});
