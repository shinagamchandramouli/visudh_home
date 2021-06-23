const PRODUCT  = require('../models/productModel.js');
const path = require('path');
const uploadImagesToAws = require('../utils/helper.js')



const productControl = {

    upload_product: async (req,res) => {
        try{
            const {name,category,price,company,shipping,description,stock,stars,reviews, keywords} = req.body;
            let files = req.files.images;

            if(!files.length) {
                files = [files];
            }

            let images = await uploadImagesToAws(files);
            
            if(images.length !== files.length){
                return res.status(400).json({
                    msg: 'uploading went wrong'
                })
            }

            const new_product = new PRODUCT({
                name,price,images,company,price,description,category,stars,reviews,shipping,stock,keywords
            })

            // console.log(new_product);

            const saved_product = await new_product.save();

            if(!saved_product) return res.status(400).json({
                msg: 'something went wrong while saving product'
            })

            return res.status(200).json({
                product: saved_product
            })

        } catch(err) {
            res.status(500).json({
                error: err ?  err  : 'something wrong man'
            })
        }
    },

    upload_products: async (req,res) => {

    },

    get_product: async (req,res) => {

        try{
            const _id = req.params.id;
            const product = await PRODUCT.findOne({_id});

            if(!product) return res.status(400).json({
                msg: 'invalid id'
            })

            return res.status(200).json({
                product
            })

        } catch(err) {
            return res.status(500).json({
                error: err
            })
        }
    },

    get_products: async (req,res) => {

        try{
            const products = await PRODUCT.find({});

            return res.status(200).json({
                products : [...products]
            })

        } catch(err) {
            return res.status(500).json({
                error: err
            })
        }

    }
}

module.exports = productControl;