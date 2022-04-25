import express from 'express'
import { GetUserProfile } from '../controllers/UserController.js'

const UserRoute = express.Router()

UserRoute.post('/getUserProfile',GetUserProfile)
export default UserRoute