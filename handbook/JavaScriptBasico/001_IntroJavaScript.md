# Curso básico de JavaScript

## ¿Qué es JavaScript?

Dinamismo en las páginas web, nace en los 90's como respuesta a las páginas estáticas.

🟨 **Js**

- Orientado a objetos
- Debilmente tipado

Que sea débilmente tipado significa que se permiten este tipo de operaciones:

```Javascript
4 + "7" // 47
4 * "7" // 28
2 + true // 3
false - 3 // -3
```

- Dinámico

Js es dinámico/interpretado, es decir que se compila en tiempo de ejeución (compiled in runtime). No pasa por una compilación previa. Es interpretado también debido a que el navegador 'interpreta' línea a línea.

- Forwards  
Ser compatible con versiones futuras significa que incluir una adición al lenguaje en un programa no causaría que se rompa si se ejecuta en un motor de Js Anterior. Js no es compatible con versiones futuras. No es forwards compatible

- Js es Backwards compatible  
La compatibilidad con versiones anteriores significa que cuando se acepta Js como válido, no habrá un cambio futuro que haga que el código deje de funcionar.

- Babel ⭐️
Es un compilador de Js que permite utilizar las nuevas características del lenguaje, transformandolas a una versión entendible para el navegador.

### ¿Por qué aprender JavaScript?

Estándar de la web junto a **HTML** y **CSS** y WebAssembly.
En el desarrollo web hay muchas librerías y frameworks robustas de Js, tanto en el Frontend y en el Backend.

También es posible crear apps moviles y de escritorio (Windows y MacOs) con React Native y Electron, respectivamente.

## Elementos de un lenguaje de programación

### Datos

Almacenados en memoria, como strings, números, objetos, arrays, entre otros.

### Funciones

Son las taras que programamos con el lenguaje.

### Tipos de datos

#### Number

Para almacenar números

```Javascript
let year = 2020
```

#### Boolean

Almacerar estados o valores lógicos como true o false.

#### Undefined

Existe cuando no se le asigna valor a una variable

#### Null

Quiere decir que el dato no existe

#### String

Representación de texto, caracteres o cadenas de caracteres, el contenido debe estar entre comillas dobles, simples o acentos invertidos

### Valores no primitivos

#### Arrays

Contienen por lo _general_ valores no primitivos

```Javascript
[1, 2, 3, "Hola"]
```

#### Objetos

```Javascript
{nombre: "Andres"}
```

Para verificar el tipo de dato existe la keyword ```typeof```

```Javascript
typeof "Goku" //"string"
```

```Javascript
typeof Andres //"undefined"
```

```Javascript
typeof null //"object"
```

```Javascript
typeof true //"boolean"
```

```Javascript
typeof undefined //"undefined"
```

```Javascript
typeof [] //"object"
```

```Javascript
typeof {} //"object"
```

## Variables

Las variables son los espacios reservados en memoria a las que les asignamos un valor

```var``` es la representación del lugar donde se guardan los valores

```Javascript
var edad = 22;
```

Mediante ```edad``` podemos acceder al valor 22.
Las variables pueden ser inicializadas si un valor, para que les sea declarado uno posteriormente

```Javascript
var edad;
edad = 10;
```

```Javascript
var elementos = ["Juan", 10];
elementos
//(2) ["Juan", 10]
```

## Funciones en Js

Una función es un conjunto de sentencias que realizan un procedimiento específico. Hay dos tipos de funciones principales.

La diferencia principal entre ellas es que a las funciones declarativas se les puede aplicar hoisting, lo que quiere decir que se puede llamar a la función antes de que esta sea declarada. En una expresión de función primero es necesaria la declaración.

### Funciones declarativas

```Javascript
function miFuncion(){
    return 0;
}
```

### Expresión de función

También llamadas funciones anónimas.
La variable ```miFuncion``` está almacenando una función.

```Javascript
var miFuncion = function(a,b){
    return a + b
}
```

**Template string**, es el formatting de Javascript, es decir, la manera en que se le pasan variables a una cadena de texto, por ejemplo

```Javascript
function saludarEstudiantes(estudiante){
    console.log(`Hola ${estudiante`});
}
```

En este caso la función cuenta con parámetros necesearios en el llamado de la función.

```Javascript
function sumar(a,b){
    var resultado = a + b;
    return resultado
}

**from**: 🇨🇴  
**by**: Andrés Núñez
