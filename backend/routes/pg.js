const express = require('express');
const PG = require('../models/PG');
const { auth, admin } = require('../middleware/auth');
const router = express.Router();

// Get all PGs
router.get('/', async (req, res) => {
  try {
    const pgs = await PG.find();
    res.json(pgs);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching PGs' });
  }
});

// Add new PG (admin only)
router.post('/', auth, admin, async (req, res) => {
  try {
    const pg = await PG.create({ ...req.body, createdBy: req.user._id });
    res.status(201).json(pg);
  } catch (err) {
    res.status(400).json({ message: 'Error adding PG', error: err.message });
  }
});

module.exports = router;