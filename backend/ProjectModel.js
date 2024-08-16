const mongoose = require('mongoose');
const ProjectSchema = new mongoose.Schema({
    project_title: String,
    project_description: String,
    project_link: String,

})


const ProjectModel = mongoose.model('Project', ProjectSchema, 'Projects')

module.exports = ProjectModel;