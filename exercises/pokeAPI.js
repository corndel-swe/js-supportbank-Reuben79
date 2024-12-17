export async function getPokemonList() {
  // TODO
  const response = await fetch('https://pokeapi.co/api/v2/pokemon')

  const data = await response.json()
  console.log(data) 
  
  return data.results.map(pokemon => pokemon.name)

}
