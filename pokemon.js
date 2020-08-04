// Create an arena that displays two Pokemon battling each other.
// Compare the two to see who is likely to win.

// fetch two pokemon (any type)
// create an export and intake (require)
// compare pokemon types
// ------- ARENA ------ //
// create arena within node enviroment
// create prompt to input pokemon
// find methods from pig latin to avoid errors
// create tests

// version (red)
// access type, weakness from pokemon object
// compare water type > fire type

// Fire :
// Fire vs water = water wins. fire vs grass wins.
// Water :
// Water vs grass = grass wins. Water vs fire = water wins.
// Grass :
// grass vs fire = fire wins. grass vs water = grass wins.
// If type is the same tie

// access moves (bubble) (ember)
// find a way to switch turns
// create an input for the pokemon to attack
let url

let pokemonObj1
let pokemonObj2

const definePokemon = (pokemon) => {
  url = `https://pokeapi.co/api/v2/pokemon/ditto`
}

const getPokemon = () => {
  fetch(url)
    .then((res) => res.json())
    .then((users) => (pokemonObj1 = users))
}
console.log(pokemonObj1)

// const getPokemon2 = () => {
//   fetch(url)
//     .then((res) => res.json())
//     .then((users) => (pokemonObj2 = users))
// }

const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const comparePokemon = (pokemon1, pokemon2) => {
  // let cleanWord = word.toLowerCase().trim()
  if (pokemon1 == "fire" && pokemon2 == "water") {
    return "water wins"
  }
  if (pokemon1 == "fire" && pokemon2 == "grass") {
    return "fire wins"
  }
  if (pokemon1 == "fire" && pokemon2 == "fire") {
    return "tie"
  }
  if (pokemon1 == "water" && pokemon2 == "water") {
    return "tie"
  }
  if (pokemon1 == "water" && pokemon2 == "grass") {
    return "grass wins"
  }
  if (pokemon1 == "water" && pokemon2 == "fire") {
    return "water wins"
  }
  if (pokemon1 == "grass" && pokemon2 == "fire") {
    return "fire wins"
  }
  if (pokemon1 == "grass" && pokemon2 == "water") {
    return "grass wins"
  }
  if (pokemon1 == "grass" && pokemon2 == "grass") {
    return "tie"
  }
}

const createArena = () => {
  rl.question("Player 1, choose your Pokemon: ", (pokemon1) => {
    definePokemon(pokemon1)
    console.log(pokemon1)
    console.log(url)
    console.log(pokemonObj1)
    rl.question("Player 2, choose your Pokemon: ", (pokemon2) => {
      console.log(comparePokemon(pokemon1, pokemon2))
      createArena()
    })
  })
}
console.log(createArena())
