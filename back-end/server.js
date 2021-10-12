import dotenv from 'dotenv';
import db from './db/dbconection.js'
import Express from 'express'
import Cors from 'cors';

db()



const app = Express();
dotenv.config({ path: './.env' });


app.use(Cors())
app.use(Express.json())



const PORT= process.env.PORT;
app.listen(PORT)
console.log(`Server running on port ${PORT}`)