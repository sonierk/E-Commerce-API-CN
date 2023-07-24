const express = require('express')
const router = express.Router()
const {getAllProducts, getProduct, updateProduct, createProduct, deleteProduct} = require('../controllers/products')




router.route('/').get(getAllProducts)
router.route('/create').post(createProduct)

router.route('/:id').get(getProduct).patch(updateProduct).delete(deleteProduct)





module.exports = router