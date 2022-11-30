const { INSERT_REVIEW } = require('../queries/reviews');
const dotenv = require('dotenv')

dotenv.config()

const axios = require('axios').default

async function hasuraRequest({ query, variables }) {

    try {

        const responseHasura = await axios.post(
            process.env.HASURA_URL,
            {
                query,
                variables,
            },
            {
                headers: {
                    "content-type": "application/json",
                },
            }
        );
    
        if(responseHasura.data.errors) throw new Error(responseHasura.data.errors[0].message)
    } catch (error) {
        console.log(error.message)
        throw new Error(error.message)
    }
    
}
module.exports = {
    async insertReview(name, score, review){
        try {
            const insertReviewData = await hasuraRequest({
                query: INSERT_REVIEW,
                variables: {
                    review: {
                        name: name,
                        score: score,
                        review: review
                    }
                }
            })

        } catch (error) {
            console.log(error.message)
            throw new Error(error.message)
            
        }
    }
}