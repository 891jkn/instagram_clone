import express from 'express'
const HomeRoute = express.Router

HomeRoute.get('/',(req,res)=>{
    res.send('home')
})
export default HomeRoute;