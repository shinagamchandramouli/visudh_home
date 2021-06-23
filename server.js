const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');

// configurations
require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(fileUpload({
    debug : true
}));


// Routing
app.use('/show', express.static('product_images'));
app.use('/products', require('./routes/productRoutes.js'));

app.get('/', (req,res)=> {
    res.status(200).json({
        msg: "Deployed sucessfully"
    })
})


// Database connection

const ATLAS_URI = process.env.ATLAS_URI;
mongoose.connect(ATLAS_URI, {
    useNewUrlParser : true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

mongoose.connection.once("open", ()=>{
    console.log('Database connection established');
})

// creating a server
const PORT = process.env.PORT || 5050;
app.listen(PORT, ()=> {
    console.log('server listening at PORT:'+ PORT);
})