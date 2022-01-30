const { expect, assert } = require('chai');
const app = require('../../caesar_cipher/cipher.js');

describe('Caesar Cipher', () => {
    it('should return a string', ()=> {
        expect(app('test string')).to.be.a('string');
    });

    it('should shift by 5 and return OJKK', ()=>{
        assert(app('jeff', 5), 'OJKK');
    });
});
