# Curso básico de JavaScript

## Objects

### Creación de objetos

Combinación de palabras clave (llave) y valores

```Javascript
var juan = {
    nombre: "Juan Messi",
    edad: 20,
    profesion: "Carpintero",
    pais: "Colombia",
    casado: true
}
```

Se accede a los elementos de un objeto de la siguiente manera

```Javascript
juan.casado
//true
```

### Funciones dentro de los objeto (métodos)

```Javascript
var juan = {
    nombre: "Juan Messi",
    edad: 20,
    profesion: "Carpintero",
    pais: "Colombia",
    casado: true,
    detallePersona: function(){
        console.log(`${this.nombre} es ${this.profesion} de ${this.pais}`);
    }
}
```

Estas funciones dentro de objetos son llamadas métodos y se invocan de la siguiente manera:

```Javascript
juan.detallePersona()
//Juan Messi es Carpintero de Colombia
```

## Función constructora

Utilizada cuando se quieren crear muchos objetos pero que tienen variaciones en los valores de las palabras clave.

```Javascript
function persona(nombre, edad, pais){
    this.nombre = nombre
    this.edad = edad
    this.pais = pais
}
```

Para crear un objeto a partir de la función constructora, se hace de la siguiente manera:

```Javascript
var juanito = new persona("juanito", 10, "Mexico");
```

Donde el operador ```new```crea una nueva instancia y se llama a la función ```persona``` con los parámetros que esta requiere

**from**: 🇨🇴  
**by**: Andrés Núñez
