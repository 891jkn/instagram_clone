import express from 'express'
import { AddNewFriend,UnFriend ,GetFollowingSuggest} from '../controllers/FriendController.js'

const FriendRoute = express.Router()
FriendRoute.get('/',(req,res)=>{
    res.send("hello")
})
FriendRoute.post('/addFriend',AddNewFriend)
FriendRoute.post('/unFriend',UnFriend)
FriendRoute.get('/getFollowingSuggest/:userId',GetFollowingSuggest)
export default FriendRoute