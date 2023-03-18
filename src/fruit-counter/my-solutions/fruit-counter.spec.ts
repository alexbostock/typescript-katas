import countFruits from './fruit-counter'

describe('countFruits', () => {
  it('returns empty object in response to empty array', () => {
    expect(countFruits([])).toStrictEqual({})
  })

  it('counts unique fruits', () => {
    expect(countFruits(['🍋', '🍉', '🍒'])).toStrictEqual({
      '🍋': 1,
      '🍉': 1,
      '🍒': 1
    })
  })

  it('counts repeated fruits', () => {
    expect(countFruits(['🍋', '🍒', '🍉', '🍉', '🍒'])).toStrictEqual({
      '🍋': 1,
      '🍒': 2,
      '🍉': 2
    })
  })
})
