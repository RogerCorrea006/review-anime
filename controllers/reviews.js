const { insertReview } = require("../services/hasura")


module.exports = {
    async newReview(req, res) {
        try {

            const reviewData = req.body
            
            await insertReview(reviewData.name, parseInt(reviewData.score), reviewData.review)

            return res.status(200).json({
                success: true
            })
        } catch (error) {
            console.log(error.message)
            res.status(500).send({
                error: error.message
            })
        }
    }
}