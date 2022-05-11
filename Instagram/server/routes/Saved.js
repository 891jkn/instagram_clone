import express from "express";
import {Create,Delete} from "../controllers/SavedController.js";

const SavedRoute = express.Router()

SavedRoute.post('/create',Create)
SavedRoute.post('/delete',Delete)
export default SavedRoute