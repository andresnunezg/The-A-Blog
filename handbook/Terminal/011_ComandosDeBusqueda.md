# Curso: Curso de Introducción a la Terminal y Línea de comandos

## Andrés Camilo Núñez Garzón

### Comandos de búsqueda

Con estos comandos podemos realizar búsqueda de directorios o archivos de acuerdo a su nombre, extensión, ubicación parcial, entre otros.

#### which

Sirve para encontrar la ruta de los archivos binarios.

Búsqueda de dónde está el archivo de ejecución de Visual Studio Code

```bash
which code
```

Cuya salida es:

```bash
/usr/local/bin/code
```

#### find

Permite buscar un archivo a partir de una ruta, desde donde se empezará la búsqueda.

```bash
find ./ -name file
```

En el caso anterior se buscan todos los archivos que contengan la palabra file a partir de la ubicación actual

Para especificar si deseamos buscar sólo archivos o sólo directorios se usa la opción -type y cómo argumento f (file) o d (directory).

```bash
find ./ -type d -name Documents
```

Para realizar la búsqueda por tamaño se usa la opción size. El siguiente comando busca archivos mayores de 20 megabytes

```bash
find ./ -size 20MB
```

### grep

Permite encontrar coincidencias dentro de un archivo de texto, recibe como primer argument el criterio de búsqueda (puede ser una regex) y el segundo argumento es el archivo donde se realizará la búsqueda

```bash
grep Bogota citys.csv
```

Para que grep no sea case sensitive, podemos utilizar la opción -i

```bash
grep -i Bogota citys.csv
```

Si lo que interesa es capturar el número de ocurrencias sin ser case sensitive, podemos usar la opción -c (de count, probablemente)

```bash
grep -ci Cartagena citys.csv 
```

Para buscar a todas aquellas coincidencias diferentes a nuestro criterio de búsqueda se agrega la opción -v.

```bash
grep -vci the movies.csv
```

El comando anterior cuenta todas aquellas coincidencias que no contengan the (ya sea mayúscula o minúscula) dentro del archivo movies.csv

#### wc

Wordcount (wc) es un comando que nos da información sobre el contenido del archivo.

```bash
wc movies.csv
```

La salida del comando anterior es:

```bash
9126 30006 477779 movies.csv
```

Donde el primer número corresponde al total de lineas, el segundo es el total de caracteres y el último es el número de bits.
