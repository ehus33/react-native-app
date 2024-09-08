const express = require('express');
const router = express.Router();
const Issue = require('../models/Issue');

router.post('/report', async (req, res) => {
    const { description, location } = req.body;
    
    try {
        const newIssue = new Issue({
            description,
            location
        });
        await newIssue.save();
        res.status(201).json({ message: 'Issue reported successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error reporting issue' });
    }
});

router.get('/issues', async (req, res) => {
    try {
        const issues = await Issue.find();
        res.status(200).json(issues);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching issues' });
    }
});

module.exports = router;
