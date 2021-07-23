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

## Configuración del proyecto

Iniciar la gestión de dependencias con el comando

```zsh
npm init -y
```

Y creando la estructura de ```src```, ```public``` etc...

## Babel

Babel es un transpilador de Javascript, lo que quiere decir que convierte el Javascript moderno a uno que sea comprensible para la gran mayoría de versiones de navegadores

### Instalación y configuración

Instalación de los componenetes de babel requeridos en el entorno de desarrollo

```zsh
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader
```

El archivo de configuración en el proyecto se crea en la raiz del proyecto, a nivel de ```src``` o ```node_modules``` con el nombre ```.babelrc``` con el siguiente contenido:

```javascript
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
}
```

## Webpack

Webpack sirve para preparar los archivos a producción o para un entorno de desarrollo, mediante la compilación de estos, ya sea en javascript, HTML, CSS e incluso imágenes.

### Instalación de Webpack

Instalación como dependencia de desarrollo:

```zsh
npm install webpack webpack-cli html-webpack-plugin html-loader --save-dev
```

A nivel de ```src``` se crea el archivo ```webpack.config.js```, que es el archivo de configuración de webpack, que tiene el siguiente contenido

```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
  ],
};
```

Posteriormente en ```package.json``` se agrega el ```script```:

```json
"build": "webpack --mode production"
```

que se ejecuta mediante ```npm run build```


## Webpack dev-server

Webpack dev-server es una tecnología para visualizar los cambios en tiempo real

```zsh
npm install --save-dev webpack-dev-server
```

Luego en ```package.json```, se configura el script:

```json
"start": "webpack-dev-server --open --mode development"
```

La instrucción para correr el entorno de desarrollo local es:

```zsh
npm run start
```

## Sass

Sass es un preprocesador de CSS, es decir que tiene una sintaxis más amigable pero se transformará en CSS normal

## Instalación

```zsh
npm install mini-css-extract-plugin css-loader node-sass sass-loader --save-dev
```

## Configuración de Sass en webpack.config.js

```javascript
const path = require('path')
const HtmlWebPackPlugin= require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports={
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve:{
        extensions: ['.js', '.jsx']
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use:[
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.(s*)css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html'

        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].css'
        })
    ]
};
```

## ESlint

Es un linter, herramienta, que permite seguir las buenas prácticas y estilos para el código, se encarga de revisar el código para indicar errores o posibles errores.

### Instalación

```zsh
npm install --save-dev eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y
```

### Configuración

A nivel de ```src``` se crea el archivo ```.eslintrc``` y se agrega el contenido disponible en:

https://gist.github.com/gndx/60ae8b1807263e3a55f790ed17c4c57a

## Agregar imágenes con Webpack

Mediante ```File loader``` se accede a las imágenes dentro del código.
En el momento de la compilación Webpack guardará las imágenes en una nueva carpeta junto al código de producción y actualizará los componentes con los nuevos nombres y rutas de manera automática.

### Instalación

```bash
npm install --save-dev file-loader
```

### Configuración

En el archivo de configuración ```webpack.config.js``` se establece la siguiente nueva regla

```javascript
rules: [
  {
    test: /\.(png|gif|jpg|svg)$/,
    use: [
      {
        loader: 'file-loader',
        options: { name: 'assets/[hash].[ext]' },
      }
    ],
  },
],
```

## Fake API

Para la simulación de una API construida a partir de un archivo JSON se utiliza JSON Server, el cúal se instala globalmente de la siguiente manera: 

```bash
npm install json-server -g
```

## React Hooks

Los Hooks son una característica, a partir de React 16.8 que permite agregar estado y ciclo de vida a componentes creados como funciones.

### useState

Devuelve un array con dos elementos, cuya primera posición es el valor del estado y la segunda es una función que permite actualizar ese valor. El argumento que se envía a esta función es el valor por defecto del estado.

```javascript
import React from 'react';
//import React, { useState } from 'react';

const Component = () => {
  const [name, setName] = React.useState('default name'); //useState('')

  return <div>{name}</div>
}
```

### useEffect

Este Hook permite ejecutar código cuando el componente se encuentre en cualquiera de las tres fases (montaje, actualización y desmontaje), el primer argumento es una función que se ejecutará cuando React monte o actualice el componente. Esta función puede devolver otra función que se ejecute cuando el componente se desmonte. 
El segundo argumento es un array donde se especifica qué propiedades deben cambiar para que React llame nuevamente al código. Si el componente cambia pero las props especificadas en el array no, la función no se ejecutará.

Por defecto si no se envía un segundo argumento, React ejecutará la función de useEffect cada vez que este componente o sus padres se actualicen, si se envía un array vacío, useEffect sólo se ejecutará al montar y desmontar el componente.

```javascript
import React, { useState } from 'react';

const Component = () => {
  const [name, setName] = React.useState('default name');

  useEffect(() => {
    document.title = 'name';
    return () => {
      diocument.title = 'componente desmontado';
    }
  }, [name])

  return (
    <div>{name}</div>
  );
}
```

## Custom Hooks

React permite crear Hooks propios, separando así la lógica de los componentes.
Es una buena práctica que dentro de la carpeta ```src```, a nivel de ```assets``` y ```components``` se cree la carpeta ```hooks```, compartiendo así los Hooks entre componentes, si se hace el Hook agnóstico de propiedades.

- Estos deben empezar con la palabra ```use```: ```useAPI```, ```useMovie```, etc.
- Si el Hook consume/interactua con dos elementos, por ejemplo ```title``` y ```setTitle```, el Hook debe devolver un array
- Si el Hook consume/interactua con tres o más elementos, , por ejemeplo ```name``` ```setName```, ```lastName``` y ```setLastName```, etc... el Hook debe devolver un **objeto**.

Documento ```useInitialState.js```

```javascript
import { useEstate, useEffect } from `react`;

const useInitialState = (API) => {
  const [ videos, setVideos ] = useState([]);
  useEffect(() => {
    fetch(API)
      .then(response => response.json)
      .then(data => setVideos(data));
  }, []);
  return videos;
}

export default useInitialState;
```

## Proptypes

Los proptypes son una propiedad de los componentes para especificar el tipo de datos de las propiedades, si son de tipo String, Array, Número, etc... y además si es opcional u obligatorio.

### Instalación de Proptypes

```zsh
npm install --save prop-types
```

### Uso de Proptypes

```javascript
import React from 'react';
import PropTypes from 'prop-types';

const Component = ({firstName, lastName, age, list}) => {
//...
};

Component.PropTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  list: PropTypes.array,
};
```

From: 🇨🇴  
by: Andrés Núñez.  
