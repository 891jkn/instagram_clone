import express from 'express'
import { GetUserProfile , GetUserSaved} from '../controllers/UserController.js'

const UserRoute = express.Router()

UserRoute.post('/getUserProfile',GetUserProfile)
UserRoute.post('/saved',GetUserSaved)
export default UserRoute