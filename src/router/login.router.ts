import { Router } from "express";

import { login, register } from "../services/autorization.services";

const loginRuter = Router();

loginRuter.post("/login", login);
loginRuter.post("/register", register);

export default loginRuter;
