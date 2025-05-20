const mongoose = require('mongoose');
const { Schema } = mongoose;

const querySchema = new Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    queryType: { type: String, required: true, enum: ['General', 'Booking', 'Maintenance', 'Other'] },
    message: { type: String, required: true, trim: true },
    status: { type: String, enum: ['New', 'In Progress', 'Resolved'], default: 'New' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Query', querySchema);
