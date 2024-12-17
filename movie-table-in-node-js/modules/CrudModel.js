const mongoose = require("mongoose")

const crudeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    discription: {
        type: String,
        require: true
    }
})
const user = mongoose.model("movie", crudeSchema);
module.exports = user