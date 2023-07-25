const mongoose = require('mongoose');
const userLayout = mongoose.Schema({
    username:String,
    email:String,
    contact:String,
    password:String
})

module.exports = mongoose.model('userData', userLayout);
