const express = require('express')
const reviews = require('../controllers/reviews')
const router = express.Router()

router.get('/getReviews', (req, res) => {
    return res.status(200).json({
        id: 'eraeraerarsaeas',
        game: 'teste'
    })
})

router.post('/newReview', reviews.newReview)

module.exports = router