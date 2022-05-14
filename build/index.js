"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// Rutas 
var login_router_1 = __importDefault(require("./router/login.router"));
var data_route_1 = __importDefault(require("./router/data.route"));
var user_route_1 = __importDefault(require("./router/user.route"));
//midelware autorization 
var autorization_services_1 = require("./services/autorization.services");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api', login_router_1.default);
app.use('/api', autorization_services_1.Autorization, data_route_1.default);
app.use('/admin', user_route_1.default);
app.listen(3000, function () {
    console.log('Server in runngi');
});
