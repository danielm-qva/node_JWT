import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
    dialect : "postgres",
    database: 'd8kk464p48rr3i',
    username : 'zgrranlfnhxvob',
    password : '311ca3145d6ec109a6819ac5e57cab32a849049f125aa9e93b8841c9058240bc',
    host : "ec2-52-86-115-245.compute-1.amazonaws.com",
    port : 5432,
    dialectOptions : {
        ssl : {
            require : true ,
            rejectUnauthorized: false
        }
    }
});

const connectionPostrege =async () => {
     try {
          await sequelize.authenticate().then(res => {
              console.log("Db runign");
        }).catch(error => {
            console.log(error)
        })
        
     } catch (error) {
         console.log(error);
     }
}

export default connectionPostrege;