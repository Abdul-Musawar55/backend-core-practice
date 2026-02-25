const express = require("express");

const router = express.Router();

const {createProduct, getProducts, getProductsById, DeletedProduct} = require("../controllers/product.controller");

router.post("/add", createProduct);

router.get("/all", getProducts);

router.get("/single/:id", getProductsById);

router.delete("/:id", DeletedProduct);

module.exports = router;
