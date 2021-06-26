# Curso: Curso de Introducción a la Terminal y Línea de comandos

## Andrés Camilo Núñez Garzón

### Comandos

- Programa ejecutable
- Comando Shell
- Funciónd Shell
- Un alias

Para verificar qué clase de comando estamos utilizando, con type podemos realizarlo así:

```bash
type cd
```

La salida de este comando es:

```bash
cd is a shell builtin
```

Al verificarlo con otro comando

```bash
type mkdir
```

con salida:

```bash
mkdir is /bin/mkdir
```

Lo que indica que es un binario, ya que se encuentra dentro de la carpeta /bin.

#### Alias

Con los alias se pueden asignar comandos con opciones personalizadas a caracteres o cadenas que no estén reservados.

El siguiente alias asigna el comando  ls con las opciones lSh (listar de acuerdo al tamaño y de manera legible) al caracter 'l'.

```bash
alias l='ls -lSh'
```

Es importante aclarar que este alias creado es temporal, al cerrar la terminal ya no servirá nuevamente, debe ser manipulado con las variables de entorno para que sea no volátil

Al verificar qué tipo de comando es l con el siguiente comando

```bash
type l
```

Se obtiene que l efectivamente es un alias

```bash
l is an alias for ls -lSh
```

#### Documentación y ayuda sobre los comandos

En la consola de bash se puede consultar sobre un comando utilizando

```bash
help cd
```

No en todas las consolas sirve help, para verificar qué tipo de consola estamos utilizando se usa:

```bash
echo $0
```

Una opción adicional disponible es verificar el manual con la documentación, esto llamand a man (de manual) y el comando que deseamos consultar

```bash
man ls
```

Con el comando anterior se obtiene la descripción de ls y las opciones de éste

El comando info, es similar man, la diferencia principal es la interfaz en la que se muestra la información.

```bash
man ls
```

Para obtener una breve descripción del comando, existe whatis pero hay que considerar que no funciona con todos los comandos.

```bash
whatis ls
```
