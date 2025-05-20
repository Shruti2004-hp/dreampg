const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookingSchema = new Schema({
    userId: { type: String, required: true },
    roomId: { type: String, required: true },
    roomType: { type: String, required: true, enum: ['Single', 'Double', 'Deluxe'] },
    price: { type: Number, required: true },
    checkInDate: { type: Date, required: true },
    checkOutDate: { type: Date, required: true },
    status: { type: String, enum: ['Pending', 'Confirmed', 'Cancelled'], default: 'Pending' },
    paymentStatus: { type: String, enum: ['Pending', 'Completed'], default: 'Pending' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', bookingSchema);
