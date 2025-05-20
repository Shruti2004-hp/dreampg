const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const { body, validationResult } = require('express-validator');

router.post('/',
    [
        body('userId').trim().notEmpty().withMessage('User ID is required'),
        body('roomId').trim().notEmpty().withMessage('Room ID is required'),
        body('roomType').trim().isIn(['Single', 'Double', 'Deluxe']).withMessage('Invalid room type'),
        body('price').isFloat({ min: 0 }).withMessage('Valid price is required'),
        body('checkInDate').isISO8601().withMessage('Valid check-in date is required'),
        body('checkOutDate').isISO8601().withMessage('Valid check-out date is required')
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            req.body.checkInDate = new Date(req.body.checkInDate);
            req.body.checkOutDate = new Date(req.body.checkOutDate);
            const booking = new Booking(req.body);
            await booking.save();
            res.status(201).json({ message: 'Booking created successfully', booking });
        } catch (error) {
            res.status(500).json({ message: 'Error creating booking', error: error.message });
        }
    }
);

module.exports = router;
