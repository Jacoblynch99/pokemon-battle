const fetch = require("node-fetch")

const definePokemon = (pokemon) => {
  let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  fetch(url)
    .then((res) => res.json())
    .then((specificPokemon) => {
      const pokemonType = specificPokemon.types[0].type.name
      return pokemonType
    })
}

console.log(definePokemon("zubat"))
