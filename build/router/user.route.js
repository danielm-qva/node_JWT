"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cacheinit_1 = __importDefault(require("../cache/cacheinit"));
var user_controller_1 = require("../controller/user.controller");
var userRutas = (0, express_1.Router)();
userRutas.get('/', cacheinit_1.default.withTtl('1 hour'), user_controller_1.listUser);
userRutas.get('/:id', cacheinit_1.default.withTtl('1 hour'), user_controller_1.findOneUser);
userRutas.post('/', user_controller_1.addUser);
userRutas.put('/:id', user_controller_1.blokUser);
exports.default = userRutas;
