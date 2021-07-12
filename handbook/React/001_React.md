# React Js ⚛️

## ¿Qué es React Js?

Es una librería (framework, la línea no es clara) de JavaScript para construir interfaces de usuario.

React es **declarativo**, lo que quiere decir que como developers se indica qué hacer, pero no es claro el cómo.

## Create-react-app

Es una aplicación moderna que se utiliza desde la línea de comandos para configurar el entorno de un proyecto de React.
Los comandos son los siguientes

- Instalar npx desde npm, en caso de no tenerlo.

```zsh
npm install -g npx
```

- Llamar al comando create-react-app seguido del nombre del proyecto.

```
npx create-react-app hello-react
```

- Con esto, el proyecto de react se encuentra configurado y listo para ser ejecutado con el comando:

```zsh
npm run start
```

## Babel

Es un traductor de Javascript moderno a un Js que pueda ser  "entendido" por todos los navegadores en la gran mayoría de versiones.

## ReactDOM.render

- React actúa como un análogo a ```createElement```
- ReactDOM sería el análogo a ```appendChild```, este toma dos argumentos, el primero es el elemento, y el segundo el dónde.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1>Wellcome Makers!</h1>;
const container = document.getElementById("app")

ReactDOM.render(element, container);
```

## JSX

JSX es sugar syntax ya que existe una alternativa que es ```React.createElement```, JSX es más legible y expresivo.

- JSX

```javascript
const element = <h1>Hello</h1>;
```

Variables con ```JSX```, todo lo que esté entre llaves será tomando como una expresión y será evaluado, incluso funciones. Pero si estas son **falsy** (null, undefined...) no se van a ver.

```javascript
const name = "Andres";
const sum = () => 2 + 2;
const element = <h1>Hola {name} {sum()}</h1>;
```

- Alternativa, recibe tipo de elemento, atributos (llamados props, properties, en React) y el children (innerText / innerHTML)

```javascript
const element = React.createElement('h1', {}, 'Hello');
```

```javascript
const element = React.createElement('a', {href: 'https://google.com'}, 'Go to google!');
```

Variables con ```React.createElement```

```javascript
const name = "Andres";
const element = React.createElement('h1', {}, `Hello ${name}`);
```

Con JSX o React.createElement, pueden crearse expresiones más complejas.

- JSX

```javascript
const name = "Juana";
const element = <div>
<h1>Hello There</h1>
<p1>My name is {name}</p1>
</div>;
```

- React.createElement

```javascript
const name = "Juana";
const element = React.createElement(
    'div',
    {},
    React.createElement('h1', {}, 'Hello There'),
    React.createElement('p', {}, `My name is ${name}`)
);
```

JSX tiene una sintaxis amigable, pero es gracias a transpiladores de Js como babel que JSX pasa a un React.createElement entendible por el navegador.

## Componentes

### ¿Qué es un componente?

En React los componentes son considerados la unidad básica de desarrollo, estos son como bloques de construcción (barras de búsqueda, encabezados, footers, entre otros) que al juntarlos surgen los proyectos website.

### Componente vs Elemento

Un elemento es a una objeto lo que un componente es a una clase. Si el elemento fuese una casa, el componente serían los planos de cómo hacer la casa.

### Identificación de componentes

Con las siguientes preguntas se pueden identificar componentes

- ¿Qué elementos se repiten?
- ¿Qué elementos comparten aspecto visual y/o funcionalidad
- Elementos con una función específica: sirven para encapsular lógica y permiten juntar muchos comportamientos y aspectos visuales en un solo lugar. Un ejemplo es una barra de búsqueda ya que interactúa con el usuario, hace peticiones y devuelve resultados.

### Ciclo de vida de un componente (introducción)

#### Montaje

Sucede con la llegada de usuarios a la aplicación, en esta primera acción aparecen los componentes.

#### Actualización

Cuando un componente cambia, se dice que pasó por una actualización y por lo tanto se ejecuta el ```.render( )```, creando así el nuevo DOM. React indica esta confirmación de actualización mediante ```componentDidUpdate()```.

#### Eliminación

El cambiar de página, puede que varios componentes dejen de verse en la nueva página. React mediante la señal ```componentWillUnmount()``` elimina el código de estos componentes en el DOM.

### Creación de componentes

Una convención (buena práctica) es crear los compoenentes dentro de la carpeta src en una ruta así ```src/components/```.

Esta es la estructura básica para la creación de componentes

```javascript
import React from 'react'

class Badge extends React.Component {

}

export default Badge;
```

Todos los componentes deben tener al menos un método que es el render ().

```ReactDOM.render()``` recibe elementos, no componentes, por lo que debe tener la notación ```< />```

```javascript
ReactDOM.render(<MyComponent />, container)
```

## Nota: Imagenes en React

En react se puede hacer una referencia directa a la imagen o adjuntarla mediante un enlace http teniendo en cuenta que son expresiones que react evaluará, por lo que se debe tener presente la notación ```{}```

## Aplicación de estilos

Los estilos de los componentes se aplican en la ruta ```src/components/styles```, en este caso no es necesario que los estilos se almacenen en una variable  ```import "./styles/Badge.css"```, basta con importarlo en el componente correspondiente.

Una consideración adicional es que la keyword ```class```, es utilizada para declarar clases, por lo que para aplicar estilos es necesario usar ```className```.

Una segunda forma de aplicar estilos es mediante bootstrap, que se instala con el comando ```npm install bootstrap``` y posteriormente se importa dentro del archivo ```index.js``` así ```import 'bootstrap/dist/css/bootstrap.css';```

Para aplicar estilos globales y aplicarlos a toda la aplicación, a nivel de ```src```, se crea el archivo ```global.css``` y se llama desde ```index.js``` de la siguiente manera: ```import './global.css'```

## Props - properties

Para poder replicar un componente (en un elemento) y modificar ciertos atributos, se utilizan los props. Para pasarle propiedades a un elemento (instancia de cun componente) se utiliza ```this.props``` para cada propiedad que queramos. y en donde se esté instanciado, por ejemplo con un elemento ```elementA``` se hace así:

```javascript
ReactDOM.render(<elementA 
    property1 = "Hi"
    property1 = "There"
    />, container);
```

## Páginas en React

Las paginas en react siguen siendo componentes, que a su vez tienen otros componentes internamente. Al igual que los componentes, estas se configuran en un directorio propio, en la ruta ```src/pages/``` que facilite le lectura del proyecto. Las páginas se importan igual que los componentes.

## Enlazando Eventos

### ¿Qué son los eventos?

React dispone de eventos, cada vez que recibe información en un input, se obtiene un evento **onChange** y para manejarlos se usa un método de la clase **this.handleChange**.
Los elementos **button** también cuentan con el evento **onClick**, los botones dentro de los formularios por defecto son de tipo **submit**, para cambiar esto de modifica a tipo **button** o manejándolo desde el formulario con el evento **onSubmit**

```javascript
<input onChange={this.handleChange} type="text" id="firstName" name="firstName"/>
```

De este modo se "monitorean" los cambios que el usuario haga sobre el input, este método ```handleChange()``` debe ser declarado previo al método ```render()```.

```javascript
handleChange = (e) => {
        console.log({
            name: e.target.name,
            value: e.target.value
        });
    }
```

Los botones usan el método ```handleClick```, estos no tendrán atributos como nombre o valor del evento.

```html
<button type="button" onClick={this.handleClick}>Save</button>
```

Otra menera de prevenir que la página se recargue al enviar formularios es con la propiedad ```onSubmit``` de los ```form```.

```html
<form onSubmit={this.handleSubmit}>
```

Y en el método del evento:

```javascript
handleSubmit = (e) => {
    e.preventDefault();
}
```

## Manejo de estados

Es una forma de que los componentes creen su propia información sin necesidad de que los props se hagan explicitos, esta información puede ser consumida por otros componentes de manera unidireccional, es decir, que los elementos que reciben la información no pueden modificar la información original.

### ¿Qué es un estado (state)?

El state de React es un objeto que deriva de la clase React Component, que puede definirse a sí mismo como un objeto que almacena las propiedades observables que controlan el comportamiento del componente.

### prop Value

Para evitar la duplicación de estados modifica la propiedad value dentro de las etiquetas html

```javascript
value={this.state.stateName}
```

Hay que tener en cuenta que el objeto de estados debe ser inicializado dentro del componente

```javascript
state = {};
```

Se dice que un estado es controlado cuando en el objeto ```states``` se predetermina

```javascript
state = {firstName: 'Máximo décimo meridio comandante de los ejercitos del norte',};
```

### Levantamiento del estado

Es una técnica de React que pone el estado en una localización donde estos se puedan pasar como props a otros componentes. Lo ideal y buena práctica es poner estos estados en el lugar más cercano a todos los componentes que compartirán la información.
Cada vez que haya un cambio en el estado de un componente o en las props que recibe un componente, este y sus descendientes se vuelven a renderizar, esta es la parte reactiva de React.
