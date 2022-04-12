
import express from "express";
import bodyParser from "body-parser";
import cors from 'cors'
import mongoose from "mongoose";
const app = express()
const PORT = process.env.PORT || 5000
import AccountRoute from './routes/Account.js'
import PostRoute from './routes/Post.js'
import SearchRoute from './routes/Search.js'
// gioi han server truyen tai khoang 30mb
app.use(bodyParser.json({limit:"30mb"}))
app.use(bodyParser.urlencoded({extended:true,limit:'30mb'}))
// tat ca cac route ko register se ko nhan duoc
app.use(cors())

// register account route
app.use('/Account',AccountRoute)
app.use('/post',PostRoute)
app.use('/search',SearchRoute)
// connect to database 

const uri = 'mongodb+srv://khanhdaica:13122002@cluster0.eqs73.mongodb.net/instagram_clone?retryWrites=true&w=majority'

//  connect 
mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true}).then((result) => {
    console.log('db connected')
    app.listen(PORT,()=>{
        console.log('Server running')
    })
}).catch((err) => {
    console.log(err)
});
