# Curso básico de JavaScript

## Loops

### for

- Creamos un array a ser iterado

```Javascript
var marcas = ["Google", "Apple", "Netflix", "Amazon"]
```

- En esta función ```agregarUrl```se agrega el resto de una URL al parámetro marca

```Javascript
function agregarUrl(marca){
    console.log("www." + `${marca.toLowerCase()}` + ".com");
}
```

- Se itera desde el índice 0 hasta la longitud del array ```marcas```, imprimiendo el elemento y llamando a la función ```agregarURL``` para cada elemento.

```Javascript
for(var i = 0; i<marcas.length; i++){
    console.log(marcas[i]);
    agregarUrl(marcas[i]);
}
```

### for of

- Esta estructura es más intuitiva para hacer la misma tarea anterior

```Javascript
for(var marca of marcas){
    agregarUrl(marca)
}
```

### while

Ahora al replicar el mismo comportamiento anterior con un ciclo while, resulta el siguiente código

```JavaScript
while(marcas.length > 0){
    var marca = marcas.shift();
    agregarUrl(marca);
}
```

Debido a que se usó el método ```shift()```, el array marcas quedará vacío al final del ciclo.

```Javascript
>>marcas
//[]
```

**from**: 🇨🇴  
**by**: Andrés Núñez
