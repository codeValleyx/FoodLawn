const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
    {
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        order_id: {
            type: String,
            required: true
        },
        items: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: 'Item'
        },
        totalCost: Number,
        status: {
            type: String,
            enum: ['preparing', 'completed', 'delivered'],
            default: 'preparing'
        },
        payment_status: {
            type: String,
            enum: ['pending', 'failed', 'success'],
            default: 'pending'
        }

    }, {
        timestamps: true
    }
);

module.exports = mongoose.model('Order', orderSchema);