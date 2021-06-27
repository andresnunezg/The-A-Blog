# Curso: Curso de Introducción a la Terminal y Línea de comandos

## Andrés Camilo Núñez Garzón

### Wildcards

Las wildcards son una serie de caracteres que permiten encontrar patrones y realizar búsquedas efectivamente. Por ejemplo encontrar todos los archivos terminados en .txt y/o aquellos que empiecen con mayúscula.

#### *

Este wilcard va a seleccionar todas las concidencias de los archivos que terminen en .txt

```bash
ls *.txt
```

El siguiente comando busca todas las concidencias que empiecen con database, sin importar los demás caracteres.

```bash
ls database*
```

#### ?

Con este wildcard vamos a encontrar las coincidencias que sólo incluyan un carácter adicional, siguiendo con el ejemplo anterior y aplican '?'

```bash
ls database?
```

Se extaerán coincidencias como

```bash
databaseA - database9 - database_
```

Si deseamos agregar más caracteres, se deben poner '?' adicionales

```bash
ls databse???
```

Este comando buscará las coincidencias que empiecen por database y terminen con tres caracteres cualesquiera adicionales.

#### [ ] Búsqueda por caracteres

Con este wilcard podemos realizar una búsqueda por caracteres o tipos de caracteres

```bash
ls [[:upper:]]*
```

Este comando busca todas las coincidencias de archivos que empiecen con una mayúscula, las wildcars buscan en varios niveles, si se desean por ejemplo buscar sólo las _carpetas_  se adaptaría el comando así:

```bash
ls -d [[:upper:]]*
```

Con el wildcar [] también se pueden hacer búsquedas del siguiente estilo, donde se filtran aquellos archivos que empiezan por chap e incluyan digitos del 3 al 7.

```bash
ls chap[3-7]*
```

Búsquedas por caracteres adicionales:

- Busca todos los archivos que cuenten con un 4 en medio del nombre

```bash
ls *[4]*
```

- Filtra todos los archivos que cuenten con un 2 o un 9 en medio del nombre

```bash
ls *[29]*
```

- Filtra todos los archivos que empiecen por capitulo y el siguiente caracter sea un dígito entre 2 y 9

```bash
ls capitulo[2-9]*
```

- Filtra todos los archivos que empiecen por cualesquiera caracteres, seguidos por una 'a', nuevamente una cadena de caracteres hasta una 'a' y al final una cadena cualquiera.

```bash
ls *a*a*
```
