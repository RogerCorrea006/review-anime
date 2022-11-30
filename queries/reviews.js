module.exports = {
    INSERT_REVIEW: `
    mutation insertReview($review: reviews_insert_input!) {
        insert_reviews_one(object: $review) {
          id
        }
    }`
}