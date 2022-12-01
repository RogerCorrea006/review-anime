let cardAnimeDefault = document.getElementById('cardAnime');
let container = document.getElementById('showAnimes')

function getAnimeByName(){
    let inputAnimeSearch = document.getElementById('search-anime').value;
    
    fetch("https://api.jikan.moe/v4/anime?q="+inputAnimeSearch+"&sfw").then(response => response.json()).then(json => {
        container.innerHTML = "";
        json.data.forEach(element => {
            const img = element.images.webp.image_url;
            const title = element.title;
            const synopsis = element.synopsis;
            const link = element.url;

            let card = cardAnimeDefault.cloneNode(true)
            card.classList.toggle("d-none")

            card.querySelector('img').src = img;
            card.querySelector('h5').textContent = title;
            card.querySelector('p').textContent = synopsis
            card.querySelector('a').href = link

            container.appendChild(card)
        });
    })
}