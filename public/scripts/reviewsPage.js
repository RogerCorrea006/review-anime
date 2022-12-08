async function getReview(){

    const headers = {
        "content-type": "application/json",
        "x-hasura-admin-secret" : 123
    };

    const graphqlQuery = {
        "operationName": "getReviews",
        "query": `query getReviews{
            reviews {
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

    fetch('http://localhost:8182/v1/graphql', options).then((res) => { 
        console.log(res)
        return res.json()
    }).then((data) => {
        console.log(data)

        drawReviews(data.data.reviews)
    })
}

function drawReviews(reviews){
    
    for(let review of reviews){
        let docCopy = document.querySelector('.reviewCardModel').cloneNode(true)
        let row = document.querySelector('#rowReviews')

        docCopy.hidden = false
        docCopy.querySelector('.titleReview').textContent = review.name
        docCopy.querySelector('.reviewText').textContent = review.review
        docCopy.querySelector('.scoreReview').textContent = review.score + "/10"

        row.appendChild(docCopy)
    }
}

window.onload = () => {
    getReview()
}