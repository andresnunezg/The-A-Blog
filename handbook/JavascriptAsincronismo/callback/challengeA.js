let XMLHtppRequest = require('xmlhttprequest').XMLHttpRequest;
let API = "https://rickandmortyapi.com/api/character/";

//funcion para traer la informacion
function fetchData (url_api, callback) {
    //se genera una referencia al objeto
    let xhttp = new XMLHtppRequest();
    //true es para que se haga de manera asincrona (asi es por defecto)
    //establecer la conexion
    xhttp.open('GET', url_api, true);
    //escuchar a la conexion
    //event debe usarse como buena practica
    xhttp.onreadystatechange = function (event) {
        //validar: request finished and response is ready
        if (xhttp.readyState === 4) {
            //validar status: "OK"
            if (xhttp.status == 200) {
                //por estandar en el uso de apis, el primer valor es el error
                //y el segundo es el resultado
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                //crear una instancia de la clase error
                const error = new Error('Error ' + url_api);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

fetchData(API, function (error1, data1) {
    //salir de la funcion si hay error
    if (error1) return console.error(error1);
    fetchData(API + data1.results[0].id, function (error2, data2) {
        if (error2) return console.error(error2);
        fetchData(data2.origin.url, function (error3, data3) {
            if (error3) return console.error(error3);
            console.log("Cantidad: ", data1.info.count);
            console.log("Personaje: ", data2.name);
            console.log("Dimension: ", data3.dimension)
        })
    })
})