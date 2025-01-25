import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name: {type : String, required: true},
    email:{type : String, required: true , unique: true},
    password:{type : String, required: true},
    image: {type : String, required: true , default: ''},
    address : {type : Object, default: {line1:'',line2:''}}, 
    gender : {type : String, required: true},
    dob : {type : String, required: true},
    phone : {type : String, required: true},   
   
})
const userModel = mongoose.model('User', userSchema);

export default userModel