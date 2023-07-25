const express = require('express');
const app = express();
const globalData = require('../../model/globalData');

app.get('/getproposals/:vendorEmail', async (req, res) => {
    const vendorEmail = req.params.vendorEmail
    const isEmailExists = await globalData.findOne({ vendorEmail: vendorEmail });
    if (isEmailExists) {
        res.send(isEmailExists.events);
    } else {
        res.send('');
    }
});

module.exports = app;