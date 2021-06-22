const PRODUCT  = require('../models/productModel.js');
const path = require('path');
const {v4: uuid} = require('uuid')
const AWS =  require('aws-sdk')

require('dotenv').config();

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACESS_ID,
    secretAccessKey: process.env.AWS_SECRET_ACESS_KEY,
})

const productControl = {

    upload_product: async (req,res) => {
        try{
            const {name,category,price,company,shipping,description,stock,stars,reviews, keywords} = req.body;
            const title = uuid();
            const file = req.files.image;

            const params = {
                Bucket: process.env.AWS_BUCKET_NAME,
                Key: `${title}.${file.mimetype.split('/')[1]}`,
                Body: file.data,
                ContentType: file.mimetype
            }

            let image =  await new Promise ((resolve,reject)=>{
                    s3.upload(params, (err,data)=> {
                        if(err)  reject(err ? err : 'upload unsuccessful');
                        resolve(data.Location);
                    })
                })


            if(!image) res.status(500).json({
                msg: 'upload unsucessful'
            })

            console.log(image);

            const new_product = new PRODUCT({
                name,price,image,company,price,description,category,stars,reviews,shipping,stock,keywords
            })

            console.log(new_product);

            const saved_product = await new_product.save();

            if(!saved_product) return res.status(400).json({
                msg: 'something went wrong while saving product'
            })

            return res.status(200).json({
                product: saved_product
            })

        } catch(err) {
            res.status(500).json({
                error: err
            })
        }
    },

    upload_products: async (req,res) => {

    },

    get_product: async (req,res) => {

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