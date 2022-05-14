"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Autorization = exports.login = void 0;
var config_1 = __importDefault(require("../config"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
//data 
var db_static_1 = require("../db.static");
var login = function (req, resp) {
    var _a = req.body, user = _a.user, password = _a.password;
    var userfind = db_static_1.User.find(function (a) { return a.name === user && a.password === password; });
    console.log(userfind);
    if (userfind && !userfind.isActive) {
        var token = jsonwebtoken_1.default.sign(user, config_1.default.SECRET);
        resp.json({ token: token });
    }
    else
        resp.status(400).json({ mensaje: "You are not authorized to log in with this user..." });
};
exports.login = login;
var Autorization = function (req, respo, next) {
    var autheader = req.headers['authorization'];
    var token = String(autheader === null || autheader === void 0 ? void 0 : autheader.split(' ')[1]);
    if (!token) {
        respo.sendStatus(401);
    }
    else
        try {
            jsonwebtoken_1.default.verify(token, config_1.default.SECRET);
            next();
        }
        catch (error) {
            respo.status(401).send({ error: error });
        }
};
exports.Autorization = Autorization;
