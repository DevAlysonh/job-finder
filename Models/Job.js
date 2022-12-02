const Sequelize = require('sequelize');
const database = require('../database/connection');

const Job = database.define('job', {
    title: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.STRING,
    },
    salary: {
        type: Sequelize.STRING,
    },
    company: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
    new_job: {
        type: Sequelize.INTEGER,
    },
});

module.exports = Job;
