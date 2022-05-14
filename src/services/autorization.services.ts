
import { Response , Request , } from "express"
import app from '../config';

import jwt from 'jsonwebtoken';

//data 
import { User } from "../db.static";

export const login =  (req:Request , resp:Response) => {
   const {user, password} = req.body ;
   const userfind = User.find(a => a.name === user && a.password === password); 
   console.log(userfind);
    if(userfind && !userfind.isActive){
        const token = jwt.sign(user , app.SECRET);
        resp.json({token});
    }
   else 
   resp.status(400).json({mensaje : "You are not authorized to log in with this user..."});
}

export const Autorization  = (req: Request , respo: Response , next:any) => { 
      const autheader = req.headers['authorization']
      const token =  String(autheader?.split(' ')[1])
         if(!token){
                respo.sendStatus(401)
         }
         else
         try {
            jwt.verify(token, app.SECRET)
             next()
         } catch (error) {
                respo.status(401).send({error})
         }
          
      }