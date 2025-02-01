import doctorModel from "../doctor/doctor.schema.js"
import asyncHandler from "express-async-handler"
import bcrypt from "bcrypt"
import {v2 as cloudinary} from "cloudinary"
import { json } from "express"



export const addDoctor = asyncHandler(async (req, res , next) => {
    const {name , email , password  , speciality , degree , experience , about  , fees , address } = req.body;
    const imageFile = req.file

    if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address || !imageFile) {
       return res.status(400).json({message: "All fields are required"}) 
    }

    const hashPassword = await bcrypt.hash(password, 10);

    //upload image to cloudinary

    const uploadImage = await cloudinary.uploader.upload(imageFile.path, {responseType: "image"})
    const imageUrl = uploadImage.secure_url
    
    const doctorData = {
        name,
        email,
        password:  hashPassword,
        speciality,
        degree,
        experience,
        about,
        fees,
        address: JSON.parse(address),
        image: imageUrl,
        date : Date.now()
    }

    const doctor = new doctorModel(doctorData)
    await doctor.save()
    res.status(201).json({success: true , message: "Doctor added successfully" , doctor } )
})

    

