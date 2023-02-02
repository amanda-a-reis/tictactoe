import { sum } from '@main/math/arithmetic'

describe('Sum method', () => {
  it('Should test the sum method', () => {
    const ELEVEN = sum(10, 1)
    expect(ELEVEN).toBe(11)
  })
})
