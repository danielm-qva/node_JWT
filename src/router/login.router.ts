import { Router } from "express";
import { body } from "express-validator";
import { login, register } from "../services/autorization.services";
import { handleValidation } from "../utils/handeValidations";

const loginRuter = Router();

loginRuter.post("/login",
    [
        body("email")
            .exists().withMessage("Email not exists")
            .notEmpty().withMessage("Email is not empty")
            .isString().withMessage("Email is not string"),
        body("password")
            .isAlphanumeric().withMessage("Any char has to be Alphanumeric")
            .exists().withMessage("Password not exists")
            .notEmpty().withMessage("Password is not Empty")
            .isString().withMessage("Password is not String")
    ],
    handleValidation, login);
loginRuter.post("/register", [
    body("name")
        .exists().withMessage("Email not existe")
        .notEmpty().withMessage("Email is empty").
        isString().withMessage("Name not is String").
        isLength({ min: 5, max: 10 }).withMessage("This range length is 5 min and 10 max"),
    body("email")
        .exists()
        .isEmail()
        .notEmpty()
        .isString(),
    body("lastName")
        .exists().withMessage("lastName not exists")
        .notEmpty().withMessage("latName is not empty")
        .isString().withMessage("lastName is not String")
        .isLength({ min: 5, max: 10 }).withMessage("this range length is 5 min and 10 max"),
    body("password")
        .exists().withMessage("password is no exists")
        .notEmpty().withMessage("passwors  not empty")
        .isString().withMessage("password not string")
        .isAlphanumeric().withMessage("Password is one string whit ")
], handleValidation, register);

export default loginRuter;
