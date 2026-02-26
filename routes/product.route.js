const express = require("express");

const router = express.Router();

const {createProduct, getProducts, getProductsById, DeletedProduct, updateProduct} = require("../controllers/product.controller");

const {protect} = require("../middlewares/auth.middleware");

router.post("/add", createProduct);

router.get("/all", getProducts);

router.get("/single/:id", getProductsById);

router.put("/update/:id", protect, updateProduct);

router.delete("/:id", protect, DeletedProduct);


module.exports = router;
