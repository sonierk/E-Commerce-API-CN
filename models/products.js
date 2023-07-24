const { default: mongoose } = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: {
        type:String,
        maxlength:[50,'Product name should not exceed 50 chars'],
        required:[true,'Product name cannot be empty'],
        trim:true,
    },
    quantity:{
        type:Number,
        default:0
    }
})

module.exports = mongoose.model('Products', ProductSchema)