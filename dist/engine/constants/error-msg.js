"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomNumberErrorMessages = exports.easyErrorMessages = void 0;
const easyErrorMessages = {
    invalidBoardPosition: 'Some given position is invalid or repeated',
    noMoreOptions: 'There is no more options of random numbers to generate'
};
exports.easyErrorMessages = easyErrorMessages;
const randomNumberErrorMessages = {
    minBiggerThanMax: 'Ops... min is bigger than max, but it needs to be smaller'
};
exports.randomNumberErrorMessages = randomNumberErrorMessages;
