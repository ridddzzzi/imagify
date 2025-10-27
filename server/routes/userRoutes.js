import express from 'express'
import {registerUser,loginUser} from '../controllers/userController.js'

const userRouter = express.Router()
// we need to create endpoint for this api and provide controller function for the endpoint

userRouter.post('/register',registerUser) 
// so /register is endpoint path and controller function regiserUser will be executed

//same for login

userRouter.post('/login',loginUser)

export default userRouter

//api routes

// http://localhost:3000/api/user/register
// http://localhost:3000/api/user/login