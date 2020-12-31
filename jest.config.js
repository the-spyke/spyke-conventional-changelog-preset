"use strict";

module.exports = {
	testEnvironment: "node",
	testMatch: [
		"**/*.test.*.?(c|m)js",
		"**/*.test.?(c|m)js",
	],
	testPathIgnorePatterns: [
		"/build/",
		"/coverage/",
		"/dist/",
		"/node_modules/",
		"\\.config\\.(c|m)?js",
	],
};
