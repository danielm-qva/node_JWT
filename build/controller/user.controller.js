"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blokUser = exports.addUser = exports.findOneUser = exports.listUser = void 0;
//data
var db_static_1 = require("../db.static");
var listUser = function (req, res) {
    setTimeout(function () {
        res.status(200).send({ User: db_static_1.User });
    }, 2000);
};
exports.listUser = listUser;
var findOneUser = function (req, res) {
    var idFund = parseInt(req.params['id']);
    var oneUser = db_static_1.User.find(function (a) { return a.id === idFund; });
    if (oneUser) {
        res.json({ oneUser: oneUser });
    }
    else
        res.status(404).json({ "Mensaje": "Resource not found" });
};
exports.findOneUser = findOneUser;
var addUser = function (req, res) {
    var _a = req.body, name = _a.name, password = _a.password;
    var objerUser = {
        id: db_static_1.User.length + 1,
        name: name,
        password: password,
        "isActive": false
    };
    db_static_1.User.push(objerUser);
    res.status(200).json({ objerUser: objerUser });
};
exports.addUser = addUser;
var blokUser = function (req, res) {
    var idFund = parseInt(req.params['id']);
    var oneUser = db_static_1.User.find(function (a) { return a.id === idFund; });
    if (oneUser) {
        db_static_1.User[oneUser.id - 1].isActive = true;
        res.status(204).send({ "mensaje": "Edit succes" });
    }
    else
        res.status(404).send({ "Mensaje": "Resource not found" });
};
exports.blokUser = blokUser;
