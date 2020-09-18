/* eslint no-invalid-this:0 */
"use strict";

const sinon = require("sinon");

module.exports = function (_chai) {
	const Assertion = _chai.Assertion;
	Assertion.addMethod("lookLike", function (like) {
		this.assert(
			sinon.match(like).test(this._obj),
			"expected #{this} to look like #{exp} but got #{act}",
			"expected #{this} to not look like #{act}",
			like,
			this._obj,
			true,
		);
	});
};
