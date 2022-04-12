import {SearchUserByKey} from '../models/DB/SearchModel.js'
export const SearchUser = async(req,res)=>{
    const key = req.body.key;
    res.send(await SearchUserByKey(key))
}