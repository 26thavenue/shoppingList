import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

const PORT = 5000;
const app = express();

app.use(express.json());

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
