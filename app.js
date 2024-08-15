import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'

const PORT = process.env.PORT || 3000;
const app = express();


mongoose.connect(process.env.MONGOURL)
    .then(() => console.log('Connected!'));


app.get('/', async (req, res) => {
    res.send('Hello, World!');
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})