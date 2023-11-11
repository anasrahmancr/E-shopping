import express from 'express';
import connectDB from './config/database.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/user.js';
import productsRoutes from './routes/products.js';

const app = express();
dotenv.config();
connectDB();

app.use(express.json());
app.use(cookieParser());

app.use('/api/user', userRoutes);
app.use('/api/products', productsRoutes);
const PORT = 3000;
app.listen(process.env.PORT || PORT, () => console.log("Server connected to Port 3000...")
)