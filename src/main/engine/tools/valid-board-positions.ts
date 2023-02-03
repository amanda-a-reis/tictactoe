const hasDuplicates = (array: number[]): boolean => {
  return (new Set(array)).size !== array.length
}

const verifyValidBoardPositions = (board: number[], defaultPositions: number[]): boolean => {
  if (hasDuplicates(board)) return false
  return board.map((position: number) => defaultPositions.includes(position)).every((position: boolean) => position)
}

export { verifyValidBoardPositions }
