async function getReview(){

    fetch('/getReviews').then((res) => { 
        console.log(res)
        return res.json()
    }).then((data) => {
        console.log(data)
    })
}

window.onload = () => {
    getReview()
}