import express from 'express'
import { LoginController ,Register} from '../controllers/AccountController.js';
const AccountRoute = express.Router();

AccountRoute.post('/login',LoginController)
AccountRoute.get('/',(req,res)=>{
    res.send('hello')
})
AccountRoute.post('/Register',Register)
export default AccountRoute;