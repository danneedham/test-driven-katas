const expect = require('chai').expect
const {shortest, longestCommonPrefix} = require('./longestCommonPrefix')

describe('shortest', () => {
    it('returns a string', () => {
        expect(shortest(['foobar', 'foo', 'foolish'])).to.be.a("string")
    })
    it('returns the shortest string in the array', () => {
        expect(shortest(['foobar', 'foo', 'foolish'])).to.eql('foo')
    })
})

describe('longestCommonPrefix', () => {
    it('returns a string', () => {
        expect(longestCommonPrefix(['foobar', 'foo', 'foolish'])).to.be.a("string")
    })
    it('returns the longest common prefix', () =>{
        expect(longestCommonPrefix(['foobar', 'foo', 'foolish'])).to.eql("foo")
        expect(longestCommonPrefix(['apple','amish','all','appreciate'])).to.eql('a')
    })
})


