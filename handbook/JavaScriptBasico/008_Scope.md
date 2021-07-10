# Scope

Es el alcance que tendrá una variable dentro del código, a qué bloques y funciones podrá acceder. Existen tres tipos principales de alcance.

## Global Scope

No se encuentran dentro de funciones o bloques, pueden ser accedidos de manera globa, desde cualquier función o bloque.

```javascript
var hello = "Hello";
let world = "World!";
const helloWorld = "Hello world";
```

- con ```var``` se puede reasignar pero no es una buena práctica
- ```let``` y ```const``` no permiten reasignar
- Si se asigna una variable dentro de una función sin las palabras reservadas, será una variable global

```javascript
const funcionPrueba = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
};
```

En la función anterior se puede acceder a todas las variables declaradas anteriormente.

## Local Scope

Permite acceder a una variable sólo en una función o bloque de código.
Se imprimirá el primer console.log pero no el segundo ya que la variable tiene un scope local.

```javascript
const helloWorld = () => {
    const hello = "Hello";
    console.log(hello);
}

helloworld();
console.log(hello);
//Hello
//Undefined
```

### Ambito léxico

El ambito léxico se refiere a que una función o variable puede acceder a una función o variable fuera de ella. Cada nivel puede acceder externamente a otros niveles hasta alcanzarla.

En este caso ```funcionB()``` accede a ```scope``` de manera externa y encuentra su redefinición en el vallor ```Hello```.

```javascript
var scope = "Bye";
const funcionA = () => {
    var scope = "Hello";
    const funcionB = () => {
        return scope
    };
    console.log(funcionB());
};
funcionA();
console.log(scope);
//Hello
//Bye
```

## let, var y const

**var**: estas variables pueden ser redeclaradas, lo que puede generar errores y sobreescribir valores, por lo que no es una buena práctica utilizarla

**let**: permite que su valor sea reasignado per sólo pueden ser declaradas una vez.

**const**: estas variables constantes no pueden ser redeclaradas ni reasignadas.

El el siguiente ejemplo, el procedimiento con la variable ```x``` no se puede hacer con ```let``` ni con ```const```.

```javascript
const funcionVariables = () => {
    var x = 1;
    var x = 2;
    let y = 3;
    console.log(x)
    console.log(y)
}

funcionVariables();
//1
//3
```

## Block Scope

En el siguiente ejemplo, ```fruta2``` y ```fruta3``` hacen parte del scope del bloque, mientras que ```fruta1``` tiene un alcance local. Las variables declaradas con ```let``` y ```const``` sólo existen en el ámbito de bloque.

```javascript
funcion pruebaBlockScope () {
    if (true) {
        var fruta1 = "manzana";
        let fruta2 = "banano";
        const fruta3 = "papaya";
    }
    console.log(fruta1);
    console.log(fruta2);
    console.log(fruta3);
}

pruebaBlockScope();

//manzana
//fruta2 is not defined
```

El siguiente es un ejemplo para el ámbito de bloque, donde una variable ```x``` decladarada con ```let``` pudo ser redeclarada y reasignada dentro de un scope de bloque. Sin que esto afectara a la ```x``` definida de manera global.

```javascript
let x = 1;
{
    let x = 2;
    console.log(x);
}
console.log(x);

//2
//1
```

```javascript
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
//3
```

Al definir el iterador con ```let```, se soluciona el problema, ya que los ambitos locales o de bloque funcionan mejor con let.

```javascript
for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
//0
//1
//2
```
