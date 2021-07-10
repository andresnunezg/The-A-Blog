const fetchData = require('../utils/fetchData');
const API = "https://rickandmortyapi.com/api/character/";

fetchData(API)
 .then(data => {
     console.log("Cantidad: " + data.info.count);
     return fetchData(`${API}${data.results[0].id}`)
 })
 .then(data => {
     console.log("Personaje: " + data.name);
     return fetchData(data.origin.url)
 })
 .then(data => console.log("Dimension: " + data.dimension))
 .catch(err => console.error(err));
