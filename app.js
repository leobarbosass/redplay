
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
    loadMovieDetails();
}
