const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./routes/user.js');

const app = express();
const PORT = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use('/api', userRoutes);

//routes
app.get('/', (req, res) => {
    res.send('welcome to my API');
});

//mongoDB connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('connected to MongoDB Atlas'))
    .catch((error) => console.log(error));

app.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`);
});