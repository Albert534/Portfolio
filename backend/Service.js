const mongoose = require('mongoose');

// Define the schema for the Service model
const ServiceSchema = new mongoose.Schema({
    image: String,
    service: String,
    description: String,
});

const ServiceModel = mongoose.model('Service', ServiceSchema, 'Service'); // Explicitly specify the collection name

module.exports = ServiceModel;
