const express = require('express');
const PG = require('../backend/models/PG');
const { auth, admin } = require('../backend/middleware/auth');
const router = express.Router();

// Get all PGs
router.get('/', async (req, res) => {
  const pgs = await PG.find();
  res.json(pgs);
});

// Add new PG (admin only)
router.post('/', auth, admin, async (req, res) => {
  const pg = await PG.create({ ...req.body, createdBy: req.user._id });
  res.json(pg);
});

module.exports = router;