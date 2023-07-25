const express = require('express');
const app = express();
const globalData = require('../../model/globalData');

app.delete('/deleteevent/:id/:contact', async (req, res) => {
    const id = req.params.id;
    const email = req.params.contact;
    const user = await globalData.findOne({ vendorEmail: email });

    if (user) {
        const events = user.events;
        const updatedEvents = events.filter(event => event._id.toString() !== id)
        user.events = updatedEvents;
        await user.save();
        res.send({ message: 'Event deleted successfully', success: true });
    } else {
        res.send({ message: 'No Data', success: false });
    }
});

module.exports = app;