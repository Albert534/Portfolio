const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./database'); // Your database connection module
const ServiceModel = require('./Service'); // Your Mongoose model
const ProjectModel = require('./ProjectModel'); // Your Mongoose model
connectDB(); // Connect to MongoDB

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    try {
        console.log('Fetching services...');
        const services = await ServiceModel.find();
        console.log('Fetched services:', services);
        res.json(services);
    } catch (err) {
        console.error('Error fetching services:', err);
        res.status(500).json({ error: err.message });
    }
});

app.get('/Projects', async (req, res) => {
    try {
        console.log('Fetching The data of the projects...');
        const projects = await ProjectModel.find();
        console.log("Fetched services", projects);
        res.json(projects);
    }
    catch (err) {
        console.log("Error Fetching the projects...", err);
        res.status(500).json({ error: err.message });
    }
})

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
