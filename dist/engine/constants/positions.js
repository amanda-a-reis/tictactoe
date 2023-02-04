"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visualDefaultBoard = exports.defaultBoard = void 0;
const defaultBoard = Array.from({ length: 9 }, (value, index) => ++index);
exports.defaultBoard = defaultBoard;
const visualDefaultBoard = `
1 | 2 | 3
---------
4 | 5 | 6
---------
7 | 8 | 9
`;
exports.visualDefaultBoard = visualDefaultBoard;
