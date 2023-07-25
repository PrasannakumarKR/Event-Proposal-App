const express = require('express');
const app = express();
const globalData = require('../../model/globalData');


app.post('/createevent', async (req, res) => {
    const vendorEmail = req.body.vendorEmail;
    const isUserExists = await globalData.findOne({ vendorEmail });
    const newEvent = req.body.events[0]; // Assuming only one event is sent in the request

    if (isUserExists) {
        isUserExists.events = [...isUserExists.events, newEvent];
        isUserExists.save();
        res.send('Event added successfully');
    } else {
        globalData.create({
            vendorEmail: req.body.vendorEmail,
            events: req.body.events
        })
            .then(() => {
                res.send('First event added successfully');
            })
            .catch((err) => {
                console.log(err);
                res.status(500).send('Error occurred');
            });
    }
});


module.exports = app