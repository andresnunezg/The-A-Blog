//Cuadrado
console.group("Cuadrado");

function perimetroCuadrado(ladoCuadrado){
    return ladoCuadrado * 4;
}

function areaCuadrado(ladoCuadrado){
    return ladoCuadrado ** 2;
}

function calcularCuadrado(ladoCuadrado){
    return [perimetroCuadrado(ladoCuadrado), areaCuadrado(ladoCuadrado)];
}

console.groupEnd();

//Triangulo
console.group("Triangulo");

//solo para triangulos isosceles (dos lados iguales)
function perimetroTriangulo(baseTriangulo, ladoTriangulo){
    return baseTriangulo + (ladoTriangulo * 2);
}

function areaTriangulo(baseTriangulo, ladoTriangulo){
    const alturaTriangulo = ladoTriangulo * Math.sin(1.0472);
    return baseTriangulo * alturaTriangulo / 2;
}

function calcularTriangulo(baseTriangulo, ladoTriangulo){
    return [perimetroTriangulo(baseTriangulo, ladoTriangulo), areaTriangulo(baseTriangulo, ladoTriangulo)]
}

console.groupEnd()

//Circulo
console.group("Circulo");

const pi = Math.PI;

function perimetroCirculo(radioCirculo){
    return 2 * pi * radioCirculo;
}

function areaCirculo(radioCirculo){
    return pi * (radioCirculo ** 2);
}

function calcularCirculo(radioCirculo){
    return [perimetroCirculo(radioCirculo), areaCirculo(radioCirculo)]
}

console.groupEnd()