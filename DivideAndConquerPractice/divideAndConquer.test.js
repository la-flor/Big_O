const { countZeroes } = require("./divideAndConquer")

describe("countZeroes", function(){
  it("counts the number of zeroes given a sorted array of 1s before 0s", function(){
    expect(countZeroes([1, 1, 1, 1, 0, 0])).toBe(2)
    expect(countZeroes([1, 0, 0, 0, 0])).toBe(4)
    expect(countZeroes([0, 0, 0])).toBe(3)
    expect(countZeroes([1, 1, 1, 1])).toBe(0)
  })
})
