const crescent = (a: number, b: number): number => a - b

const excludeMovementsFromBoard = (movements: number[], board: number[]): number[] => {
  return board.filter((position: number) => !movements.includes(position)).sort(crescent)
}

export { excludeMovementsFromBoard }
