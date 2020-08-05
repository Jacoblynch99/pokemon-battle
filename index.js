const fetch = require("node-fetch")

let pokemonTypes

const definePokemon = (pokemon) => {
  let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  fetch(url)
    .then((res) => res.json())
    .then((specificPokemon) => {
      console.log('line 10')
      pokemonTypes = specificPokemon.types[0].type.name
    })
}

definePokemon(10)


console.log(pokemonTypes)
