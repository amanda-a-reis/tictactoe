"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noOptions = exports.invalidBoardPosition = void 0;
const constants_1 = require("@main/engine/constants");
class InvalidBoardPositionError extends Error {
    constructor(message) {
        super(message);
        this.name = 'InvalidBoardPosition';
    }
}
const invalidBoardPosition = new InvalidBoardPositionError(constants_1.easyErrorMessages.invalidBoardPosition);
exports.invalidBoardPosition = invalidBoardPosition;
class NoOptionsError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NoOptions';
    }
}
const noOptions = new NoOptionsError(constants_1.easyErrorMessages.noMoreOptions);
exports.noOptions = noOptions;
