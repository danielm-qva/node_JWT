import { Router } from "express";
import {
  listUser,
  findOneUser,
  updateUser,
  deleteUser,
} from "../controller/user.controller";

const userRutas = Router();

userRutas.get("/user", listUser);
userRutas.get("/user/:id", findOneUser);
userRutas.delete("/user/:id", deleteUser)
userRutas.patch("/user/:id", updateUser);

export default userRutas;
