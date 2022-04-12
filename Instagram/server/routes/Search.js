import express from 'express'
import {SearchUser} from '../controllers/SearchController.js'

const SearchRoute = express.Router()

SearchRoute.post('/searchUser',SearchUser)

export default SearchRoute