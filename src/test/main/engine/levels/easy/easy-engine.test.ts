import { easy } from '@main/engine/levels/easy/easy-engine'
import { defaultBoard, easyErrorMessages } from '@main/engine/constants'

describe('easy', () => {
  it('Should test if easy generate a valid random moviment', () => {
    const movementsDone = [1, 2]
    const randomMovement = easy(movementsDone)
    const validMovements = [3, 4, 5, 6, 7, 8, 9]
    const isValidRandom = validMovements.includes(randomMovement)
    expect(isValidRandom).toBe(true)
  })
  it('Should test if return a valid value when an empty movementsDone is provided', () => {
    const movementsDone: number[] = []
    const randomMovement = easy(movementsDone)
    const isValidRandom = defaultBoard.includes(randomMovement)
    expect(isValidRandom).toBe(true)
  })
  it('Should test if it generate a especific number when it is the only one possible', () => {
    const movementsDone = [1, 2, 3, 4, 5, 6, 7, 8]
    const randomMovement = easy(movementsDone)
    expect(randomMovement).toBe(9)
  })
  it('Should test if throw an error when an invalid movementsDone is provided', () => {
    const movementsDone = [1, 2, 10]
    try {
      easy(movementsDone)
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
      expect(error).toHaveProperty('message', easyErrorMessages.invalidBoardPosition)
    }
  })
  it('Should test if throw an error when there are repeated values in movementsDone', () => {
    const movementsDone = [1, 5, 2, 1]
    try {
      easy(movementsDone)
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
      expect(error).toHaveProperty('message', easyErrorMessages.invalidBoardPosition)
    }
  })
  it('Should test if throw an error when there is no more available options', () => {
    const movementsDone = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    try {
      easy(movementsDone)
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
      expect(error).toHaveProperty('message', easyErrorMessages.noMoreOptions)
    }
  })
})
