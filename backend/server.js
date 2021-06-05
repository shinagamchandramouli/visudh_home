const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

//Configuration
require('dotenv').config();
app.use(express.json());
app.use(cors());

// Routing
app.use('/user', require('./routes/userRoutes'));
app.post('/', (req,res) => {
    res.send("hello");
} )

// Database connection
const atlas_uri = process.env.ATLAS_URI;
mongoose.connect(atlas_uri, {
    useNewUrlParser : true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const db_connection = mongoose.connection;
db_connection.once("open", ()=>{
    console.log("Database connection is established");
})



// creating a server
const port = process.env.PORT || 5000;
app.listen(port, (req,res)=> {
    console.log('Server is running at port '+ port);
})