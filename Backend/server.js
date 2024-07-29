const express = require('express');
const mongoose = require('mongoose');
const server = require('./configs/server.config');
const db_config = require('./configs/db.config');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();


const app = express();
app.use(express.json());
app.use(cors());



// Connection with the MongoDB
mongoose.connect(db_config.DB_URL) ;

const db = mongoose.connection;

db.on('error', () => {
    console.log('Error while connecting to the MongoDB.');
});

db.once('open', () => {
    console.log('Connected to the MongoDB.');
});

app.get('/', (req, res) => {
    res.status(201).send('User Req Accepted.');
});

// // Stitch the route to the server
require('./routes/auth.route')(app);

// // Start the server
app.listen(server.PORT, () => {
    console.log("Server Started on the port:", server.PORT);
});
