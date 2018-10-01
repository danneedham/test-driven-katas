const expect = require('chai').expect
const twoSum = require('./twoSum')

describe('twoSum', () => {
    it('returns an array', () => {
        expect(twoSum([1,2,3], 3)).to.be.a("array")
    })
    it('returns an empty array if passed an empty array', () => {
        expect(twoSum([])).to.eql([])
    })
    it('returns an empty array if no two numbers add to target', () => {
        expect(twoSum([1,2,3], 6)).to.eql([])
    })
    it('returns indices of two elements that add up to the target', () => {{
        expect(twoSum([1,2,3], 5)).to.eql([1,2])
    }})
})