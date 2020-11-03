var assert = require('assert');
var spawn = require('child_process').spawn;
var exec = require('child_process').exec;
var fs = require('fs');

function run(params, assertFn, cb) {
	var prettierme = spawn('./prettierme', params);
	if (assertFn) {
		prettierme.stdout.on('data', assertFn);
		prettierme.stderr.on('data', assertFn);
	}
	cb && prettierme.on('close', cb);
}

function testSuccessLint() {
	console.log('> Fixed output on success linting');
	run(['test/fixtures/success.js'], function (data) {
		assert.equal(
			fs.readFileSync('test/fixtures/success.js').toString(),
			data.toString()
		);
	}, testErrorLint);
}

function testErrorLint() {
	console.log('> Correctly modifies issues on files');
	run(['test/fixtures/error.js'], function (data) {
		assert.equal(
			fs.readFileSync('test/fixtures/error.js').toString(),
			fs.readFileSync('test/fixtures/success.js').toString()
		);
	}, revertErrorFile);
}

function revertErrorFile() {
	exec('git checkout test/fixture/error.js', testStopprettierd);
}

function testStopprettierd() {
	console.log('> Successfully stops prettierd server');
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
			'Error: Not running\n',
			data.toString()
		);
	}, testStartprettierd);
}

function testStartprettierd() {
	console.log('> Should be able to start prettierd');
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
	}, testRestartprettierd);
}

function testRestartprettierd() {
	console.log('> Should be able to restart prettierd');
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

