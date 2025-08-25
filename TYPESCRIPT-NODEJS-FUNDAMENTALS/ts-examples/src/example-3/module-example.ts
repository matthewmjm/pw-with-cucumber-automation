// Import module
import { readFile } from "fs";

// Read a text file
// readFile('TYPESCRIPT=NODEJS_FUNDAMENTALS/ts-examples/src/example-3/example.txt', 'utf8', (err, data) => {
readFile("/Users/matthewmalecki/Development/udemy/gianni-bruno/pw-with-cucumber/playwright-automation-framework/TYPESCRIPT-NODEJS-FUNDAMENTALS/ts-examples/src/example-3/example.txt", "utf8", (err, data) => {
	if (err) {
		console.error("Error reading file: ", err.message);
	} else {
		console.log("File Content: ");
		console.log(data);
	}
});
