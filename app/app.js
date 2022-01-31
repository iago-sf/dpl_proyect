import express from 'express';
import cors from 'cors';
import userRouter from './routes/user.routes.js';
const app = express();

app.use(express.json());
//app.use(express.urlencoded( {extended: true} ))
//app.use(cors);

app.use('/user', userRouter);

app.get('/', (req, res) => {
  console.log('working');
});

export default app;