const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
         ? setTimeout(() => resolve('DoSomethingAsync'), 3000)
         : reject(new Error("Ops!"))
    });
}

const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}

console.log("Before");
doSomething();
console.log("After");

//Output
//Before
//After
//DoSomethingAsync

//async con captura de errores
const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync();
        console.log(something);
    } catch (error) {
        console.error(error);
    }
}

console.log("BeforeB");
anotherFunction();
console.log("AfterB");

//Output de todo index.js
//Before
//After
//BeforeB
//AfterB
//DoSomethingAsync
//DoSomethingAsync