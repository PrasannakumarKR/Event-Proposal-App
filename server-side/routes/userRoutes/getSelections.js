const express = require('express');
const app = express();
const userSelections = require('../../model/userSelections')

app.get('/getselections/:email', async (req, res) => {
    const email = req.params.email
    const userData = await userSelections.findOne({ userEmail: email });
    res.send(userData?.selections)
})


module.exports = app