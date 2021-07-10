# Asincronismo en Javascript

## ¿Qué es el asincronismo en Javascript?

Javascript es un lenguaje de programación asíncrono y no bloqueante, con un manejador de eventos (eventloop) implementado en un único hilo para sus interfaces de entrada y salida.

Revisemos estos términos uno a uno

- Asíncrono: se refiere a acciones que no ocurren al mismo tiempo, la finalización de operaciones de entrada y salida se señalizan más tarde, mediantes mecanismos que permiten que la respuesta sea procesada en diferido.
- Bloqueante: las llamadas u operaciones bloqueantes no devuelven el control a la aplicación hasta que se hayan completado, por lo que el hilo queda en estado de espera.
- Call stack: la pila de llamadas se encarga de albergar las instrucciones a ser ejecutadas, indicando en qué punto del programa estamos.
- Cola o Queue: cuando el programa recibe notificaciones del exterior o de contextos diferentes al de la aplicación, el mensaje se inserta en una cola de mensajes pendientes y se registra un callback correspondiente.
- EventLoop: cuando la pilla de llamadas (call stack) se vacía, cuando no quedan instrucciones por ejecutar, se procesan los mensajes de la cola.

## Callbacks

Son el nombre de una convención para usar funciones, las cuales a su vez llaman a otras funciones. El callback es aquella función que es llamada como parámetro, más no la función que recibe.

Es una buena práctica y necesario crear un paquete o dependencia con npm

```zsh
npm init
```

Una vez estructurado el callback, en el ```package.json```, en la sección de ```scripts``` se agrega la siguiente llave valor

```json
"callback": "node src/callback/index.js"
```

Para ejecutar este script desde la consola se usa:

```zsh
npm run callback
```

El llamado a las APIS necesarias para el proyecto se usa con una dependencia que se instala de la siguiente manera

```javascript
npm install xmlhttprequest --save
```

## Promises

Usan el objeto ```promise``` para ser ejecutadas. Las promesas representan la terminación o el fracaso de una operación asíncrona.

Para el manejo de multiples promises encadenadas se usa el método ```Promise.all()```

## Async/await

La finalidad de las funciones async/await es simplificar el comportamiento del uso síncrono de promesas y realizar algún comportamiento específico en un grupo de Promises. Del mismo modo que las Promises son semejantes a las devoluciones de llamadas estructuradas, async/await se asemejan a una combinación de generadores y promesas.

**await** pausa la ejecución de la función asíncrona y espera la resolución del **promise**

## Callbacks vs Promises vs Async/Await

|   | Ventajas  |  Desventajas |
|---|---|---|
| Callbackss  | Universales, corren en cualquier nagevador  | Sintaxis tosca y posibles callback hell  |
| Promises  | Facilmente enlazables con .then(), gran capacidad de asincronismo  |Requiere un transpilador (polify) para funcionar en todos los navegadores |
|  Async/Await | Sintaxis clara y fácil de leer para el try/catch | Espera a cada uno de los llamados, también requiere polify |

**from**: 🇨🇴  
**by**: Andrés Núñez
