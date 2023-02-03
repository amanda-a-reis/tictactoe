import { excludeMovementsFromBoard } from '@main/engine/tools'
import { defaultBoard } from '@main/engine/constants'

describe('excludeMovementsFromBoard', () => {
  it('Should test if returns the correct excluded numbers', () => {
    const movements = [1, 2, 5]
    const result = excludeMovementsFromBoard(movements, defaultBoard).join('')
    expect(result).toBe('346789')
  })
  it('Should test if returns the correct excluded numbers in crescent order', () => {
    const movementsRandomOrder = [3, 9, 1, 5]
    const result = excludeMovementsFromBoard(movementsRandomOrder, defaultBoard).join('')
    expect(result).toBe('24678')
  })
  it('Should test if returns empty when elements of both arrays are equal', () => {
    const movementsEqual = [2, 1, 3, 4, 9, 6, 7, 8, 5]
    const result = excludeMovementsFromBoard(movementsEqual, defaultBoard).join('')
    expect(result).toBe('')
  })
  it('Should test if returns all elements if movements array is empty', () => {
    const movementsEmpty: number[] = []
    const result = excludeMovementsFromBoard(movementsEmpty, defaultBoard).join('')
    expect(result).toBe('123456789')
  })
  it('Should test if do not return incorrect elements in movements array', () => {
    const movementsIncorrect = [0, 1, 2, 3, 10, -5]
    const result = excludeMovementsFromBoard(movementsIncorrect, defaultBoard).join('')
    expect(result).toBe('456789')
  })
})
