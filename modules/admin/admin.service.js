import doctorModel from "../doctor/doctor.schema.js"
import asyncHandler from "express-async-handler"


export const addDoctor = asyncHandler(async (req, res , next) => {
    const {name , email , password  , speciality , degree , experience , about  , fees , address} = req.body;
    const imageFile = req.file
  


})