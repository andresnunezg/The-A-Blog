# Curso: Curso de Introducción a la Terminal y Línea de comandos

## Andrés Camilo Núñez Garzón

### Manejo de permisos

#### Tipos de archivos

Los tipos de archivos archivos son los siguientes:

- Archivo: -
- Directorio: d
- Link simbólico: l
- Archivo de bloque: b

### Tipo de modo

El modo se divide principalmente en tres categorías

- Dueño (owner)
- Grupo (users/group)
- Otros (others/world)

Cada una de estas categorías puede tener tres tipos de permisos que son:

- read r (4)
- write w (3)
- execute x (1)

Por ejemplo el dueño por lo general tiene modo 7, es decir cuenta con permisos rwx y los grupos tienen modo 5 r-x (lectura y ejecución).

#### Asignación simbólica de permisos

- u: Sólo para el usuario
- g: Sólo para el grupo
- o: Sólo para otros
- a: aplica para todos

### Modificación de permisos en la terminal