import flatten from './flat'

describe('flatten', () => {
  it('Returns empty array when given no arguments', () => {
    expect(flatten()).toStrictEqual([])
  })

  it('Returns matching array when given one argument', () => {
    expect(flatten(['hello'])).toStrictEqual(['hello'])
  })

  it('Concatenates multiple arrays', () => {
    expect(flatten([1, 2, 3, 4, 5], [6, 7, 8, 9])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
    expect(flatten(['hello'], ['darkness'], ['my', 'old', 'friend'])).toStrictEqual([
      'hello',
      'darkness',
      'my',
      'old',
      'friend'
    ])
  })
})
