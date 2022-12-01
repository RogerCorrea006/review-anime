async function getReview(){

    const headers = {
        "content-type": "application/json",
        "x-hasura-admin-secret" : 123
    };

    const graphqlQuery = {
        "operationName": "getReviews",
        "query": `query getReviews{
            review {
              id
              name
              review
              score
            }
          } `,
        "variables": {}
    };

    const options = {
        "method": "POST",
        "headers": headers,
        "body": JSON.stringify(graphqlQuery)
    };

    fetch('http://localhost:7540/v1/graphql', options).then((res) => { 
        console.log(res)
        return res.json()
    }).then((data) => {
        console.log(data)
    })
}

window.onload = () => {
    getReview()
}