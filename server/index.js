import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import cors from 'cors';  // cross-origin resource sharing (cors)
import { userRoute } from './routes/userRoute.js';
import { residencyRoute } from './routes/residencyRoute.js';


dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;
 
app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.listen(PORT, ()=>{
    console.log(`Server running at port ${PORT}`)
})

app.use('/api/user',userRoute)
app.use('/api/residency',residencyRoute)

