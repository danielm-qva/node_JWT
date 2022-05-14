"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_expeditious_1 = __importDefault(require("express-expeditious"));
var cache = (0, express_expeditious_1.default)({
    namespace: 'expresscache',
    defaultTtl: '1 minute'
});
exports.default = cache;
