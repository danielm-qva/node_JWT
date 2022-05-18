
//mongoose 
import mongoose from 'mongoose'

const uri = "mongodb+srv://DanielM:DanielM@cluster0.0n7pv.mongodb.net/tests?retryWrites=true&w=majority";

const coneectioString1 = 'mongodb://mongo:jotXI0fWB6tyvvbX2EQN@containers-us-west-56.railway.app:6455/test?retryWrites=true&w=majority'

const connectMongooseDb = async () => {
       try {
            await mongoose.connect(coneectioString1)
            console.log("Mongoo Db connect")
       } catch (error) {
            console.log(error)
       }
}


export default connectMongooseDb ;