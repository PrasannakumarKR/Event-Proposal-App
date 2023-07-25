const mongoose = require('mongoose');
const vendorLayout = mongoose.Schema({
    username: String,
    email: String,
    contact: String,
    password: String
})

module.exports = mongoose.model('vendorData', vendorLayout);