const productModel = require("../models/product.model")

async function getProducts(req, res){

    const products = await productModel.find()

    return res.status(200).json({
        message : "fetched all the products",
        products
    })


}