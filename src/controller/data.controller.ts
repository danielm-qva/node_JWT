import { Response , Request } from "express"


const data = [
    {id : 1 ,
     description : "Desyuno",
     prioridad : "media" ,
      status : "incompleta"} 
    , 
    {id : 2 ,
    description: "Alarma para las 10 PM",
    prioridad: "alta" ,
       status: "complete"},
   {
    id : 3 ,
    description : "Bañarse",
    prioridad : "alta" ,
   status: "complete"
   }
   
]

export const getall =  (req: Request , res: Response) => {
       res.status(200).send(data);
}
