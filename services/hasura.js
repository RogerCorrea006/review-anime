const { INSERT_REVIEW, GET_REVIEWS } = require("../queries/reviews");
const dotenv = require("dotenv");
const { print } = require("graphql-tag");

dotenv.config();

const axios = require("axios").default;

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
                    "x-hasura-admin-secret": 123,
                },
            }
        );

        if (responseHasura.data.errors)
            throw new Error(responseHasura.data.errors[0].message);

        return responseHasura.data;
    } catch (error) {
        console.log(error.message);
        throw new Error(error.message);
    }
}

module.exports = {
    async insertReview(name, score, review) {
        try {
            const insertReviewData = await hasuraRequest({
                query: INSERT_REVIEW,
                variables: {
                    review: {
                        name: name,
                        score: score,
                        review: review,
                    },
                },
            });
        } catch (error) {
            console.log(error.message);
            throw new Error(error.message);
        }
    },
    async getReviews() {
        try {
            const getReviewsData = await hasuraRequest({
                query: GET_REVIEWS,
            });

            console.log(getReviewsData);
            return getReviewsData.data;
        } catch (error) {
            console.log(error.message);
            throw new Error(error.message);
        }
    },
};
