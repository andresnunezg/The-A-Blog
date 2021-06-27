# Curso: Curso de Introducción a la Terminal y Línea de comandos

## Andrés Camilo Núñez Garzón

### Pipe operator

El pipe operator permite generar un comando cuyo STANDARD OUTPUT pase como STANDARD INPUT a otro comando, permitiendo encadenamientos.

#### echo

Este comando genera un STANDARD OUTPUT de cualquier cadena que le pasemos.

```bash
echo "Hello World!"
```

Salida:

```bash
Hello World!
```

#### cat

Con cat podemos hacer la concatenación de archivos, este recibe como parámetros los archivos que deseamos unir:

```bash
cat texto_a.txt texto_b.txt
```

y muestra en la terminal el resultado de la concatenación

```bash
hola, soy el primer texto!
y yo el texto número 2
```

#### Usando pipes

Con el siguiente comando se van a obtener lista una carpeta de manera ordenada y legible y su salida será la entrada del comando less, donde podremos explorar el archivo y hacer búsquedas

```bash
ls -lh | less
```

Este comando listará los archivos de manera legible, los almacenará en out.txt (tee es análogo a >) y posteriormente lo agrego como entrada a less para explorar el archivos

```bash
ls -lh | tee out.txt | less
```

También se pueden utilizar filtros intermedios, como sort para ordenar la salida

```bash
ls -lh | sort | tee out.txt | less
```

```bash
< Im cowsay >
 ----------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```
