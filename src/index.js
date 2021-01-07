"use strict";

const getParserOpts = require("./get_parser_opts.js");
const getWriterOpts = require("./get_writer_opts.js");
const getRecommendedBumpOpts = require("./get_recommended_bump_opts.js");

// No async function here because Lerna has buggy detection in resolveConfigPromise().
module.exports = function getChangelogPreset(config = {}) {
	let finalizer = result => result;

	if (typeof config === "function") {
		const cb = config;

		finalizer = result => cb(undefined, result);
		config = {};
	} else if (typeof config !== "object") {
		throw new Error("Invalid config parameter type in preset factory.");
	}

	const parserOpts = getParserOpts(config);
	const recommendedBumpOpts = getRecommendedBumpOpts(config);

	return getWriterOpts(config).then(writerOpts => ({
		conventionalChangelog: { parserOpts, writerOpts },
		parserOpts,
		recommendedBumpOpts,
		writerOpts,
	})).then(finalizer);
};
