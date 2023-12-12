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
    }
});

module.exports = mongoose.model('Shop', shopSchema);