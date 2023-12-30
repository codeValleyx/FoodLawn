const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone:{
        type: String
    }
});

userSchema.plugin(passportLocalMongoose, {usernameField: 'email'});

module.exports = mongoose.model("User", userSchema);