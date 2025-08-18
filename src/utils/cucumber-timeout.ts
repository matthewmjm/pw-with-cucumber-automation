import { setDefaultTimeout } from "@cucumber/cucumber";

// If too low, this will affect playwright timeouts
// Example exception:  'Error: function timed-out, ensure the promise resolves within 60 seconds
setDefaultTimeout(60000);
