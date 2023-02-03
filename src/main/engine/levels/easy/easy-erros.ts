import { easyErrorMessages } from '@main/engine/constants'

class InvalidBoardPositionError extends Error {
  constructor (message: string) {
    super(message)
    this.name = 'InvalidBoardPosition'
  }
}

const invalidBoardPosition = new InvalidBoardPositionError(easyErrorMessages.invalidBoardPosition)

class NoOptionsError extends Error {
  constructor (message: string) {
    super(message)
    this.name = 'NoOptions'
  }
}

const noOptions = new NoOptionsError(easyErrorMessages.noMoreOptions)

export { invalidBoardPosition, noOptions }
