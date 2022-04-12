import express, { Router } from "express";
import {GetFriendPosts,CreateNewPost,GetAllPost,Like,Unlike,CreateComment} from  '../controllers/PostController.js'
const PostRoute = express.Router()
PostRoute.post('/create',CreateNewPost)
PostRoute.post('/getAll',GetAllPost)
PostRoute.post('/like',Like)
PostRoute.post('/unlike',Unlike)
PostRoute.post('/createComment',CreateComment)
export default PostRoute;