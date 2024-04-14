const route = require('express').Router();
const productController = require('../controllers/products.controllers')

route.get('/', productController.getAllProducts)
route.get('/:id', productController.getProduct)
route.get('/search/:key', productController.searchProduct)
route.post('/', productController.createProduct)

module.exports = route;