import express from 'express';
import homeRoute from './routes/home.js';

const app = express();
const port = 8080;


app.use('/', homeRoute);
app.use('/home', homeRoute);


app.listen(port, () => {
    console.log('Server is running.')
})