const mongoose = require("mongoose");

const shopSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    menu: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Item'
    },
    status: {
        type: String,
        enum: ['Open', 'Closed'],
        default: 'Open'
    }
});

module.exports = mongoose.model('Shop', shopSchema);