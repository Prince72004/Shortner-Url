const mongoose = require("mongoose");

const urlschema = mongoose.Schema({
    shorturl: {
        type: String,
        required: true,
        unique: true
    },
    redirectedurl: {
        type: String,
        requied: true
    },
    viewhistory: [
      {
        timestamp: {
          type: Number,
        },
      },
    ],
  },
  { timestamps: true }
);


module.exports=mongoose.model("url",urlschema);