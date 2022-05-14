import { Router } from "express";
import {getall} from '../controller/data.controller'
import cache  from '../cache/cacheinit' 

const routeData = Router();


routeData.get('/data', cache.withTtl('1 hour') , getall );

export default routeData;