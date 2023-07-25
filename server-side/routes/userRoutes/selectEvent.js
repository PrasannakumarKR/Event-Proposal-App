const express = require('express');
const app = express();
const userSelect = require('../../model/userSelections');

app.post('/selectEvent', async (req, res) => {
    const data = req.body.data;
    const userEmail = req.body.userEmail;

    const isUserExist = await userSelect.findOne({ userEmail: userEmail });
    if (isUserExist) {
        isUserExist.selections.push(...data);
        isUserExist.save();
        res.send('Data updated');
    } else {
        userSelect.create({
            userEmail: userEmail,
            selections: [...data]
        }).then(() => {
            res.send('First Data Added');
        });
    }
});

module.exports = app;