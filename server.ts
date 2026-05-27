import express, {type Response, type Request} from 'express' 
import dotenv from 'dotenv'
const app = express()

dotenv.config()

app.listen(process.env.PORT,()=>{
    console.log("server is running :", process.env.PORT)
})

app.get('/',(_req: Request, res: Response)=>{
    return res.json({
        "status": "Successfully has running the server"
    })
})