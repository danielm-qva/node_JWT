import { Response, Request } from "express";

import User from "../Models/user.model";

export const listUser = async (req: Request, res: Response) => {
  const UserList = await User.findAll();
  res.status(200).send({ UserList });
};

export const findOneUser = async (req: Request, res: Response) => {
  try {
    const idFund = parseInt(req.params["id"]);
    const oneUser = await User.findOne({ where: { id: idFund } });
    if (oneUser) {
      res.status(200).json({ data: oneUser });
    } else {
      res.status(404).json({ Mensaje: "Resource not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Something goes wrong", data: {} });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params["id"]);
    const Userdelete = await User.destroy({
      where: { id },
    });
    res
      .status(204)
      .json({ message: "User Delete succesfully", count: Userdelete });
  } catch (error) {
    res.status(500).json({ message: "Something goes wrong", data: {} });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const oneUSer = await User.findAll({
      where: {
        id: req.params["id"],
      },
    });
    await oneUSer[0].update(req.body);
    res.status(200).json({ message: "User updata succesfully" });
  } catch (error) {
    res.status(500).json({ message: "Something goes wrong", data: {} });
  }
};

export const test = () => {};
