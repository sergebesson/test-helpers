/* eslint no-invalid-this:0 */
"use strict";

const _ = require("lodash");
const sinon = require("sinon");
const expect = require("./chai.js").expect;

module.exports = spyOnService;

function spyOnService(name, service) {
	beforeEach(function () {
		_.forEach(service, (value, key) => {
			if (!_.isFunction(value)) {
				return;
			}
			service[key]._returnValue = `${name}.${key}.returnValue`;
			sinon.stub(service, key);
			service[key].callsFake(function () {
				service[key]._onSuccess = _.get(_.last(arguments), "onSuccess");
				return service[key]._returnValue;
			});
			service[key].successWith = function () {
				expect(service[key]._onSuccess).to.be.a(
					"function",
					"context.onSuccess should be a function",
				);
				return service[key]._onSuccess.apply(null, arguments);
			};
		});

		this[name] = service;
	});

	afterEach(function () {
		_.forEach(this[name], (value, key) => {
			this[name][key].restore();
		});
	});
}
