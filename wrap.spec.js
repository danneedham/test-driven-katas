const expect = require('chai').expect
const wrap = require('./wrap')

describe('wrap', () => {
    it('returns a string', () => {
        expect(wrap("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.", 20)).to.be.a("string")
    })
    it('returns an empty string if empty string passed', () => {
        expect(wrap("",1)).to.eql("")
    })
    it('wraps the string such that no line is longer than chars argument', () => {
        expect(wrap("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.", 20)).to.eql(
            "Lorem ipsum dolor\nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula.")
    })
    it('works even when num is greater than the string length', () => {
        expect(wrap("Dan", 12)).to.eql("Dan")
    })
})