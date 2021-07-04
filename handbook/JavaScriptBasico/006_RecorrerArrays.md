# Curso básico de JavaScript

## Recorrer arrays

## .filter()

Crea un nuevo array con los elementos del array que se pasó como parámetro y que cumplan con la condición definida.

Genera un nuevo array con pares clave valor de ```nombre``` y ```precio```.

```Javascript
var articulos = [
    {nombre: "bici", precio: 3000},
    {nombre: "tele", precio: 3500},
    {nombre: "libro", precio: 500},
    {nombre: "telefono", precio: 8700},
    {nombre: "laptop", precio: 13250},
    {nombre: "teclado", precio: 500},
    {nombre: "audifonos", precio: 1700},
]
```

Mediante se van a obtener todos aquellos articulos que tengan un precio menor a 1000.

```Javascript
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.precio <= 1000
});

//(2)[
//{nombre: libro, precio:500}
//{nombre: teclado, precio: 500}
//]
```

## .map()

Crea un nuevo array con los resultados de la llamada de la función indicada aplicada a cada uno de sus elementos.

La siguiente es una aproximación al método map, donde se utiliza para extraer todas las llaves ```nombre``` de los objetos que están dentro de la lista articulos. Este método genera un nuevo array

```Javascript
var nombresArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

//(7)[ bici,tele,libro,telefono,laptop,teclar,audifonos ]
```

## .find()

Retorna el primer elemento de un array que cumple con la condición definida en un nuevo array.

Ayuda a encontrar elementos específicos en un array, este método no muta el array, crea uno nuevo.

```Javascript
var encontrarArticulo = articulos.find(function(articulo){
    return articulo.nombre === "libro"
});

Devuelve el objeto completo en caso de que encuentre alguno dentro de la lista articulos, cuyo nombre sea ```"libro"```

//encontrarArticulo
//{nombre:libro,precio:500 }
```

## .forEach()

Ejecuta la función indicada una vez por cada elemento del array.

No genera un nuevo array. Es es una manera de realizar iteraciones sobre un array.

```Javascript
articulos.forEach(function(articulo){
    console.log(articulo.precio);
});

//3000
//3500
//500
//...
```

## .some()

Realiza una validación de verdadero o falso sobre una condición dada, si se cumple al menos una vez en el array, regresa true.

```Javascript
var preciosBajos = articulos.some(function(articulo){
    return articulo.costo <= 700
});
//true
```

**from**: 🇨🇴  
**by**: Andrés Núñez
