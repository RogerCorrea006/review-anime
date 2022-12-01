function getInfoAuthors(){
    fetch('./source/sobre.json').then((res) =>{
        return res.json()
    }).then((json) => {
        let author1 = document.querySelector('#author1')
        let author2 = document.querySelector('#author2')

        author1.querySelector('h3').textContent = json.authors[0].name
        author2.querySelector('h3').textContent = json.authors[1].name

        author1.querySelector('img').src = json.authors[0].path
        author2.querySelector('img').src = json.authors[1].path

        author1.querySelector('p').textContent = json.authors[0].description
        author2.querySelector('p').textContent = json.authors[1].description


    })
}

window.onload = () => {
    getInfoAuthors()
}