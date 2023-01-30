import { Router } from "express";
import { getall } from "../controller/data.controller";

const routeData = Router();

routeData.get("/data", getall);

export default routeData;
