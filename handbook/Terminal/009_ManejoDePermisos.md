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

#### Nota

Se pueden crear archivo más facilmente con el operador >, redirigiendo la entrada al nombre del archivo que deseamos crear

```bas
> archivo.txt
```

Y para escribir en este

```bas
cat archivo.txt
```

### Ver permisos

Para verificar con qué permisos se cuenta, se puede usar

```bas
ls -al
```

Así se obtiene, como ejemplo:

```bas
-rw-r--r-- 1 usuario
```

### Cambiar permisos

Para cambiar los permisos sobre un archivo se establece el siguiente comando:

```bas
chmod 755 archivo.txt
```

Entregando permisos completos al dueño y lectura y ejecución para el grupo y para el mundo (otros)

Usando el modo simbólico para la adimistración de permisos se utiliza el comando

```bas
chmod u-r archivo.txt
```

Al acceder al archivo con el comando

```bas
cat archivo.txt
```

Se obtiene la siguiente respuesta en la terminal

```bas
cat: archivo.txt: Permission denied
```

Para devolver el permiso de lectura sobre el archivo se aplica el comando:

```bas
chmod u+r archivo.txt
```

Utilizar el modo simbólico con '=' se sobreescren permisos, por lo que hay que hacerlo con precaución. En este comando se retiran permisos de ejecución al usuario y a las categorías grupo y mundo se les asigna sólo escritura

```bash
chmod u-x,go=w archivo.txt
```

### Cambio de usuario

Para verificar qué usuario estamos utilizando, usamos whoami

```bash
whoami
```

Con el comando id, se puede ver a detalle el usuario y a qué grupos pertenece

```bash
id
```

Para cambiar de usuario se usa el comando switch user (su), en este caso el cambio es al usuario raíz

```bash
su root
```

Si este comando no funciona (respuesta su: Sorry), se puede aplicar

```bash
sudo su
```

Si se desean modificar archivos creados por el root o por otros usuarios podemos utilizar sus credenciales de manera temporal y hacer acciones en nombre de root.
En el siguiente comando se elimina desde un usuario común el archivo archivo.txt cuyo dueño es root.

```bash
sudo rm archivo.txt
```

Para cambiar las credenciales de usuario se usa el comando:

```bash
passwd
```

Cuya salida es

```bash
Changing password for user:
Old password:
```
