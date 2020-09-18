/* eslint no-invalid-this:0 */
"use strict";

const _ = require("lodash");

module.exports = example;

function example(examplesWithHeaders, body) {
	const headers = examplesWithHeaders[0];
	const examples = _.isArray(headers) ?
		examplesWithHeaders.slice(1) :
		examplesWithHeaders;

	examples.forEach(function (exple, index) {
		const headerValuePairs = _.isArray(exple) ?
			_.zip(headers, exple) :
			_.toPairs(exple);
		const pairsDescriptions = _.map(headerValuePairs, (headerValue) => {
			return `"${headerValue[0]}": ${_.truncate(JSON.stringify(headerValue[1]))}`;
		}).join(", ");
		const describePair = _.find(headerValuePairs, (headerValue) => {
			return headerValue[0] === "describe";
		});
		const describeMessage = describePair ? describePair[1] : `{ ${pairsDescriptions} }`;
		describe(`[${index}] with ${describeMessage}`, function () {
			beforeEach(function () {
				_.forEach(headerValuePairs, (headerValuePair) => {
					this[headerValuePair[0]] = headerValuePair[1];
				});
			});

			body();
		});
	});
}
