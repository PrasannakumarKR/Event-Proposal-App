const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
require('dotenv').config()

app.get('/authcheck', async (req, res) => {
    const token = req.headers.token;
    const data = jwt.verify(token, process.env.SECRETKEY);
    if (data) {
        res.send({ message: 'Authroized user', data: data, success: true })
    } else {
        res.send({ message: 'UnAuthorized user', success: false })
    }
})

module.exports = app
