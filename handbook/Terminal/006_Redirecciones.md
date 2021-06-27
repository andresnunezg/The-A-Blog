# Curso: Curso de Introducción a la Terminal y Línea de comandos

## Andrés Camilo Núñez Garzón

### Redirecciones

El comando tiene entradas stdin (STANDARD INPUT 0) y salidas (STANDARD OUTPUT 1) y en caso de un error (STANDARD ERROR 2), los números 0, 1 y 2 son file descriptors.

#### Redirección reemplazando

Con las redirecciones se pueden guardar las salidas de un comando en un archivo especificado.

```bash
ls Pictures > misimagenes.txt
```

#### Redirección concatenando

Si el archivo existe, se agregará el contenido sin reemplazar. En caso de que queramos que sea concatenada se debe agregar un doble mayor qué

```bash
ls Pictures >> misimagenes.txt
```

#### Redirección de error

Para realizar un registro de un error debe usarse el file descriptor de la siguiente manera:

```bash
ls Pictures 2> misimagenes.txt
```

#### Redirección de STANDARD OUPUT y STANDARD ERROR

Si deseamos almacenar la salida con y sin error, debemos especificar si deseamos concatenar o no, además de los file descriptor

```bash
ls archivo > salida.txt 2>&1
```

#### Redirección de STANDARD INPUT

La manera de indicar entradas a comandos es mediante el símbolo '<' y después el archivo de esa entrada, por ejemplo si dentro del archivo wd.txt se encuentra el siguiente contenido:

- wd.txt

```bash
[[:lower:]]*
```

Para establecer el contenido de wd.txt como entrada del comando ls para aplicar el wildcard se aplica la siguiente instrucción:

```bash
ls < wd.txt
```
