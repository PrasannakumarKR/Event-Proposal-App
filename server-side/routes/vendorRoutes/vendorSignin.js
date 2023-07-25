const express = require('express');
const app = express();
const vendorData = require('../../model/vendorData');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()

app.post('/signin', async (req, res) => {
    const { text, password } = req.body;
    let data = null;
    const isEmailExists = await vendorData.findOne({ email: text })
    const isMobileExists = await vendorData.findOne({ contact: text })
    if (isEmailExists) {
        data = isEmailExists;
    } else if (isMobileExists) {
        data = isMobileExists
    }
    if (data) {
        const isMatch = await bcrypt.compare(password, data.password);
        if (isMatch) {
            const payload = { username: data.username, email: data.email }
            const token = await jwt.sign(payload, process.env.SECRETKEY)
            res.send({ message: 'Welcome', success: true, token })
        } else {
            res.send({ message: 'Incorrect password', success: false })
        }
    } else {
        res.send({ message: 'User not found', success: false });
    }
})

module.exports = app