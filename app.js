import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';

const PORT = process.env.PORT || 3000;
const app = express();

import userRoute from './routes/user.js';
import eventRoute from './routes/event.js';


mongoose.connect(process.env.MONGOURL)
    .then(() => console.log('Connected!'));




app.use('/', userRoute);
app.use('/event', eventRoute);

app.get('/', async (req, res) => {
    res.send('Hello, World!');
})

app.use((err, req, res, next) => {
    console.log(err);
    res.send("Error came ");
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
