# Curso: Curso de Introducción a la Terminal y Línea de comandos

## Andrés Camilo Núñez Garzón

### Exploración de archivos

#### Cabecera de los archivos

El comando head permite ver las diez primeras lineas del archivo que recibe como parámetro

```bash
head index.html
```

Puede modificarse mediante la opción -n para que muestre un número deseado de líneas, en el siguiente caso veinte

```bash
head index.html -n 20
```

El orden también puede ser

```bash
head -n 20 index.html
```

#### Cola de los archivos

Al contrario del comando head, tail muestra por defecto las diez últimas lineas del archivo, esta cantidad también puede ser modificada

```bash
tail index.html -n 5
```

#### Explorar contenido completo de los archivos

Less is More

Con el comando less se puede ver por completo el contenido de un archivo de texto dentro de la terminal y navegar en él.

```bash
less styles.css
```

Al estar detro del archivo en la terminal se pueden buscar palabras al escribir '/' seguido de lo que deseamos encontrar

```bash
/title
```

Para salir, se oprime la tecla 'q'

#### Abrir archivos

En Linux y MacOS es posible abrir archivos desde la terminal

- MacOS

```bash
open index.html
```

- Linux

```bash
xdg-open index.html
```

### Ejecutar aplicaciones desde la terminal

En Mac al igual que para abir archivos se utiliza el comando open pero junto a la opción -a y el nombre de la aplicación. En Linux, el comando nautilus.

Es posible abrir aplicaciones propias del sistema operativo y las instaladas.

```bash
open -a Finder
```

```bash
open -a 'Microsoft Excel'
```
