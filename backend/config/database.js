const mongoose = require("mongoose");
require("dotenv").config()

module.exports = ()=>{
    mongoose.connect(process.env.MONGO_URI).then(
        ()=>{
            console.log("connected to database");
        }
    ).catch((err)=>{
            console.log("Cant connect to database");
            console.log(err);
    }) 
} 