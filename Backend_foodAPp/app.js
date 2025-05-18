import express from 'express'
import cors  from 'cors'
import dotenv from 'dotenv'
import {db} from './db/db.js'
import { middlewareError } from './error/errorHandling.js'
import router from './routes/reservationRoute.js'


const app= express()
dotenv.config({ path :"./config/config.env"});
app.use(
    cors({
origin:[process.env.FRONTEND_URL],
methods:["POST"],
credentials:true
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
db();
app.use(middlewareError);
app.use('/api/v/reservation',router);
export default app