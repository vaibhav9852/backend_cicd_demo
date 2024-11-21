import cors from 'cors'
import app from "./app"

const PORT : Number = 5005

app.use(cors({origin : '*'}))

app.listen(PORT,()=>{
    console.log('server started 5005')
})

