const Router = require('express').Router();

const productControl = require('../controller/productControl.js');
// const upload = require('../middleware/product_upload.js');

Router.post('/upload_product',productControl.upload_product);
// Router.post('/upload_products',productControl.upload_products);

Router.get('/get_products',productControl.get_products);
Router.get(`/get_product/:id`,productControl.get_product);


module.exports = Router;