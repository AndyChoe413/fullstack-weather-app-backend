const mongoose = require('mongoose')
const weatherSchema = new mongoose.Schema({
    city: {
        type: String,
    },
    country: {
        type: String,
    }
})

module.exports = mongoose.model("weather", weatherSchema)