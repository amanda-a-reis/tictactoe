import { randomNumber, verifyValidBoardPositions, excludeMovementsFromBoard } from '@main/engine/tools'
import { invalidBoardPosition, noOptions } from '@main/engine/levels/easy/easy-erros'
import { defaultBoard } from '@main/engine/constants'

type RandomMovement = number

const easy = (movementsDone: number[]): RandomMovement => {
  if (!verifyValidBoardPositions(movementsDone, defaultBoard)) throw invalidBoardPosition

  const validMovements = excludeMovementsFromBoard(movementsDone, defaultBoard)

  if (validMovements.length === 0) throw noOptions

  const index = randomNumber(0, validMovements.length - 1)

  return validMovements[index]
}

export { easy }
