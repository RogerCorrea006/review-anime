const express = require('express')
const reviews = require('../controllers/reviews')
const router = express.Router()

router.get('/getReviews', reviews.getReview)

router.post('/newReview', reviews.newReview)

module.exports = router