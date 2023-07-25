const express = require('express');
const app = express();
const globalData = require('../../model/globalData');

app.get('/getallevents', async (req, res) => {
  try {
    const allEvents = await globalData.find(); // Retrieve all events from the collection
    // Push all events into a single variable
    const allEventsArray = allEvents.reduce((eventsArray, vendor) => {
      return eventsArray.concat(vendor.events);
    }, []);
    res.send(allEventsArray); // Send the modified response with all events
  } catch (error) {
    console.error('Error retrieving all events:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = app;