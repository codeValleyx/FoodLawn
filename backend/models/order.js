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

    }, {
        timestamps: true
    }
);

module.exports = mongoose.model('Order', orderSchema);