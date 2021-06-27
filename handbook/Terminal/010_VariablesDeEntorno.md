# Curso: Curso de Introducción a la Terminal y Línea de comandos

## Andrés Camilo Núñez Garzón

### Variables de entorno

Las shell y el OS tienen una configuración interna a la que se puede acceder mediante las variables de entornos

#### Link simbólico

Son un tipo de archivo que hace referencia a una ubicación, la manera de configurarlos es la siguiente:

```bash
ln -s Desktop/code Desarrollo
```

Que puede ser utilizado para acceder a la ubicación establecida, esto si se está desde el directorio principal del usuario.

```bash
cd Desarrollo
```

### Ver variables de entorno

Para ver las variables de entorno configuradas en la terminal se usa el comando

```bash
printenv
```

Para mostrar variables de entorno específicas se utiliza:

- Imprimir cuál es el home

```bash
echo $HOME
```

- Ir al home

```bash
cd $HOME
```

- Mostrar la ubicación de todos los binarios que ejecuta el sistema

```bash
echo $PATH
```

#### Modificar variables de entorno

Para configurar las variables de entorno hay que modificar los archivos .zshrc o .bashrc, depende de qué terminal se utilice, esto puede saberse con

```bash
echo $0
```

o

```bash
echo $SHELL
```

La consola en Mac es zsh pero el archivo .zshrc no existe de manera predeterminada por lo que este debe crearse y configurarse en el home del usuario.

```zsh
touch ~/.zshrc
```

o buscarlo en /etc

Al haber creado o encontrado el archivo, abrirlo con un editor de texto

```bash
code zshrc
```

```bash
nano zshrc
```

Para las variables de entorno es recomendable ponerlas en mayúscula

Si se desea agregar contenido al path, dentro de zshrc o basrc se escribe:

```bash
PATH=$PATH:/etc
```
