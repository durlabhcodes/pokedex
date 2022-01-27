export function fetchPokemonList() {
    let url:string = "https://pokeapi.co/api/v2/location/1/";
    getAPI(url);
    console.log("Done")
}

async function getAPI(url: string) {
    //let result = await new Promise((resolve, reject) => (setTimeout(resolve(fetch(url)), 3000)));
    //let json = await result.json();
    let result = await fetch(url);
    let json = await result.json();
    console.log(json);
    console.log("API DONE")
}