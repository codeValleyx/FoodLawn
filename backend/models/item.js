const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    shop: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Shop'
    },
    img: {
        type: String
    },
    status: {
        type: String,
        enum: ['avaialbe', 'unavailable'],
        default: 'available'
    }
});

module.exports = mongoose.model('Item', itemSchema);