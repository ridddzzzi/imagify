import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    name: {type:String, required:true},
    email: {type:String, required:true, unique:true},
    password: {type:String,required:true},
    creditBalance: {type:Number,default:5},
 })

 const userModel = mongoose.models.user ||  mongoose.model("user",userSchema)

 //this will basically search first for the user, if it finds user then its okau=y, if ot doesnot finds any user, only then it will
 //create that new user in the Schema

  export default userModel;