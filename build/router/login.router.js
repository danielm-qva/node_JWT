"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var autorization_services_1 = require("../services/autorization.services");
var loginRuter = (0, express_1.Router)();
loginRuter.post('/login', autorization_services_1.login);
exports.default = loginRuter;
