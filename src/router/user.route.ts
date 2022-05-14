import { Router } from "express";
import cache  from '../cache/cacheinit' 

import { listUser , findOneUser, addUser , blokUser} from '../controller/user.controller';


const userRutas = Router()

userRutas.get('/', cache.withTtl('1 hour') ,listUser)
userRutas.get('/:id', cache.withTtl('1 hour'), findOneUser)
userRutas.post('/', addUser )
userRutas.put('/:id' , blokUser)


export default userRutas;