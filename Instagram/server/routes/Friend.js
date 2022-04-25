import express from 'express'
import { AddNewFriend,UnFriend } from '../controllers/FriendController.js'

const FriendRoute = express.Router()

FriendRoute.post('/addFriend',AddNewFriend)
FriendRoute.post('/unFriend',UnFriend)
export default FriendRoute