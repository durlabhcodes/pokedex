import { getAPI } from "."

export function fetchPokemonList() {
    let url = "https://pokeapi.co/api/v2/pokemon";
    return getAPI(url);
}