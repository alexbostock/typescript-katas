import filterEven from './filter-even'

describe('filterEven', () => {
  it('Returns empty array in response to empty array', () => {
    expect(filterEven([])).toStrictEqual([])
  })

  it('Returns shallow copy of an array of all even numbers', () => {
    expect(filterEven([0, 8, 4, 6, 10])).toStrictEqual([0, 8, 4, 6, 10])
  })

  it('Returns empty array when given all odd numbers', () => {
    expect(filterEven([1, 3, 11, 105])).toStrictEqual([])
  })

  it('Returns only even numbers from the given array', () => {
    expect(filterEven([1, 2, 6, 14, 13, 7])).toStrictEqual([2, 6, 14])
  })
})
