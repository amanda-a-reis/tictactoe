"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomNumber = void 0;
const constants_1 = require("@main/engine/constants");
const randomNumber = (min, max) => {
    if (min > max)
        throw new Error(constants_1.randomNumberErrorMessages.minBiggerThanMax);
    return Math.floor(Math.random() * (max - min) + min);
};
exports.randomNumber = randomNumber;
