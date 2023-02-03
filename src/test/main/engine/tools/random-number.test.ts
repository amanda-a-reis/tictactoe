import { randomNumber } from '@main/engine/tools'
import { randomNumberErrorMessages } from '@main/engine/constants'

describe('randomNumber', () => {
  it('Should test if randomNumber returns a number between 0 and 8', () => {
    const random = randomNumber(0, 8)
    const isValidRandomNumber = random >= 0 && random <= 8
    expect(isValidRandomNumber).toBe(true)
  })
  it('Should test if randomNumber returns the same value as min and max when they are equal', () => {
    const random = randomNumber(0, 0)
    expect(random).toBe(0)
  })
  it('Should test if randomNumber throw error if min > max', () => {
    try {
      randomNumber(3, 1)
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
      expect(error).toHaveProperty('message', randomNumberErrorMessages.minBiggerThanMax)
    }
  })
})
