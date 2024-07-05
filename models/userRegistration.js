const mongoose = require("mongoose");

const userRegistration = mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    number : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    date : {
        type : String,
        required : true,
    },
})

module.exports = mongoose.model("user",userRegistration);