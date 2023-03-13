import getHighestNumber from './highest-number'

describe('getHighestNumber', () => {
  it('Returns highest value in array of length 1', () => {
    expect(getHighestNumber([42])).toBe(42)
  })

  it('Returns highest number in array sorted descending', () => {
    expect(getHighestNumber([3, 2, 1])).toBe(3)
  })

  it('Returns highest value in array sorted ascending', () => {
    expect(getHighestNumber([100, 1000, 2200])).toBe(2200)
  })

  it('Returns highest number in unsorted array', () => {
    expect(getHighestNumber([3, 7, 9, 5, 4, 6, 2, 11, 5])).toBe(11)
  })
})
