import {Router} from "express"
import { server_intersection } from "../controllers/controllers"

const rout =  Router() 

rout.get("/" , (req , res) => {
    res.send("hello word")
})
rout.get("/get-link", server_intersection);


export default rout