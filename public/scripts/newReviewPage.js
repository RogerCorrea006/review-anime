function submitReview(data){

    let formData = new FormData(data)

    fetch('/newReview', {
        method: 'POST',
        body: formData
    }).then((res) => {
        return res.json()
    }).then((data) => {
        console.log("sucesso")
    })
}

document.querySelector("#newReviewForm").addEventListener('submit', (event) => {
    event.preventDefault()

    submitReview(event.target)    
    
})