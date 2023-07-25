const express = require('express');
const app = express();
const userData = require('../../model/userData');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()

app.post('/signin', async (req, res) => {
    const { text, password } = req.body;
    let data = null
    const isEmailExists = await userData.findOne({ email: text })
    const isMobileExists = await userData.findOne({ contact: text })
    if (isEmailExists) {
        data = isEmailExists;
    } else if (isMobileExists) {
        data = isMobileExists
    }

    if (data) {
        const password = req.body.password;
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