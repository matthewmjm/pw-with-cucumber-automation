"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
// Load env variables from .env file
const dotenv_1 = require("dotenv");
const env = (0, dotenv_1.config)({ path: "./env/.env" });
const customTimeout = parseInt(env.parsed?.CUCUMBER_CUSTOM_TIMEOUT || "60000");
// If too low, this will affect playwright timeouts
// Example exception:  'Error: function timed-out, ensure the promise resolves within 60 seconds
(0, cucumber_1.setDefaultTimeout)(customTimeout);
