const express = require('express');
const app = express();
const globalData = require('../../model/globalData');

app.get('/getVendorData/:id/:contact', async (req, res) => {
    const id = req.params.id;
    const email = req.params.contact;
    const user = await globalData.findOne({ vendorEmail: email });

    if (user) {
        const events = user.events;
        const event = events.find((event) => event._id == id);

        if (event) {
            res.send(event);
        } else {
            res.status(404).send('Event not found');
        }
    } else {
        res.status(404).send('User not found');
    }
});

module.exports = app;