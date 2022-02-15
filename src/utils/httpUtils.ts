export async function getAPI(url: string) {
    let result = await fetch(url);
    let json = await result.json();
    //console.log(json);
    console.log("API DONE");
    return json;
}