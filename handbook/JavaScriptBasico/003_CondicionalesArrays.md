# Curso básico de JavaScript

## Condicionales

### if

- Sintaxis

```Javascript
if (true){
    console.log("Hola");
}
```

### if else

```Javascript
if (!true){
    console.log("Hola");
} else {
    console.log("Adios!");
}
```

### else if

```Javascript
if (!true){
    console.log("Hola");
} else if (true){
    console.log("Hola!");
} else {
    console.log("Volví");
}
```

### Operador ternario

```Javascript
condition ? true : false
```

- Ejemplo

```Javascript
var nombre = "Andres";
var res = nombre === "Camilo" ? "RIGHT" : "WRONG";
//res = "WRONG"
```

## Switch

Este tipo de condicional está basado en casos.

```Javascript
var numero = 1;
switch (numero){
    case 1:
        console.log("caso 1");
        break;
    case 20:
        console.log("caso 20");
        break;
    default:
        console.log("Caso no encontrado");
}
```

## Array

Es una estructura de datos.

```Javascript
var vehiculos = ["Carro", "Moto", "Bicicleta", "Avion"];
```

- Obtener la longitud del array

```Javascript
console.log(vehiculos.length);
```

- Acceder a los elementos en un array

```Javascript
console.log(vehiculos[0]);
```

### Mutar arrays

- Agregar elementos al final del array

```Javascript
vehiculos.push("Barco")
```

- Retira el último elemento del array y lo asigna a una variable

```Javascript
var ultimoElemento = vehiculos.pop()
//Barco
```

- Agregar elemento al inicio del array

```Javascript
vehiculos.unshift("Tren")
```

- Retirar elemento del inicio del array

```Javascript
var primerElemento = vehiculos.shift()
```

- Obtener el índice de un elemento

```Javascript
var indiceMoto = vehiculos.indexOf("Moto")
```

**from**: 🇨🇴  
**by**: Andrés Núñez
