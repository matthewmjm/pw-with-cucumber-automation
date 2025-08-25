"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const colors_1 = __importDefault(require("@colors/colors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: "./env/.env" });
// Define custom format
const myFormat = winston_1.format.printf(({ level, message, timestamp }) => {
    let colorizedMessage = String(message);
    switch (level) {
        case "error":
            colorizedMessage = colors_1.default.red(String(message));
            break;
        case "warn":
            colorizedMessage = colors_1.default.yellow(String(message));
            break;
        case "info":
            colorizedMessage = colors_1.default.green(String(message));
            break;
    }
    return `${timestamp} ${level}: ${colorizedMessage}`;
});
// Create logger instance
const logger = (0, winston_1.createLogger)({
    level: process.env.LOG_LEVEL || "info",
    format: winston_1.format.combine(winston_1.format.timestamp(), myFormat),
    transports: [new winston_1.transports.Console()],
});
exports.default = logger;
