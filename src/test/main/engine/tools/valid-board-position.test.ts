import { verifyValidBoardPositions } from '@main/engine/tools'
import { defaultBoard } from '@main/engine/constants'

describe('verifyValidBoardPositions', () => {
  it('Should test if returns a correct board position for each element in a given board', () => {
    const board = [1, 5, 6, 9]
    const isValidBoard = verifyValidBoardPositions(board, defaultBoard)
    expect(isValidBoard).toBe(true)
  })
  it('Should test if returns true when board is empty', () => {
    const boardEmpty: number[] = []
    const isValidBoard = verifyValidBoardPositions(boardEmpty, defaultBoard)
    expect(isValidBoard).toBe(true)
  })
  it('Should test if returns a incorret board position at some element > 9', () => {
    const boardIncorrect = [1, 5, 6, 9, 11]
    const isValidBoard = verifyValidBoardPositions(boardIncorrect, defaultBoard)
    expect(isValidBoard).toBe(false)
  })
  it('Should test if returns a incorret board position at some element < 1', () => {
    const boardIncorrect = [-5, 1, 5, 6, 9, 11]
    const isValidBoard = verifyValidBoardPositions(boardIncorrect, defaultBoard)
    expect(isValidBoard).toBe(false)
  })
  it('Should test if returns false when board has repeated values', () => {
    const boardRepeated: number[] = [1, 2, 3, 1, 5]
    const isValidBoard = verifyValidBoardPositions(boardRepeated, defaultBoard)
    expect(isValidBoard).toBe(false)
  })
})
