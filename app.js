'use strict'


const searchMovies = async (text) => {
      
    const url = `http://www.omdbapi.com/?t=${text}&apikey=429acffc`
    const dados = await fetch(url)
    const response = await dados.json()
    console.log(response);

    // const createCards = async (text, cards) = {
    //     cards = `
    //         <div class="card">
    //             <h2 class="title-card">${text}</h2>
    //         </div>
    //     `
    //     return createCards
    // }
}

const loadMovies = (text) => {
    const imagesMovies = searchMovies (text)
    console.log(imagesMovies)
}

const handleKeypress = ({key, target}) => {
    if(key == 'Enter'){
        loadMovies(target.value)
    }
}

document.querySelector('#search-input')
        .addEventListener('keypress', handleKeypress)













//api = http://www.omdbapi.com/?i=tt3896198&apikey=429acffc
//img = http://img.omdbapi.com/?i=tt3896198&apikey=429acffc



// const pesquisar = document.getElementById('movie-search-box');
// const listaPesquisada = document.getElementById('search-list');
// const resultado = document.getElementById('result-grid');

// // Carregar imagem da API
// async function loadMovies(pesquisa){
//     const URL = `https://omdbapi.com/?s=${pesquisa}&page=1&apikey=fc1fef96`;
//     const res = await fetch(`${URL}`);
//     const data = await res.json();
    
//     if(data.Response == "True") displayMovieList(data.Search);
// }

// function findMovies(){
//     let itemPesquisado = (pesquisar.value).trim();
//     if(searchTerm.length > 0){
//         searchList.classList.remove('hide-search-list');
//         loadMovies(itemPesquisado);
//     } else {
//         searchList.classList.add('hide-search-list');
//     }
// }

// function displayMovieList(movies){
//     searchList.innerHTML = "";
//     for(let i = 0; i < movies.length; i++){
//         let movieListItem = document.createElement('div');
//         movieListItem.dataset.id = movies[i].imdbID;
//         movieListItem.classList.add('search-list-item');
//         if(movies[i].Poster != "N/A")
//             moviePoster = movies[i].Poster;
//         else 
//             moviePoster = "./img/imagem_nao_encontrada.png";

//         movieListItem.innerHTML = `
//         <div class = "search-item-thumbnail">
//             <img src = "${moviePoster}">
//         </div>
//         <div class = "search-item-info">
//             <h3>${movies[i].Title}</h3>
//             <p>${movies[i].Year}</p>
//         </div>
//         `;
//         searchList.appendChild(movieListItem);
//     }
//     const ul = document.querySelector('[data-js="movies"]')

//     ul.innerHTML = displayMovieList

//     loadMovieDetails();
// }


// function DetalhesFilme(){
//         const CarregarListaFilmes = CarregarLista.querySelectorAll('.carregar-lista-item');
//         CarregarListaFilmes.forEach(filme => {
//             filme.addEventListener('click', async () => {
//                 // console.log(filme.dataset.id);
//                CarregarLista.classList.add('esconder-lista-carregar');
//                 movieSearchBox.value = "";
//                 const result = await fetch(`http://www.omdbapi.com/?i=${movie.dataset.id}&apikey=fc1fef96`);
//                 const filmeDetalhes = await result.json();
//                 // console.log(filmeDetalhes);
//                 displayMovieDetails(filmeDetalhes);
//             });
//         });
//     }