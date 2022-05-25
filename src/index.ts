
import express from 'express'
import cors from 'cors';

// Rutas 
import loginRuter from './router/login.router'
import routeData from './router/data.route'
import UserRouter from './router/user.route'


//midelware autorization 
import { Autorization } from './services/autorization.services';

import connectionPostrege from './db.postgres';
connectionPostrege();

const app = express();
app.use(cors())

app.use(express.json());

app.use('/api' ,  loginRuter);
// app.use('/api', Autorization,  routeData);
app.use('/api', Autorization ,  UserRouter);

const PORT = process.env.PORT || 3000

app.listen(PORT,() => {
    console.log('Server in runngi')
})