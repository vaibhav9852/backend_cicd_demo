import express, {Application , Request, Response , NextFunction} from "express"
import {router as userRoute} from "./routes/users.route"

const app : Application = express()

app.use('/users',userRoute)

app.get('/',(req:Request,res:Response,next:NextFunction) : void=>{
       res.json({messgae:'Home Page'})
})

export default app ;     