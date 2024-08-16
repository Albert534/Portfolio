require("dotenv").config();
const mongoose = require("mongoose");

const url = process.env.MONGO_DB;

const connectDB = async () => {

    try {
        await mongoose.connect(url);
        console.log("MongoDB connected successfully");

    }

    catch (error) {
        console.log("MongoDB is getting an error: " + error.message);
    }

}

module.exports = connectDB;