import express from 'express'
import mongoose from 'mongoose'
import userRoutes from './routes/user.route.js'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js'
dotenv.config()
mongoose.connect(process.env.MONGODB)
.then(()=>{console.log('Mongodb connected')})
.catch((err)=>{console.log(err)})
const app = express();
app.use(express.json());
app.listen(3000,()=>{console.log('server is running on port 3000')});
app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes)