# Curso Práctico de ReactJS

## DOM, Virtual DOM Real DOM

El DOM es el código HTML que se transforma en páginas web, cada vez que se realiza una actualización en el DOM, también se actualiza el HTML con el que interactúan los usuarios. El problema es que el costo computacional y temporal de las actualizaciones en el DOM es alto.
El virtual DOM es una tecnología que utiliza React para aumentar el perfomance y velocidad de las aplicaciones, mediante una copia del Real DOM más ligera.
Los cambios en el Virtual DOM no afectan el HTML que ven los usuarios, así que React DOM se encarga de sincronizar las copias.

## Tipos de componentes

### Stateful

Estos son creados mediante clases haciendo extensión de React.Component, estos permiten manejar estados y ciclo de vida

```javascript
import React from 'react';

class Stateful extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hello: 'hello world'};
    }
    render () {
        return (
            <h1>{this.state.hello}</h1>
        );
    }
}
export default Stateful;
```

### Stateless

Estos componentes también llamados presentacionales devuelven principalmente elementos para la UI, por esto su nombre, el código es en formato JSX, preferiblemente.

```javascript
import React from 'react';

function Stateless = () => {
    return (
        <h1>Hola mundo!</h1>
    );
}

export default Stateless;
```

```javascript
import React from 'react';

const Stateless = () => {<h1>Hola mundo!</h1>};

export default Stateless;
```

## Props

Los props son la forma de enviar y recibir información de los componentes, es así como un componente también se comunica con el resto de la aplicación. Análogo a los parámetros y argumentos de las funciones en cualquier lenguaje de programación.

## Ciclo de vida

Los componentes en React pasan por un ciclo de vida que consta de tres fases, aunque no es necesario que pase por todas ellas. 
- Montaje: creación del componente junto a la lógica y componentes internos para posteriormente ser insertado en el DOM.
- Actualización: es una fase de standby donde el componente está atento a actualizaciones que pueden venir desde el estado o desde los props.
- Desmontaje: es la etapa donde el componente es eliminado junto a su representación en el DOM.

Existe una cuarta etapa que por su naturaleza no se considera con las otras tres, que es:

### Manejo de errores

Cuando el código de componente se ejecuta y tiene un error, se entra en esta fase donde es posible monitorear el componente.
Los métodos de esta 'fase' son:

- getDerivedStateFromError(): cuando se lanza el error, es llamado este método que recibe el error como argumento, con este se actualiza el estado de componente.
- componentDidCatch(): Este método es llamado después de lanzarse un error y pasa como argumento el error y la información representada sobre el error.

## State - Events

Con React se puede responder a las interacciones de los usuarios con las propiedades como ```onClick```, ```onChange```, ```onKeyPress```, ```onScrol``` y ```onFocus```.
Estas propiedades reciben el nombre de la función que ejecuta el código que responde a las interacciones de los usuarios.

Como buena práctica, los nombres de los eventos deben seguir la nomenclatura camelCase.
