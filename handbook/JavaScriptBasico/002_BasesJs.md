# Curso básico de JavaScript

## Scope

**Scope global** puede ser accedido desde cualquier parte del código. Pero desde el scope global no se puede acceder a variables creadas dentro de un scope local.

**Scope local** puede ser accedido desde partes específicas del código como dentro de funciones

```Javascript
var miNombre = "Andres";

function nombre(){
    var miApellido = "Nunez";
    console.log(`Nombre completo: ${miNombre} ${miApellido}`);
}
//Nombre completo: Andres Nunez
```

En la función anterior, la variable ```miNombre``` tiene un scope global y ```miApellido```, scope local dentro de la función ```nombre```.

Al llamar a ```miNombre``` desde el scope local se obtiene la respuesta ```"Andres"```. Con la llamada a ```miApellido```, sucede lo siguiente.

```Javascript
Uncaught ReferenceError: miApellido is not defined
    at <anonymous>:1:1
```

## Hoisting

El hoisting funciona con versiones de ECMAScript 5 y anteriores. En ECMAScript 6 y posteriores ya no sucede debido a que el hoisting se basa en ```var``` y ```function```. A partir de ECMAScript 6, se introducen las variables ```let``` y ```const```.

Un ejemplo de hoisting es el siguiente, donde se está llamando a una variable que se declara e inicializa después.

### Hoisting en las variables

```Javascript
console.log(miNombre);

var miNombre = "Andres";
// undefined
```

No se dispara un error ya que el navegador interpreta que ```miNombre``` es una variable y reserva el espacio en memoria pero esta variable no está inicializada ni contiene un valor.

Un comportamiento análogo a esto:

```Javascript
var miNombre = undefined;

console.log(miNombre);

miNombre = "Andres";
```

### Hoisting en las funciones

En este caso estamos llamando a la función declarativa ```saluda()``` previamente a su declaración por lo que en este caso el hoisting permite que la función se ejecute aunque esta esté definida más adelante. Aún así es una buena práctica que las funciones estén declaradas al principio y luego sean llamadas.

```Javascript
saluda();

function saluda(){
    console.log("Hola!");
}

//Hola!
```

## Coerción

Esto está relacionado don la característica de JavaScript de **débilmente tipado**, existen dos tipos de coerción.

### Coerción implicita

Sucede cuando el lenguaje interviene y cambia el tipo de valor automáticamente.

Ejemplo

- El operador + concatena strings por lo que asume que <1> es un string

```Javascript
1 + "7" //47
2 * "7" //14
0 + true //1
0 - false //-1
```

### Coerción explicita

Se especifíca el cambio de tipo de valor de una variable previamente declarada e inicializada.

```Javascript
var a = 20;
var b = a + "";
typeof b
//"string"
```

Se puede hacer la coerción sin concatenar, usando la función ```String()```. También existe el método ```Number()``` y ```Boolean```.

```Javascript
var a = 20;
var b = String(a);
```

## Truthy and Falsy

En pocas palabras, estos valores sirven para validar ciertas expresiones condicionales.

```Javascript
Boolean(); //false
Boolean(0) ;//false
Boolean(null); //false
Boolean(NaN); //false
Boolean(undefined); //false
Boolean(false); //false
Boolean(""); //false
```

```Javascript
Boolean(" "); //true
Boolean(1) ;//true
Boolean([]); //true
Boolean({}); //true
Boolean(function(){}); //true
Boolean(true); //true
```

## Operadores

### Operadores binarios

```Javascript
+  //suma
-  //resta
*  //multiplicación
/  //división
%  //módulo
** //potencia
```

### Operadores lógicos

```Javascript
! //negación de un valor
&& //AND
|| //OR
```

### Operadores de comparación

```Javascript
== //comparación de valor
=== //comparación de valor y tipo
> //mayor que
< //menor que
>= //mayor o igual
<= //menor o igual
```

- Ejemplo

```Javascript
3 == "3" //true
3 === "3" //false
```

**from**: 🇨🇴  
**by**: Andrés Núñez
