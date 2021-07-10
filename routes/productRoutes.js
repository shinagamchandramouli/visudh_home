const Router = require('express').Router();


const productControl = require('../controller/productControl.js');
const fileUpload = require('express-fileupload');
// const upload = require('../middleware/product_upload.js');

Router.post('/upload_product',fileUpload({debug : true}),productControl.upload_product);
// Router.post('/upload_products',productControl.upload_products);

Router.get('/get_products',productControl.get_products);
Router.get(`/get_product/:id`,productControl.get_product);

Router.post('/delete_product',productControl.delete_product)


module.exports = Router;