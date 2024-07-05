// config/database.js
const mongoose = require("mongoose");
require("dotenv").config();

const connect = () => {
    const dbURI = "mongodb+srv://sharit:sharit2846@cluster0.izwpjdz.mongodb.net/ClinicTime?retryWrites=true&w=majority&appName=Cluster0";

    if (!dbURI) {
        console.error("DATABASE_URL is not defined in the environment variables.");
        process.exit(1);
    }

    mongoose.connect(dbURI)
    .then(() => {
        console.log("DB connected successfully");
    })
    .catch((err) => {
        console.error("DB connection error:", err);
        process.exit(1);
    });
};

module.exports = connect;
