const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const userRoutes = require('./routes/user')

const app = express();


const port = process.env.PORT || 9000;

//middleware
app.use(express.json())
app.use((_, res , next) => {
    res.header('Access-Control-Allow-Origin', '*'); // NOSONAR
    res.header('Access-Control-Allow-Headers', '*'); // NOSONAR
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE'); // NOSONAR
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
app.use('/api', userRoutes)



//routes
app.get('/', (req, res) => {
    res.send('welcome to this connection')
})

//mongoDB connection

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDb Atlas and it is working'))
    .catch((error) => console.error(error))

app.listen(9000, () => console.log(`Listening on port ${port}`));