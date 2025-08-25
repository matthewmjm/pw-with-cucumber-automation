// A simple Promise in TypeScript
let simplePromise = new Promise<string>((resolve, reject) => {
	// Simulate an asynchronous operation using setTimeout
	setTimeout(() => {
		// Randomly resolve or reject the promise
		let success = Math.random() > 0.5;
		if (success) {
			resolve("Promise resolved"); // Resolve the promise
		} else {
			reject("Promise rejected"); // Reject the promise
		}
	}, 2000); // 2000 milliseconds = 2 second
});

// An async function in TypeScript
async function simpleAsyncFunction() {
	// The 'async' keyword allows us to use 'await' inside this function.
	// 'await' makes JavaScript wait until the Promise is resolved or rejected.
	try {
		let value = await simplePromise; // Wait for the promise to resolve
		console.log(value); // Outputs: "Promise resolved" if resolved
	} catch (error) {
		console.error(error); // Outputs: "Promise rejected" if rejected
	}
}

// Call the async function
simpleAsyncFunction();
