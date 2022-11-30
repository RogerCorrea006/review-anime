const {gql} = require('graphql-tag')

module.exports = {
    INSERT_REVIEW: `
    mutation insertReview($review: reviews_insert_input!) {
        insert_reviews_one(object: $review) {
          id
        }
    }`,
    GET_REVIEWS:`
    query getReviews{
      reviews {
        id
        name
        review
        score
      }
    }    
    `
}