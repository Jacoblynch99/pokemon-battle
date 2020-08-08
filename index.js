const fetch = require("node-fetch")

let pokemonObj = []

const definePokemon = (pokemon) => {
  let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  fetch(url)
    .then((res) => res.json())
    .then((specificPokemon) => {
      pokemonObj.push(specificPokemon.types[0].type.name)
    })
}

definePokemon(1)
definePokemon(9)
