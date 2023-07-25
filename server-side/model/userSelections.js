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

const userSelectSchema = mongoose.Schema({
    userEmail: String,
    selections: [eventSchema]
});

const userSelect = mongoose.model('userSelect', userSelectSchema);

module.exports = userSelect;