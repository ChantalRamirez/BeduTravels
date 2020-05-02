function fetchMovies(){
    fetch ('http://localhost:3000/api/v1/movies')
    .then((response) => response.json())
    .then((json) => renderMovies(json.movies))
    .catch((error) => console.log(error))
}

function renderMovies(movies){
    for (const movie of movies){
        const textTag = generateTextTag()
        textTag.innerText = movie.title
        document.body.appendChild(textTag)
    }
}

function generateTextTag(){
    const tag =document.createElement('p')
    return tag
}

function setListeners(){
    const button = document.getElementById('fetch-button')
    button.addEventListener('click', fetchMovies)
}

setListeners()