import { randomNumberErrorMessages } from '@main/engine/constants'

const randomNumber = (min: number, max: number): number => {
  if (min > max) throw new Error(randomNumberErrorMessages.minBiggerThanMax)
  return Math.floor(Math.random() * (max - min) + min)
}

export { randomNumber }
