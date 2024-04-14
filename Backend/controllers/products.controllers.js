const ProductModel = require('../models/products.models');

module.exports = {
    createProduct: async(req, res) => {
        try{
            const newProduct = new ProductModel(req.body);
            await newProduct.save();
            res.status(200).json("success")
        }catch(err){
            res.status(500).json(err)
        }
    },
    getAllProducts: async (req, res) => {
        try{
            const products = await ProductModel.find().sort({createdAt: -1});
            res.status(200).json(products)
        }catch(err){
            res.status(500).json(err)
        }
    },
    getProduct: async (req, res) => {
        try{
            const product = await ProductModel.findById(req.params.id);
            res.status(200).json(product)
        }catch(err){
            res.status(500).json(err)
        }
    },
    searchProduct: async (req, res) => {
        try{
            const result = await ProductModel.aggregate([
                {
                  $search: {
                    index: "products",
                    text: {
                      query: req.params.key,
                      path: {
                        wildcard: "*"
                      }
                    }
                  }
                }
              ])
              res.status(200).json(result)
        }catch(err){
            res.status(500).json(err)
        }
    },
}