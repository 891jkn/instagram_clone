import express from 'express'
import { LoginController ,Register} from '../controllers/AccountController.js';
const AccountRoute = express.Router();

AccountRoute.post('/login',LoginController)

AccountRoute.post('/Register',Register)
AccountRoute.get('/',(req,res)=>{
    res.send('hello')
})
export default AccountRoute;