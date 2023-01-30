import { Response, Request } from "express";

import jwt from "jsonwebtoken";

//Model data
import User from "../Models/user.model";

import doenv from "dotenv";
doenv.config();

export const login = async (req: Request, resp: Response) => {
  try {
    const { email, password } = req.body;
    const userfind = await User.findOne({
      where: {
        email,
        password,
      },
    });
    if (userfind && !userfind.getDataValue("isActive")) {
      const token = jwt.sign(
        String(userfind.getDataValue("email")),
        String(process.env.ACCES_TOKEN)
      );
      resp.json({ token });
    } else
      resp.status(400).json({
        mensaje: "You are not authorized to log in with this user...",
      });
  } catch (error) {
    resp.status(500).json({
      mensaje: "You are not authorized to log in with this user...",
      error,
    });
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const { name, lastName, email, password } = req.body;
    const useradd = await User.create({ name, lastName, email, password });
    if (useradd) {
      res.status(200).json({ useradd });
    } else
      res.status(500).json({ message: "An error has occurred", data: useradd });
  } catch (error) {
    res.status(500).json({ message: "Something goes wrong", data: {} });
  }
};

export const Autorization = (req: Request, respo: Response, next: any) => {
  const autheader = req.headers["authorization"];
  const token = String(autheader?.split(" ")[1]);
  if (!token) {
    respo.sendStatus(401);
  } else
    try {
      jwt.verify(token, String(process.env.ACCES_TOKEN));
      next();
    } catch (error) {
      respo.status(401).send({ error });
    }
};
