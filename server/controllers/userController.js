//this file will have controller functions for registration,login and logout
import userModel from '../models/userModel.js'
import bcrypt, { genSalt } from 'bcrypt'; //used to encrypt passwords
import jwt from 'jsonwebtoken' //for authentication

 const registerUser = async (req,res) => {
    try {
        //first it will request for body of(value of) name,email and password for registration
        const {name,email,password} = req.body;
        //jo request karyu ema koi e nagai kari ne details nahin naakhi to error aapvi padse.
        // jo koi e !name = name na nakhyu hoy, to
        if (!name || !email || !password){
           //json response return karvano. emaek object hase success property false, ane message ek error no
            return res.json({success:false, message:"Details Are Missing!!"});
        }
        //have else block. if ma details magi, jo mali gai to password encrypt karvo padse. 
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        //ave aa badho data database maa nakhvo padse. to ena mate na dhating

        const userData = {
            name,
            email,
            password: hashedPassword
        }

        const newUser = new userModel(userData)
        const user = await newUser.save();

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)
        //this id is auto generated in mongodb we are just taking it to create token of new user
        res.json({success:true,token,user:{name:user.name}})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
        
    }
}
//registration done, now login

 const loginUser = async (req,res) => {
    try {
        const {email,password} = req.body;
        const user = await userModel.findOne({email})

        if(!user) {
            return res.json({success:false,message:"No User Found!Please Register First!"})
        }
        const isMatch = await bcrypt.compare(password,user.password)
        if(isMatch) {
            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)
            res.json({success:true, token, user:{name:user.name}})
        }
        else {
            return res({success:false,message:"Wrong Password!"})
        }

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
        
    }

}

// const userCredits = async (req,res) => {
//     try{
//         const {userId} = req.body
//         //we need this userid in the body. but we will not take it directly, but using middleware
//         //reason is security. when need to understand more, copy paste this try block in chatgpt
//         const user = await userModel.findById(userId)
//         res.json({success:true,
//             credits:user.creditBalance,
//             user: {name: user.name}
//         })
         
//     } catch (error) {
//         console.log(error.message)
//         res.json({success:false, message:error.message})

//     }

// }
const userCredits = async (req, res) => {
    try {
      const userId = req.userId;
      const user = await userModel.findById(userId);
  
      res.json({
        success: true,
        credits: user.creditBalance,
        user: { name: user.name },
      });
    } catch (error) {
      console.error(error.message);
      res.json({ success: false, message: error.message });
    }
  };
  
  
export {loginUser,registerUser,userCredits}




 