const Product = require("../models/product.model");

exports.createProduct = async(req, res)=> {
    const {title, price, category} = req.body;

    if(!title || !price || !category){
        res.status(400).send({isSuccess: false, message: "All fields are required!"})
    }
    try {
        const newProduct = await Product.create({title, price, category})
        res.status(200).send({isSuccess: true, data: newProduct})
    } catch (error) {
        res.status(500).send({isSuccess: false, message:"Server Error", error: error.message})
    }
}

exports.getProducts = async(req, res) => {
    const products = await Product.find();
    res.json(products);
}

exports.getProductsById = async(req, res) => {
    const product = await Product.findById(req.params.id)
    res.json(product)
}

exports.DeletedProduct = async(req, res) =>{
    await Product.findByIdAndDeleted(req.params.id)
    res.json({message: "Product Deleted!"})
}