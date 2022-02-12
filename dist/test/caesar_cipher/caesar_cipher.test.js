"use strict";
var _a = require('chai'), expect = _a.expect, assert = _a.assert;
var app = require('../../caesar_cipher/cipher.js');
describe('Caesar Cipher', function () {
    it('should return a string', function () {
        expect(app('test string')).to.be.a('string');
    });
    it('should shift by 5 and return OJKK', function () {
        assert(app('jeff', 5), 'OJKK');
    });
});
