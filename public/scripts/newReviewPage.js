function submitReview(data){

    let formData = new FormData(data)

    if(formData.get('name') == "") {
        showToast('Preencha o nome do jogo', 'error')
        return
    }

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

function showToast(message, type) {

    if(type == "error"){
        let toastNode = document.querySelector("#toastError")
        let messageToast = document.querySelector("#toastMessageError")
        let toast = new bootstrap.Toast(toastNode)

        messageToast.textContent = message

        toast.show()
    } else if(type == "success"){
        let toastNode = document.querySelector("#toastSuccess")
        let toast = new bootstrap.Toast(toastNode)

        toast.show()
    }
    
    //var toastElList = document.querySelector('.toast')
    //var toastList = toastElList.map(function(toastEl) {
    //  return new bootstrap.Toast(toastEl)
    //})
    //toastList.forEach(toast => toast.show()) 
  }