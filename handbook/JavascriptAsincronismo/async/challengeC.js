const fetchData = require('../utils/fetchData');
const API = "https://rickandmortyapi.com/api/character/";

const fetchDataAsync = async () => {
    try {
        const fetchDataAwaitA = await fetchData(API);
        const fetchDataAwaitB = await fetchData(`${API}${fetchDataAwaitA.results[0].id}`);
        const fetchDataAwaitC = await fetchData(fetchDataAwaitB.origin.url);
        console.log("Cantidad: " + fetchDataAwaitA.info.count);
        console.log("Personaje: " + fetchDataAwaitB.name);
        console.log("Dimension: " + fetchDataAwaitC.dimension);
    } catch (error) {
        console.error(error);
    }
}

console.log("Before");
fetchDataAsync();
console.log("After");