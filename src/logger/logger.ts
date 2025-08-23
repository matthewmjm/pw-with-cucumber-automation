import { transports, format, createLogger } from "winston";
import colors from "@colors/colors";

import dotenv from "dotenv";
dotenv.config({ path: "./env/.env" });

// Define custom format
const myFormat = format.printf(({ level, message, timestamp }) => {
	let colorizedMessage = String(message);
	switch (level) {
		case "error":
			colorizedMessage = colors.red(String(message));
			break;
		case "warn":
			colorizedMessage = colors.yellow(String(message));
			break;
		case "info":
			colorizedMessage = colors.green(String(message));
			break;
	}
	return `${timestamp} ${level}: ${colorizedMessage}`;
});

// Create logger instance
const logger = createLogger({
	level: process.env.LOG_LEVEL || "info",
	format: format.combine(format.timestamp(), myFormat),
	transports: [new transports.Console()],
});

export default logger;
