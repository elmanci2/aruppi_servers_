import {Router} from "express"
import { server_intersection } from "../controllers/controllers"

const rout =  Router() 

rout.get("/" , (req , res) => {
    res.send("hello word")
})
rout.get("/get-ink", server_intersection);


export default rout