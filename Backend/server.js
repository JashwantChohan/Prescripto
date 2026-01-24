import express from 'express';
import cors from 'cors';
import connectDB from './config/mongodb.js';
import dotenv from "dotenv";
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminRoute.js';
import doctorRouter from './routes/doctorRoute.js';
import userRouter from './routes/userRoute.js';

dotenv.config();

const app = express();
const port = 4000;
await connectDB()
connectCloudinary()

app.use(express.json());
app.use(cors());

app.use('/api/admin', adminRouter);
app.use('/api/doctor', doctorRouter);
app.use('/api/user', userRouter);

app.get('/', (req, res) => {
    res.send('Api working fine');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 
