const mongoose = require("mongoose");

const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then((response) => {
            console.log("Database connected")
        })
        .catch((error) => {
            console.log("Error connecting to Mongo")
        });
}

module.exports = dbConnection;