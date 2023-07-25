const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    id: String,
    eventName: String,
    placeOfEvent: String,
    proposalType: String,
    eventType: String,
    budget: String,
    from: String,
    to: String,
    description: String,
    images: [String],
    FoodPreferences: String,
    Events: String,
    contact: String,
    vendorName: String
});

const globalDataSchema = mongoose.Schema({
    vendorEmail: String,
    events: [eventSchema]
});

const GlobalData = mongoose.model('GlobalData', globalDataSchema);

module.exports = GlobalData;