var script = require('../src/script')
var assert = require('assert');

describe("script.js", function () {
    describe("helloworld()", function () {
        it("should be defined", function () {
            assert.ok(script.helloworld != undefined);
        });
        it("should return 'Hello, World!'", function () {
            assert.ok(script.helloworld() == "Hello, World!")
        });
    });
});
