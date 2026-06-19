const mongoose = require("mongoose");

async function dbconnection(url) {
    mongoose.connect(url)
        .then(() => {
            console.log("mongoose connected")
        })
        .catch((err) => {
            console.log(err);
        })
};

module.exports = {dbconnection};
