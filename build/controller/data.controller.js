"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getall = void 0;
var data = [
    { id: 1,
        description: "Desyuno",
        prioridad: "media",
        status: "incompleta" },
    { id: 2,
        description: "Alarma para las 10 PM",
        prioridad: "alta",
        status: "complete" },
    {
        id: 3,
        description: "Bañarse",
        prioridad: "alta",
        status: "complete"
    }
];
var getall = function (req, res) {
    res.status(200).send(data);
};
exports.getall = getall;
