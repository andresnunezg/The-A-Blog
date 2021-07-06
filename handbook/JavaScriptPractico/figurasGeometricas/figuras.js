//Cuadrado

function perimetroCuadrado(ladoCuadrado){
    return ladoCuadrado * 4;
}

function areaCuadrado(ladoCuadrado){
    return ladoCuadrado ** 2;
}

function calcularCuadrado(){
    const input = document.getElementById("lado-cuadrado");
    const ladoCuadrado = Number(input.value);
    const perimetro = perimetroCuadrado(ladoCuadrado);
    const area = areaCuadrado(ladoCuadrado);
    document.getElementById("resPeriCuadrado").innerText = perimetro.toFixed(2);
    document.getElementById("resAreaCuadrado").innerText = area.toFixed(2);
}

//Triangulo

//solo para triangulos isosceles (dos lados iguales)
function perimetroTriangulo(baseTriangulo, ladoTriangulo){
    return baseTriangulo + (ladoTriangulo * 2);
}

function areaTriangulo(baseTriangulo, ladoTriangulo){
    const alturaTriangulo = ladoTriangulo * Math.sin(1.0472);
    return baseTriangulo * alturaTriangulo / 2;
}

function calcularTriangulo(){
    const inputA = Number(document.getElementById("base-triangulo").value);
    const inputB = Number(document.getElementById("lado-triangulo").value);
    const perimetro = perimetroTriangulo(inputA, inputB);
    const area = areaTriangulo(inputA, inputB);
    document.getElementById("resPeriTriangulo").innerText = perimetro.toFixed(2);
    document.getElementById("resAreaTriangulo").innerText = area.toFixed(2);
}

//Circulo

const pi = Math.PI;

function perimetroCirculo(radioCirculo){
    return 2 * pi * radioCirculo;
}

function areaCirculo(radioCirculo){
    return pi * (radioCirculo ** 2);
}

function calcularCirculo(){
    const radio = Number(document.getElementById("radio-circulo").value);
    const perimetro = perimetroCirculo(radio);
    const area = areaCirculo(radio);
    document.getElementById("resPeriCirculo").innerText = perimetro.toFixed(2);
    document.getElementById("resAreaCirculo").innerText = area.toFixed(2);
}