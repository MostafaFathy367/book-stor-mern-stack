import express from 'express';
// import { PORT, MONGO_DB_URL } from './config.js';
import 'dotenv/config';
import mongoose from 'mongoose';
import booksRouters from './routes/book.routes.js';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors())

app.get('/', (req, res) => {
  res.status(200).send("Welcome to MERN Stack")
})

app.use('/api/books', booksRouters);


mongoose.connect(process.env.MONGO_DB_UR).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`listening on ${process.env.PORT}`);
  })
});