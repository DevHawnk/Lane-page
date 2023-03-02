// Variáveis globais
const pokeAPI = "https://pokeapi.co/api/v2/pokemon/";
const pokemonList = document.getElementById("pokemon-list");
const searchButton = document.getElementById("search-button");
const pokemonSearch = document.getElementById("pokemon-search");

// Adicionando evento de click no botão de busca
searchButton.addEventListener("click", searchPokemon);

// Função para buscar Pokemon
function searchPokemon() {
  const pokemonName = pokemonSearch.value;
  fetch(pokeAPI + pokemonName)
    .then(response => response.json())
    .then(data => {
      const pokemon = {
        name: data.name,
        image: data.sprites.front_default,
        type: data.types.map(type => type.type.name).join(", ")
      };
      displayPokemon(pokemon);
    })
    .catch(error => console.log(error));
}

// Função para exibir Pokemon
function displayPokemon(pokemon) {
  const pokemonCard = document.createElement("div");
  pokemonCard.classList.add("pokemon-card");
  pokemonCard.innerHTML = `
    <img src="${pokemon.image}" alt="${pokemon.name}">
    <h2>${pokemon.name}</h2>
    <p>Type: ${pokemon.type}</p>
  `;
  pokemonList.appendChild(pokemonCard);
}
