const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    email: {
        type:String,
        required: true,
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    List: [{
        type: mongoose.Types.ObjectId,
        ref: "list",
    }]

});

module.exports = mongoose.model("User",userSchema);