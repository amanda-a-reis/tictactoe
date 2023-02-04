"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.excludeMovementsFromBoard = void 0;
const crescent = (a, b) => a - b;
const excludeMovementsFromBoard = (movements, board) => {
    return board.filter((position) => !movements.includes(position)).sort(crescent);
};
exports.excludeMovementsFromBoard = excludeMovementsFromBoard;
