//Utils
const salariosCol = colombia.map((persona) => {
    return persona.salary
});

const salariosColOrdenados = salariosCol.sort(function(salaryA, salaryB){
    return (salaryA - salaryB);
});

const esPar = (numero) => {
    return (numero % 2 == 0);
};

//Mediana salarios

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);
    let mediana;
    if (esPar(lista.length)){
        mediana = (lista[mitad] + lista[mitad - 1]) / 2; 
    } else {
        mediana = lista[mitad];
    }
    return mediana;
}

//Mediana salarios Colombia
const medianaGeneralCol = medianaSalarios(salariosColOrdenados);

//Mediana salarios Top 10%
const punteroInicioTop10 = parseInt(0.9 * salariosColOrdenados.length);
const punteroFinalTop10 = salariosColOrdenados.length - punteroInicioTop10;
const listaColTop10 = salariosColOrdenados.splice(
    punteroInicioTop10,
    punteroFinalTop10
);

const medianaGeneralColTop10 = medianaSalarios(listaColTop10);