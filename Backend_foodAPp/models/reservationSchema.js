import mongoose  from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
firstName:{
type:String,
required:true,
minLength:[3,"First name must be at least 3 characters long"],
maxLength:[20,"First name must be at most 20 characters long"],
},
lastName:{
type:String,
required:true,
minLength: [3, "Last name must be at least 3 characters long"],
  maxLength: [20, "Last name must be at most 20 characters long"],
},
email:{
type:String,
required:true,  

validate:[validator.isEmail,"Please provide a valid email"],
},

phoneNumber:{
type:String,
required:true,  
minLength:[11,"phone number must be at most 11 numbers long"],
maxLength:[11,"phone number must be at most 11 numbers long"],
},
time:{
 type:String,
required:true,     
},
date:{
 type:String,
required:true     
}

})

export const Reservation = mongoose.model("Reservation", reservationSchema);