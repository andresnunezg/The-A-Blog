# Curso: Curso de Introducción a la Terminal y Línea de comandos

## Andrés Camilo Núñez Garzón

### Manipulando archivos y directorios

#### Listar archivos

- Organizar todos los archivos por tamaño y de manera legible

```bash
ls -lSh
```

- Para listar en reversa al comando ls -l, agregamos la opción r, de reverse

```bash
ls -lr
```

- El comando tree despliega todos los archivos de cada carpeta (TODOS).

```bash
tree
```

Si no funciona hay que verificar que esté instalado con el siguiente comando, que utiliza doble guión (--) debido a que la opción no es de un sólo caracter sino una palabra completa.

```bash
tree --version 
```

En caso de que no esté instalado, se puede descansar mediante brew en caso de que el OS sea MacOS

```bash
brew install tree
```

O con el siguiente en caso de que el OS sea Linux

```bash
sudo apt-get install tree
sudo apt-get update
tree --version
```

Para que este comando no haga el despliegue de cada una de las carpetas, se debe especificar la cantidad de niveles a profundizar, el siguiente comando se despliega dos niveles.

```bash
tree -L 2
```

#### Crear directorios

Para crear directorios se utiliza el comando mkdir, make directory, que recibe como parámetro el nombre que se le desea poner, lo recomendable es no utilizar espacio pero si se desa lo mejor es ponerlo dentro de comillas (" ").

```bash
mkdir "Nueva Carpeta"
```

Se pueden crear varios archivos en una sola llamada al comando mkdir

```bash
mkdir carpeta_a carpeta_b carpeta_n
```

#### Crear archivos

La creación de archivos se hace con el comando touch que recibe como parámetro el nombre del archivo (obligatorio) y la extensión (opcional)

```bash
touch hola_mundo.py
```

El comando touch también permite la creación multimedia de archivos

```bash
touch database_conn.py index.html styles.css
```

#### Copiar archivos

El siguiente comando copia el archivo index.html y lo copia en la misma ubicación cambiando el nombre a index_backup.html, manteniendo ambos.

```bash
cp index.html index_backup.html
```

#### Mover archivos

Por ejemplo si se desea mover un archivo a la carpeta anterior se usa el comando move

```bash
mv notas.txt ..
```

Para renombrar una carpeta o archivo se puede usar el comando move

```bash
mv notas.txt notas_enero.txt
```

#### Eliminar archivos

rm es el comando con el cuál se borran archivos o carpetas en la terminal

```bash
rm directorio
```

Este comando tiene la opción -i que sirve para hacer la elimnación de forma interactiva.

```bash
rm -i apuntes.md
```

Así se obtiene como salida

```bash
remove apuntes.md?
```

Que puede recibir como respuesta sólo 'y' y 'n', sí y no respectivamente, seguido de Enter

Para borrar una carpeta que no esté vacía se agrega la opción -r (recursive) y es recomendable usar la opción interactiva si se desea salvar algún archivo.

```bash
rm -ri media
```

Eliminar varios archivos de manera simultánea también es posible con rm

```bash
rm -r dir1 dir2 dirn
```
