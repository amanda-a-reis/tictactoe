"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.random = void 0;
const easy_engine_1 = require("@main/engine/levels/easy/easy-engine");
const movementsDone = [];
const random = (0, easy_engine_1.easy)(movementsDone);
exports.random = random;
