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

exports.updateProduct = async(req, res) =>{
    try {
        const {id} = req.params;
        const updateProduct = await Product.findByIdAndUpdate(id, req.body, {new: true});

        if(!updateProduct){
            return res.status(404).send({isSuccess: false, message: "Product not found!"})
        }
        res.status(200).send({isSuccess: true, message: "Product update successfully!", product: updateProduct})
    } catch (error) {
        res.status(500).send({isSuccess: false, message: "Error updating product:", error: error.message})
    }
}