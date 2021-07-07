//Promedio
function calcularPromedio(lista){
    let sumaLista = 0;
    for (let i = 0; i < lista.length; i++){
        sumaLista = sumaLista + lista[i];
    }
    let promedioLista = sumaLista / lista.length;
    return promedioLista;
}

//Mediana
//Determinar si un numero es par
function par(numero){
    return numero % 2 == 0? true : false;
}

//Insertion sort - algoritmo de ordenamiento en javascript
function insertionSort(lista){
    for (let i = 0; i < lista.length; i++){
        let puntero = i;
        let valorActual = lista[i];
        if (valorActual < lista[i - 1]) {
            while (puntero > 0 && lista[puntero - 1] > valorActual){
                lista[puntero] = lista[puntero - 1]
                lista[puntero - 1] = valorActual;
                puntero--;
            }
        }
    }
    return lista;
}

function calcularMediana(lista){
    const mitadLista = lista.length / 2;
    const listaPar = par(lista.length);
    let mediana;
    if (listaPar) {
        mediana = (lista[mitadLista] + lista[mitadLista - 1]) / 2;
    } else {
        mediana = lista[Math.floor(mitadLista)];
    }
    return mediana
}

//Moda
function calcularModa(lista){
    const objetoFrecuencia = {};
    //Obtener la frecuencia de cada elemento
    lista.forEach(function(elementoLista){
        if (objetoFrecuencia[elementoLista]) {
            objetoFrecuencia[elementoLista] += 1;
        } else {
            objetoFrecuencia[elementoLista] = 1;
        }
    });
    let moda = 0;
    let frecuencia = 0;
    //Obtener el array del objeto objetoFrecuencia mediante Object.entries()
    //Iterar sobre el array mediante map para hallar la moda
    Object.entries(objetoFrecuencia).map(function(sublLista){
        if (sublLista[1] > frecuencia){
            frecuencia = sublLista[1]
            moda = sublLista[0];
        }
    });
    return moda
}

//Realizar análisis de la lista de entrada
function analisisLista(){
    //leer input lista y hacer un array
    const lista = document.getElementById("list").value.split(",");
    //coerción a los elementos de la lista para que sean tipo Number
    const listaNumeros = lista.map(function(elementoLista){
        return Number(elementoLista);
    });
    //ordenar lista
    const listaNumOrdenada = insertionSort(listaNumeros);
    //calcular promedio
    const promedio = calcularPromedio(listaNumOrdenada);
    //calcular mediana
    const mediana = calcularMediana(listaNumOrdenada);
    //calcular moda
    const moda = calcularModa(listaNumOrdenada);
    //mostrar resultados
    document.getElementById("list-result").innerText = listaNumOrdenada;
    document.getElementById("avg-result").innerText = promedio;
    document.getElementById("med-result").innerText = mediana;
    document.getElementById("mod-result").innerText = moda;
}