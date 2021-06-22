const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    stars: {
        type: Number,
        required: true
    },
    reviews: {
        type: Number,
        default: 0
    },
    shipping: {
        type: Boolean,
        required: true
    },
    stock : {
        type: Number,
        required: true
    },
    keywords: {
        type: [String]
    }
})

const PRODUCT = mongoose.model("Product",productSchema);
module.exports = PRODUCT;