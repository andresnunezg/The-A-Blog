# Curso: Curso de Introducción a la Terminal y Línea de comandos

## Andrés Camilo Núñez Garzón

### Manejo de procesos

En la terminal es posible por supuesto adiministrar las tareas y procesos en ejecución, también se pueden visualizar y filtrar.

## ps

Muestra los procesos o comandos que están en ejecución en la terminal en forma de tabla, una columna con el process id (PID), el datetime y el CMD

```bash
ps
```

```bash
PID  TTY    TIME   CMD
8117 ttys0 0:00.15 -zsh
8233 ttys1 0:00.18 zsh
```

## kill

Finaliza los proceso de la terminal en ejecución, recibe como parámetro el process id (PID)

```bash
kill 8117
```

## top

Muestra en forma de tabla los procesos (no sólo los de la termina, todos) y los organiza de acuerdo con el consumo de recursos

## jobs

Con este comando se consulta si hay procesos en ejecución en el background, es decir que está corriendo pero no lo vemos en la terminal.

Esto se puede hacer a voluntar poniendo el operador & al final del comando.

```bash
cat > texto.txt &
```

La salida del comando jobs es:

```bash
[1]  + suspended (tty input)  cat > texto.txt
```

Este proceso se puede volver a traer al foreground mediante el comando fg y el id del proceso en jobs

```bash
fg %1
```
