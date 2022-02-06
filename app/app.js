import express from 'express';
import cors from 'cors';

import userRouter from './routes/user.routes.js';
import cryptoRouter from './routes/crypto.routes.js';
import portfolioRouter from './routes/portfolio.routes.js';
import addCryptoRouter from './routes/addCrypto.routes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded( {extended: true} ))
app.use(cors()); 

app.use('/user', userRouter); 
app.use('/crypto', cryptoRouter);
app.use('/portfolio', portfolioRouter);
app.use('/addCrypto', addCryptoRouter);

export default app;