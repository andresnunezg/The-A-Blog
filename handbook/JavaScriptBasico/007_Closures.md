# Closure

Es la combinación de una función y el ámbito léxico en el cuál ha sido declarada dicha función. Un closure recuerda el ámbito en el que se creó. Los Closure a su vez son un tipo especial de objeto.

Los closure pueden acceder y recordar variables de su función externa, incluso después de que la función externa haya finalizado. Los valores se conservan después de reiteradas ejecuciones.

La explicación de los closures puede llegar a ser compleja, este blog lo explica con claridad y ejemplos:  
[Enlace](!https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8)
Todos los créditos al autor.

Remember the backpag 🧳

La siguiente función no acumula las ```coins```que se pasan como argumento

```javascript
const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
}

moneyBox(10);
moneyBox(5);

//MoneyBox: $10
//MoneyBox: $5
```

Para que ocurra el comportamiento deseado, se puede acudir a los closures.

```javascript
const moneyBox = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins
        console.log(`MoneyBox: $${saveCoins})`);
    };
    return countCoins
};

let myMoneyBox = moneyBox();

myMoneyBox(4);
myMoneyBox(6);
```

Un ejemplo adicional aclarando la relación entre **scope** y **ambiente léxico** para la definición de **closures**.

```javascript
const buildCount = (n) => {
    let count = n;
    const counter = () => {
        count++;
        return count
    }
    return counter
}

let globalCounter = buildCount(1);

let iteration1 = globalCounter();
let iteration2 = globalCounter();
let iteration3 = globalCounter();

console.log(iteration1, iteration2, iteration3);

//2 3 4

let globalCounterB = buildCount(5);

let iteration4 = globalCounterB();
let iteration5 = globalCounterB();
let iteration6 = globalCounterB();

console.log(iteration1, iteration2, iteration3);
///6 7 8
```

## Variables privadas con closures

Javascript no tiene una forma implicita de datos privados, mediante los closures esto se puede hacer para garantizar que los datos que protejamos sólo puedan ser modificados mediante los métodos que especifiquemos.

```javascript
const person = () => {
    var name = "Name";
    return {
        setName: (newName) => {
            name = newName;
        },
        getName: () => {
            return name
        }
    }
}

let personA = person();
//Obtener nombre mediante el método getName
console.log(personA.getName());
//Cambiar nombre mediante el método setName
console.log(personA.setName("Juan"));
//Obtener nuevo nombre mediante el método setName
console.log(personA.getName());
```

## Loops y Closures

**from**: 🇨🇴  
**by**: Andrés Núñez
