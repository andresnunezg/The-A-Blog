# Flask 🌶

A Python 🐍 micro-framework for web development

## Ambientes virtuales

Previo a iniciar con Flask, es necesario introducir los ambientes o entornos virtuales de Python, lo que es una buena práctica y la manera profesional de trabajar con este lenguaje, ya que aísla el directorio de trabajo de todas las librerías, frameworks y versiones.

**Instalación de venv**

Mediante el gestor de paquetes de Python PIP, en la consola / terminal:  `pip install virtualenv`

**Crear virtualenv**

Ubicado en el directorio que donde se creará el ambiente virtual, a ser aislado, se ejecuta el comando `python3 -m venv {nombre_venv}` para MacOS y `python -m venv {nombre_venv}` en Windows.

**Activación del venv**

El entorno virtual se activa con el comando `source {nombre_venv}/bin/activate`

**Instalación de paquetes**

Una vez creado el  `venv`, dentro del directorio se crean las carpetas y archivos:

- /bin
- /include
- /lib
- pyenv.cfg

y los paquetes o recursos adicionales de Python se instalan mediante el gestor de paquetes PIP, por ejemplo `pip install numpy`. 

**Desactivar el venv**

Para salir o desactivar el ambiente virtual se ejecuta el comando `deactivate`

## Instalación de Flask

`pip install Flask`, es importante resaltar la letra _'F'_ en mayúscula.

Para levantar el servidor se ejecuta el archivo main.py como un script cualquiera.

## Creación de rutas

**importante** primero importar flask `from flask import Flask` al archivo `main.py` y posteriormente se instancia el framework. Con la línea `app.run(debug=True)` se refresca el servidor levantado ante cambios.

```python
#en main.py

from flask import Flask

app = Flask(__name__)

if __name__ == "__main__":
    app.run(debug=True)
```

Para agregar la ruta inicial en la dirección '/', se agrega el decorador  ` @app.route('/')` con la función `index` asociada.

```python
#en main.py

from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return "Hello World"

if __name__ == "__main__":
    app.run(debug=True)
```

Para la creación de otras rutas deseadas se sigue el mismo patrón:

```python
@app.route('/contacto')
def contacto():
    return '<h1>Contacto</h1>'
```

## Rutas con parámetros

El nombre del parámetro puesto en la ruta (entre < >) debe ser igual al que se le pasa a la función correspondiente a la ruta

```python
@app.route('/contacto/<nombre>/<telefono>')
def contacto(nombre, telefono):
    return f"""
        <h1>Contacto</h1>
        <h2>Hola, {nombre}<h2>
        <p>Tel: {telefono}</p>
    """
```

También se puede especificar el tipo de dato del parámetro

```python
@app.route('contacto/<string: nombre>/<int: telefono>
```

Si lo que se desean agregar es **parámetros opcionales**, se agregan los valores por defecto de los parámetros de cada ruta y se válida de acuerdo con los requisitos.
Dentro de las rutas se agregan las posibles para que no genere un error no controlado.

```python3
@app.route('/contacto')
@app.route('/contacto/nombre')
@app.route('/contacto/nombre/telefono')
def contacto(nombre = None, telefono = None):
    text = ""
    if nombre != None and telefono != None:
        text = f"<p>Nombre: {nombre} - Telefono: {telefono}</p>"
    return f""" 
        <h1>Contacto</h1>
        {text}
    """
```

## Redirecciones

Para controlar redirecciones se importa adicional a `flask`, `redirect` `url_for`. Por defecto se agrega el parámetro `redirection` como `None` y se redirige al inicio o donde se desee validando este valor.

```python
from Flask import flask, redirect, url_for
@app.route('/informacion')
@app.route('/informacion/<redireccion>')
def informacion(redireccion = None):
    if redireccion is not none:
        return redirect(url_for('inicio'))
    return '<h1>Información</h1>'
```

## Plantillas

El contenido de las páginas es mucho más complejo, en general, que una etiqueta `<h1>` con un título. Para agregar plantillas html, a nivel de `main.py` se crea el directorio `templates` para guardar las plantillas.

- Se importa el método `render_template`

```python
from Flask import flask, redirect, url_for, redirect
app = Flask(__name__)
@app.route('/')
def index():
     return render_template('index.html')
```

- Para pasarle parámetros a la plantilla, se hace desde el método `render_template()`

```python
@app.route('./contacto/nombre/telefono')
def contacto(nombre, telefono):
    return render_template('contacto.html',
        nombre,
        telefono,
        )
```

- En el archivo .html, se leen los parámetros con la notación {{var_name}}

```html
...
<body>
    <p>{{nombre}}</p>
    <p>{{telefono}}</p>
</body>
```

- Los comentarios se hace usando la notación {# Comentario #}

`url_for` puede ser usado dentro de las plantillas html usando la notación `{{ url_for('index') }}`

## Layouts

Los layouts cumplen la función de evitar código repetido, generando una plantilla en la que se agrega el contenido que varia y se mantienen estáticos elementos tales como el header y el footer.

En el archivo `layout.html`, se agregan los bloques donde se agregará información en las diferentes rutas

```html
...
<title>{% block title %} {% endblock %} | Flask</title>
....
<main>
    {% block content %}
    {% endblock %}
</main>
```

Para cargar el layout en otras rutas y agregar el contenido deseado, se aplica:

```information.html
{% extends 'layout.html' %}

{% block title %} Información {% endblock %}

{% block content %}
    <h1>Información</h1>
    <p>{{ name }}</p>
{% endblock %}
```

### super()

Con este método dentro de las plantillas .html, no se reemplaza el contenido html de la plantilla original, sino que se anida, sin destruir o sobrescribir.

```html
{% block content %}
    ...
    {{ super() }}
{% endblock %}
```

## Cargar estilos CSS

Creando a nivel de `main.py` el directorio `./static/css/` se aplica en el archivo html

```python
<link rel="stylesheet" href="{{ url_for('static', filename="css/styles.css) }}"></link>
```

##  Context Processor y Fechas en flask

Mediante el decorador `context_proccesor`, se puede acceder a las diferentes propiedades en todo el código.

```python
from datetime import datetime
@app.context_proccesor
def date_now():
    return {
        'now': datetime.utcnow()
    }
```

Ahora se puede acceder a `now` desde donde se requiera

```html
<p>{{ now.year }}</p>
```

## Condicionales en las plantillas ✅❓❌

Los condicionales  if, elif y else en las plantillas de Flask, tienen la siguiente estructura:

{% if variable  == "Hello" %}
<h1>Hola!</h1>
{% elif variable == "Adiós" or variable == "Hasta luego" %}
<h1>Chao</h1>
{% endif %}

## Ciclo for en plantillas 🔁

El ciclo for se implementa con la siguiente sintaxis, también se puede acceder al índice con `loop.index`

```python
<ul>
  {% for animal in animales %}
  <li>{{ animal }} {{ loop.index }}</li>
  {% endfor %}
</ul>
```

### Include

Se pueden integrar funcionalidades o elementos, tales como condicionales, for's, entre otros, de las plantillas gracias al método `Include`

```python
{% include '/ruta' %}
```

## Conexión a base de datos

Si el gestor de la base de datos es MySQL, se instala el paquete flask-mysqldb con el comando `pip install flask-mysqldb` y en el fichero de python donde se necesite se importa con la siguiente línea `from flask_mysqldb import MySQL` y posteriormente en el mismo archivo se configura la conexión:

```python
from flask import Flask
from flask_mysqldb import MySQL

app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'main_db'

mysql = MySQL(app)
``` 

### Querys a la base de datos

En la ruta donde se interactua con la db, se crea un cursor instanciando al método `mysql.connection.cursor()`, a través del cual se ejecutan las consultas a las bases de datos con el método `cursor.execute({query})`, finalmente para guardar y ejecutar los cambios se ejecuta `cursor.connection.commit()`

```python
@app.route('/crear-usuario')
def crear_usuario():
    cursor = mysql.connection.cursor()
    cursor.execute('INSERT INTO usuarios VALUES(...)')
    cursor.connection.commit()
```

#### SELECT * FROM

Si se realizar un query para obtener datos de la BD se ejecuta el método `fetchall()` para recuperar todos los datos del cursor (`fetchone()` para recuperar sólo uno), y finalmente como buena práctica se cierra el cursor con el método `close()`

```python
@app.route('/usuarios')
def obtener_usuarios():
    cursor = mysql.connection.cursor()
    cursor.execute('SELECT * FROM usuarios')
    usuarios = cursor.fetchall()
    cursor.close()

    return render_template('usuarios.html', usuarios=usuarios)
```

- Para acceder a los datos de los usuarios dentro de la plantilla se accede mediante números enteros, empezando desde 0, y no el nombre del campo/columna
  
```html
<h1>Usuarios</h1>
<ul>
{% for usuario in usuarios %}
    <li>usuario.0</li>
    <li>usuario.1</li>
    <li>usuario.2</li>
{% endfor %}
</ul>
```

## request

Con el objeto `request` se pueden recuperar los datos que por ejemplo se envían mediante formularios, para esto es necesario importarlo y luego acceder a los inputs del formulario. Es importante que en la declaración de la ruta de habiliten lo métodos HTTP que sean necesarios

```python
from flask import request

@app.route('/crear-usuario', methods=['GET', 'POST'])
def crear_usuario():
    if request.method == 'POST':
        nombre_usuario = request.form['nombre_usuario']
        edad_usuario = request.form['edad_usuario']
        cursor = mysql.connection.cursor()
        cursor.execute('INSERT INTO usuarios VALUES(...) )
        cursor.connection.commit()
        return redirect(url_for('home'))
```

## Mensajes flash

Los flash de Flask permiten crear mensajes que tienen una vida de una sesión

- Se importa desde flask

```python
from flask import flash
...

- En la ruta que se desee mostrar el mensaje se usa el método `flash()` cuyo argumento es el mensaje

@app.route('/', methods=['GET', 'POST'])
def index():
    flash("Bienvenido")
    return render_template('index.html')
```

- En la plantilla que se renderizará para la ruta se declara la variable, en este caso `message`, con el contenido de la `función get_flashed_messages()` y se itera sobre estos

```html
{% with messages = get_flashed_messages() %}
    {% if messages %}
        {% for message in messages %}
            <div>
                {{message}}
            </div>
        {% endfor %}
    {% endif %}
{% endwith %}
```

- ⚠️ Es necesario crear una clave secreta para la sesión

```python
app = Flask(__name__)
app.secret_key = 'secret_key_flask'
```

**by** _Andrés Camilo Núñez Garzón_