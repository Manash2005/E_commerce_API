const mongoose = require("mongoose")


const productSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },

    description : {
        type : String,
        required : true
    },

    rating : {
        type : String,
        enum : ["1", "2", "3"],
        required : true
    }
})

productSchema.index({ title: 1, seller: 1 }, { unique: true });


const productModel = mongoose.model("product", productSchema)

module.exports = productModel