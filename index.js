const express = require('express');
const app = express()
const port = 5001
const cors = require('cors');
const router = require('./Routes/route')
const db = require('./db/connect')
const path = require('path');
require('dotenv').config();

// Middleware
app.use(cors());
app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/v1', router);

const start = async () => {
    try {
        await db(process.env.MONGO_URI)
        app.listen(port, console.log(`server is walking....on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()
