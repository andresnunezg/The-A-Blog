# Curso: Curso de Introducción a la Terminal y Línea de comandos

## Andrés Camilo Núñez Garzón

### Encadenar comandos - operadores de control

Es posible ejecutar comandos simultáneamente (de manera síncrona o asíncrona) y de acuerdo a si se cumplen ciertas condiciones establecidas con anterioridad

### Ejecución síncrona

Separando con ';' se separan los comandos que queremos sean ejecutados de manera síncrona, sin importar si el comando previo se ejecutó de manera correcta.

En la siguiente cade de comandos se listan los directorios, posteriormente se crea la carpeta directorio y finalmente se despliega el calendario de la terminal

```bash
ls; mkdir directorio; cal
```

### Ejecución asíncrona

Con esta práctica se abre un hilo del procesador de la máquina para ejecutar los comandos de manera simultánea (también llamada paralera).
Se separan los comandos mediante el símbolo '&'.
Hay que ser precavido con la cantida de comandos y con que alguno de estos no entre en un bucle indefinido.

```bash
ls & cal & ls -h &mv text.txt rename.txt 
```

#### Ejecución condicional

Los comandos sólo se ejecutan con la condición de que su comando predecesor se ejecutó de manera correcta

```bash
mkdir mi_dir && cd mi_dir
```

En la cadena de comandos anterior se crea el directorio mi_dir con el comando mkdir, si la carpeta se creó con exito, se cambia al nuevo directorio mi_dir.

La siguiente cadena de comandos es similar a estructuras OR, se van ejecutando los comandos hasta que alguno no genere error, cuando esto ocurra los posteriores no se ejecutarán.

```bash
cd carpeta_a || touch index.html || echo"Hola!"
```

También se pueden agrupar las estructuras de ejecución:

```bash
echo "Hola mundo!" > holamundo.txt && open holamundo.txt 
```

En esta línea se escribe la salida estandar el comando echo en el archivo holamundo.txt, si esto es exitoso se abrirá el archivo en el editor de texto predeterminado (Si la el OS es Linux, cambiar open por nautilus)
