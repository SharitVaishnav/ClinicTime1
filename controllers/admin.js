const user  = require("../models/userRegistration");

exports.admin = async (req,res) => {
    const data = await user.find();
    
}