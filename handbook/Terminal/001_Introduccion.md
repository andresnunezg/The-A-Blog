# Curso: Curso de Introducción a la Terminal y Línea de comandos

## Andrés Camilo Núñez Garzón

### Introducción

#### Ventajas de la terminal

- Flexibilidad
- Velocidad
- Disponible sin GUI
- Alto control sobre el sistema operativo

#### ¿Qué es la terminal?

Es una interfaz gráfica que simula una línea de comandos. Al hacer referencia a una línea de comandos se habla de una Shell.

#### Terminal

Es el prompt donde se toman las instrucciones del usuario.

#### Shell

Toma los comandos (instrucciones) para pasarlos al OS. Algunos tipos de Shell son:

- Bourne Shell
- Bash Shell
- Z Shell
- C Shell

#### ¿Qué es un comando?

Es un programa que se puede ejecutar desde la terminal recibiendo parámetros y opciones.

### Sistema de archivos

Los sistemas Linux y basados en Unix tienen un sistema de archivos similar y tienen estructura de arbol cuyo direcctorio principal es la raíz / y los usuarios se almacenan dentro de la carpeta users.

#### Comandos básicos de la terminal

- Listar archivos

```bash
ls
```

- Listar archivos ocultos, este comando (ls) recibe la opción precedida por un guión.

```bash
ls -a
```

- Listar archivos con su  peso y hacerlo más legible. En este caso ls recibe dos opciones, l (long) y h (human)
  
```bash
ls -lh
```

- Identificar en qué ruta nos encontramos, print working directory
  
```bash
pwd
```

- Moverse entre directorios (change directory). Recibe como parámetro la ruta o nombre de carpeta a la que nos moveremos, si no recibe un parámetro, nos regresará a ~.
  
```bash
cd Desktop
```

El comando cd puede recibir como parámetro una ruta relativa tal como:

```bash
cd home/UserA/Desktop/Pictures
```

O rutas relativas con <.> y <..>. <.> hace referencia a la carpeta actual y <..> a la carpeta (directorio) anterior.

```bash
cd ./Desktop/Pictures
```

- Limpiar la pantalla de la terminal, El comando Ctrl L hace exactamente lo mismo

```bash
clear
```

- Describir un tipo de archivo

```bash
file slides.pptx
```

Al probar el anterior comando se obtiene como salida:

```bash
Microsoft PowerPoint 2007+
```
