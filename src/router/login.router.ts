import { Router } from "express";

import { login} from '../services/autorization.services' ;

const loginRuter = Router();

loginRuter.post('/login' , login )

export default loginRuter;