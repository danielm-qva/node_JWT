import { Response , Request } from "express"

//data
import { User } from '../db.static'

export const listUser = (req: Request , res: Response) => {
     setTimeout(() => {
          res.status(200).send({User});
     }, 2000);
}

export const findOneUser = (req: Request , res: Response) => {
    const idFund  = parseInt(req.params['id'])
        const oneUser = User.find(a => a.id === idFund)
        if(oneUser) {
             res.json({oneUser});
          }
          else
          res.status(404).json({"Mensaje" : "Resource not found"})
     
}

export const addUser = (req: Request , res: Response) => {
      const { name ,  password} = req.body ;
        const objerUser = { 
                id : User.length + 1, 
                 name,
                 password,
                 "isActive" : false
        } 
         User.push(objerUser)
        res.status(200).json({objerUser})
}

export const blokUser = (req: Request , res: Response) => {
     const idFund  = parseInt(req.params['id'])
     const oneUser = User.find(a => a.id === idFund)
    if(oneUser) {
              User[oneUser.id - 1].isActive = true
            res.status(204).send({"mensaje" : "Edit succes"})
          }
          else
           res.status(404).send({"Mensaje" : "Resource not found"})
}











