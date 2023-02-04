"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyValidBoardPositions = void 0;
const hasDuplicates = (array) => {
    return (new Set(array)).size !== array.length;
};
const verifyValidBoardPositions = (board, defaultPositions) => {
    if (hasDuplicates(board))
        return false;
    return board.map((position) => defaultPositions.includes(position)).every((position) => position);
};
exports.verifyValidBoardPositions = verifyValidBoardPositions;
