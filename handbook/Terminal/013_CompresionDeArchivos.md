# Curso: Curso de Introducción a la Terminal y Línea de comandos

## Andrés Camilo Núñez Garzón

### Compresión de archivos

Previo a la compresión de un directorio podemos verificar su contenido ya sea con

```bash
ls ./carpeta_a_comprimir
```

o también con tree para ver su estructura

```bash
tree carpeta_a_comprimir
```

Existen varios archivos formatos de compresión, entre ellos:

## tar

nota: tar en especial no es un compresor sino un empaquetador

```bash
tar -cvf compress.tar tocompress
```

La estructura del comando anterior es la siguiente:

- tar: comando para compresión tar
- c: opción para comprimir
- v: opción verbose, para ver en consola el proceso
- f: opción de compresión en archivo

El primer parámetro es el nombre que tendrá el archivo una vez comprimido (con la extensión .tar). El segundo parámetro es el directorio que será comprimido.

### gz

La compresión en este formato es más común y recomendada, para hacerla se agrega la siguiente opción al comando tar

```bash
tar -cvfz compress.tar.gz tocompress
```

### Descompresión de archivos

El comando tar también se usa para la descompresión de archivos tar pero ahora en vez de la opción -c, se usa la opción -x. y cómo único parámetro recibe el archivo a descomprimir.

```bash
tar -xvf compress.tar
```

Si el archivo tiene compresión tipo .tar.gz, la descompresión se realiza así:

```bash
tar -xzvf compress.tar.gz 
```

## zip

Un formato de compresión aún más común y más sencillo de usar en la terminal.

La compresión se realiza de la siguiente manera:

```bash
zip -r compress.zip tocompress
```

- r: opción para hacer la compresión de manera recursiva

El primer parámetro es el nombre archivo ya comprimido más la extensión .zip, el segundo parámetro es el archivo a ser comprimido

```bash
unzip compress.zip
```

## rar

Al instalar rar con brew en MacOS, el uso de este es:

- Compresión

```bash
rar a compress.rar tocompress
```

- Descompresión

```bash
unrar compress.rar
```
