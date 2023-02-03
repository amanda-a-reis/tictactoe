"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.easy = void 0;
const tools_1 = require("@main/engine/tools");
const easy_erros_1 = require("@main/engine/levels/easy/easy-erros");
const constants_1 = require("@main/engine/constants");
const easy = (movementsDone) => {
    if (!(0, tools_1.verifyValidBoardPositions)(movementsDone, constants_1.defaultBoard))
        throw easy_erros_1.invalidBoardPosition;
    const validMovements = (0, tools_1.excludeMovementsFromBoard)(movementsDone, constants_1.defaultBoard);
    if (validMovements.length === 0)
        throw easy_erros_1.noOptions;
    const index = (0, tools_1.randomNumber)(0, validMovements.length - 1);
    return validMovements[index];
};
exports.easy = easy;
