var assert = require('assert');
var exec = require('child_process').spawn;
var fs = require('fs');

function run(params, assertFn, cb) {
	var eslintme = exec('./eslintme', params);
	if (assertFn) {
		eslintme.stdout.on('data', assertFn);
		eslintme.stderr.on('data', assertFn);
	}
	cb && eslintme.on('close', cb);
}

function testSuccessLint() {
	console.log('> No output on success linting');
	run(['test/fixtures/success.js'], function (data) {
		assert.equal(
			'',
			data.toString()
		);
	}, testErrorLint);
}

function testErrorLint() {
	console.log('> Successfully outputs errors on linting');
	run(['test/fixtures/error.js'], function (data) {
		assert(
			data.toString().indexOf(
				fs.readFileSync('test/fixtures/error-result').toString()
			) > -1
		);
	}, testStopEslintd);
}

function testStopEslintd() {
	console.log('> Successfully stops eslint_d server');
	run(['stop'], function (data) {
		assert.equal(
			'',
			data.toString()
		);
	}, testStoppedStatus);
}

function testStoppedStatus() {
	console.log('> Status should indicate not running server');
	run(['status'], function (data) {
		assert.equal(
			'Not running\n',
			data.toString()
		);
	}, testStartEslintd);
}

function testStartEslintd() {
	console.log('> Should be able to start eslint_d');
	run(['start'], function (data) {
		assert.equal(
			'',
			data.toString()
		);
	}, testStartedStatus);
}

function testStartedStatus() {
	console.log('> Status should be running');
	run(['status'], function (data) {
		assert.equal(
			'Running\n',
			data.toString()
		);
	}, testRestartEslintd);
}

function testRestartEslintd() {
	console.log('> Should be able to restart eslint_d');
	run(['restart'], function (data) {
		assert.equal(
			'',
			data.toString()
		);
	}, finishTests);
}

function finishTests() {
	run(['stop']);
}

testSuccessLint();

