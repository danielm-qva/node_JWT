"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var data_controller_1 = require("../controller/data.controller");
var cacheinit_1 = __importDefault(require("../cache/cacheinit"));
var routeData = (0, express_1.Router)();
routeData.get('/data', cacheinit_1.default.withTtl('1 hour'), data_controller_1.getall);
exports.default = routeData;
