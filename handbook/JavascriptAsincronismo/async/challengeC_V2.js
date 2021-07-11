const fetch = require('node-fetch');
const API = "https://rickandmortyapi.com/api/character/";

const fetchDataCharacter = async () => {
    try{
        const responseA = await fetch(API, {method: 'get'});
        const dataA = await responseA.json();
        const responseB = await fetch(`${API}${dataA.results[10].id}`, {method: 'get'});
        const dataB = await responseB.json();
        const responseC = await fetch(dataB.origin.url, {method: 'get'});
        const dataC = await responseC.json();
        console.log("Cantidad: " + dataA.info.count);
        console.log("Cantidad: " + dataB.name);
        console.log("Dimension: " + dataC.dimension);
    } catch (error) {
        console.error(error)
    }
}

console.log("Before");
fetchDataCharacter();
console.log("After");