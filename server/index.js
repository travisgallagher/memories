// @ts-nocheck
import express from 'express'; 
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'; 
import dotenv from 'dotenv';

dotenv.config();  

import postRoutes from './routes/posts.js'; 
const app = express(); 
const CONNECTION_URL = process.env.DB_CONNECTION; 
app.use('/posts', postRoutes); 

app.use(bodyParser.json({limit:"30mb", extended: true})); 
app.use(bodyParser.urlencoded({limit:"30mb", extended: true})); 
app.use(cors()); 



const PORT = process.env.PORT || 3001; 
mongoose.connect(CONNECTION_URL).then(()=>{
    app.listen(PORT,() => console.log('Server is running'))
}) .catch((error) => console.log(error.message));
