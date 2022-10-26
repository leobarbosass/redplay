// Titulos da api: https://omdbapi.com/?s=thor&page=1&apikey=fc1fef96
// sinopses: http://www.omdbapi.com/?i=tt3896198&apikey=fc1fef96



const pesquisar = document.getElementById('movie-search-box');
const listaPesquisada = document.getElementById('search-list');
const resultado = document.getElementById('result-grid');

// Carregar imagem da API
async function loadMovies(pesquisa){
    const URL = `https://omdbapi.com/?s=${pesquisa}&page=1&apikey=fc1fef96`;
    const res = await fetch(`${URL}`);
    const data = await res.json();
    
    if(data.Response == "True") displayMovieList(data.Search);
}

function findMovies(){
    let itemPesquisado = (pesquisar.value).trim();
    if(searchTerm.length > 0){
        searchList.classList.remove('hide-search-list');
        loadMovies(itemPesquisado);
    } else {
        searchList.classList.add('hide-search-list');
    }
}

function displayMovieList(movies){
    searchList.innerHTML = "";
    for(let i = 0; i < movies.length; i++){
        let movieListItem = document.createElement('div');
        movieListItem.dataset.id = movies[i].imdbID;
        movieListItem.classList.add('search-list-item');
        if(movies[i].Poster != "N/A")
            moviePoster = movies[i].Poster;
        else 
            moviePoster = "./img/imagem_nao_encontrada.png";

        movieListItem.innerHTML = `
        <div class = "search-item-thumbnail">
            <img src = "${moviePoster}">
        </div>
        <div class = "search-item-info">
            <h3>${movies[i].Title}</h3>
            <p>${movies[i].Year}</p>
        </div>
        `;
        searchList.appendChild(movieListItem);
    }
    const ul = document.querySelector('[data-js="movies"]')

    ul.innerHTML = displayMovieList

    loadMovieDetails();
}

function loadMovieDetails(){
    const searchListMovies = searchList.querySelectorAll('.search-list-item');
    searchListMovies.forEach(movie => {
        movie.addEventListener('click', async () => {
            searchList.classList.add('hide-search-list');
            movieSearchBox.value = "";
            const result = await fetch(`http://www.omdbapi.com/?i=${movie.dataset.id}&apikey=fc1fef96`);
            const movieDetails = await result.json();
            displayMovieDetails(movieDetails);
        });
    });
}

function displayMovieDetails(details){  
    resultGrid.innerHTML = `
    <div class = "movie-poster">
        <img src = "${(details.Poster != "N/A") ? details.Poster : "image_not_found.png"}" alt = "movie poster">
    </div>
    <div class = "movie-info">
        <h3 class = "movie-title">${details.Title}</h3>
        <ul class = "movie-misc-info">
            <li class = "year">Ano: ${details.Year}</li>
            <li class = "rated">Classificação: ${details.Rated}</li>
            <li class = "released">Data de lançamento: ${details.Released}</li>
        </ul>
        <p class = "genre"><b>Gênero:</b> ${details.Genre}</p>
        <p class = "writer"><b>Diretor(es):</b> ${details.Writer}</p>
        <p class = "actors"><b>Atores: </b>${details.Actors}</p>
        <p class = "plot"><b>Sinopse:</b> ${details.Plot}</p>
        <p class = "language"><b>Idioma:</b> ${details.Language}</p>
        <p class = "awards"><b><i class = "fas fa-award"></i></b> ${details.Awards}</p>
    </div>
    `;
}


window.addEventListener('click', (event) => {
    if(event.target.className != "form-control"){
        searchList.classList.add('hide-search-list');
    }
});