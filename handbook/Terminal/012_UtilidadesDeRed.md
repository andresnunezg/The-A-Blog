# Curso: Curso de Introducción a la Terminal y Línea de comandos

## Andrés Camilo Núñez Garzón

### Utilidades de red

Desde la terminal también se puede obtener información sobre la red, conexiones, etc.

#### ifconfig

Este comando muestra información de red, dirección ip, puertos, dirección broadcast, entre otros.

#### ping

Con ping se puede verificar si un servicio en línea está habilitado o también si nuestra configuración de red permite la conexión. Este comando es cíclico y recibe paquetes hasta que cancelemos su ejecución.

El comando requiere como parámetro una URL

```bash
ping www.google.com
```

O la dirección ip si la conocemos

```bash
ping 8.8.8.8
```

#### curl

Con este comando obtenemos el index.html de la página web que estamos pasando como parámetro.
Su salida estándar la podemos redirigir a un archivo para inspeccionarla con un editor.

```bash
curl www.google.com > index.html && code index.html
```

#### wget

Descargar desde internet el contenido de una web

```bash
wget www.google.com 
```

#### traceroute

Nos permite obtener un registro de todas las máquinas (ip) intermediarias hasta lograr la conexión con el servicio o página establecida como parámetro

```bash
traceroute www.google.com
```

La salida de éste comando es:

```bash
traceroute to www.google.com (172.217.173.36), 64 hops max, 52 byte packets
1  192.168.39.1 (192.168.39.1)  4.185 ms  3.847 ms  3.624 ms
2  192.168.0.1 (192.168.0.1)  28.435 ms  6.805 ms  6.498 ms
```

#### netstat -i

Ver los dispositivos de red en forma de tabla e indica su estado

```bash
netstat -i
```
