import { Router } from "express";
import {
  listUser,
  findOneUser,
  updateUser,
} from "../controller/user.controller";

const userRutas = Router();

userRutas.get("/user", listUser);
userRutas.get("/user/:id", findOneUser);
userRutas.patch("/user/:id", updateUser);

export default userRutas;
