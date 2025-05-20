const mongoose = require('mongoose');

const pgSchema = new mongoose.Schema({
  name: String,
  address: String,
  rooms: Number,
  price: Number,
  description: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('PG', pgSchema);