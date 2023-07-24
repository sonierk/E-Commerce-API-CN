const Product = require('../models/products')

const getAllProducts = async (req, res) => {
    try {
        const product = await Product.find({})
        res.status(200).json({ product })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json({ success:true, data:product })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}


const getProduct = async (req, res) => {
    try {
        const { id: productID } = req.params
        const product = await Product.findOne({ _id: productID })
        if (!product) {
            return res.status(404).json({ msg: 'Product ID not found' })
        }
        res.status(200).json({ product })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id: productID } = req.params
        const product = await Product.findByIdAndDelete({ _id: productID })
        if (!product) {
            return res.status(404).json({ msg: 'Product ID not found' })
        }
        res.status(200).json({ success: true, data: { product } })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const updateProduct = async (req, res) => {
    try {
        const { id: productID } = req.params
        const product = await Product.findByIdAndUpdate({ _id: productID }, req.body, {
            new: true,
            runValidators: true
        })
        if (!product) {
            return res.status(404).json({ msg: 'Product ID not found' })
        }
        res.status(200).json({ success: true, data: { product } })

    } catch (error) {
        res.status(500).json({ msg: error })

    }
}

module.exports = {
    getAllProducts,
    createProduct,
    updateProduct,
    getProduct,
    deleteProduct,
}

