const express = require('express');
const router = express.Router();
const Query = require('../models/Query');
const { body, validationResult } = require('express-validator');

router.post('/',
    [
        body('name').trim().notEmpty().withMessage('Name is required'),
        body('email').trim().isEmail().withMessage('Valid email is required'),
        body('phone').trim().notEmpty().withMessage('Phone number is required'),
        body('queryType').trim().isIn(['General', 'Booking', 'Maintenance', 'Other']).withMessage('Invalid query type'),
        body('message').trim().notEmpty().withMessage('Message is required')
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const query = new Query(req.body);
            await query.save();
            res.status(201).json({ message: 'Query submitted successfully', query });
        } catch (error) {
            res.status(500).json({ message: 'Error submitting query', error: error.message });
        }
    }
);

module.exports = router;
