"use strict";

module.exports = {
	coverageProvider: "v8",
	// setupFiles: [
	// 	`@undercut/config/jest/jest.setup.node.js`,
	// ],
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
	// transform: {
	// 	"\\.(c|m)?js$": `@undercut/config/jest/babel_jest_transformer.cjs`
	// },
};
