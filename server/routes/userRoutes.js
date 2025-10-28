import express from 'express'
import {registerUser,loginUser, userCredits} from '../controllers/userController.js'
import userAuth from '../middlewares/auth.js'

const userRouter = express.Router()
// we need to create endpoint for this api and provide controller function for the endpoint


// so /register is endpoint path and controller function regiserUser will be executed

//same for login
userRouter.post('/register',registerUser) 
userRouter.post('/login',loginUser)
userRouter.post('/credits',userAuth,userCredits)
//in order to execute the userredits controller function, we need user id. and to get user id, we need the middleware
//so adding the middleware befire the userCredits controller




export default userRouter

//api routes

// http://localhost:3000/api/user/register
// http://localhost:3000/api/user/login