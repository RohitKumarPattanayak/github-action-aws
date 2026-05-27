import express, {type Response, type Request} from 'express' 
import dotenv from 'dotenv'
const app = express()

dotenv.config()

app.listen(3000,()=>{
    console.log("server is running :", 3000)
})

app.get('/',(_req: Request, res: Response)=>{
    return res.json({
        "status": "Successfully completed a node cicd pipeline to ec2"
    })
})