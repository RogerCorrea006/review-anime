function submitReview(data){

    let formData = new FormData(data)

    if(formData.get('name') == "") {
        showToast('Preencha o nome do jogo', 'error')
        return
    }

    if(formData.get('score') == ""){
        showToast('Preencha a nota do jogo', 'error')
        return
    }

    if(formData.get('review') == ""){
        showToast('Preencha a review do jogo', 'error')
        return
    }

    let object = {};
    formData.forEach((value, key) => object[key] = value);
    let json = JSON.stringify(object);

    fetch('/newReview', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: json
    }).then((res) => {
        if(!res.ok) throw res.body.json()
        return res.body
    }).then((data) => {
        console.log("sucesso")
        showToast("", 'success')
    }).catch((error) => {
        console.log(error.message)
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