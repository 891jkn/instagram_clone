import express from 'express'
import { LoginController ,Register,GetUser} from '../controllers/AccountController.js';
const AccountRoute = express.Router();

AccountRoute.post('/login',LoginController)

AccountRoute.post('/Register',Register)
AccountRoute.get('/',(req,res)=>{
    res.send('hello')
})
AccountRoute.post('/GetUser',GetUser)
export default AccountRoute;