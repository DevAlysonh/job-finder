const express = require('express');
const router = express.Router();
const Job = require('../Models/Job');


router.get('/add', (req, res) => {
    res.render('create');
});

//Add job router
router.post('/add', (req, res) => {
    let {
        title,
        description,
        salary,
        company,
        email,
        new_job,
    } = req.body;

    //insertJob
    Job.create({
        title,
        description,
        salary,
        company,
        email,
        new_job
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err));
});

module.exports = router;