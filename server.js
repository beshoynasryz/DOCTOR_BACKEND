import express from 'express';
import bootStrap from './app.controller.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
bootStrap(app , express)
const PORT = process.env.PORT || 4000;
app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`);
    
})