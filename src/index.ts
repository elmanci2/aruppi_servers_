import  Express  from "express";
import rout from "./routes/routes";
import cors from  "cors"
import { config } from "./config/config";
import { log } from "console";

const app  = Express()
const PORT = config.server.port

app.use(rout)
app.use(cors)
app.use(Express.json())

app.listen( PORT , () => {
	log(`app listen  on port:${PORT}`)
})

