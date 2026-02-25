const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 3
    },
    category: {
        type: String
    }
}, {timestamps: true}) 

module.exports = mongoose.model("Product", productSchema);