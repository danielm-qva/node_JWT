
import express, { json } from 'express'

// Rutas 
import loginRuter from './router/login.router'
import routeData from './router/data.route'
import UserRouter from './router/user.route'

//midelware autorization 
import { Autorization } from './services/autorization.services';

const app = express();

app.use(express.json());

app.use('/api' ,  loginRuter);
app.use('/api', Autorization,  routeData);
app.use('/admin', UserRouter);


app.listen(3000,() => {
    console.log('Server in runngi')
})