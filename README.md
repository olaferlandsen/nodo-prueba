# NODO - Test
Prueba Técnica de Nodo - Node.js

## Recomendaciones

* Ver todos los archivos y módulos del proyecto para familiarizarse con las rutas y puntos de edición.
* Puedes importar cualquier librería que pueda ser de ayuda para tu solución (npm, solamente en el ejercicio #02 de la prueba).
* Luego de completar un módulo de respuesta, sube tu avance en un commit con el título y/o descripción de lo realizado.
* No hay restricción de IDE.

## Requisitos

* [Node.js >= 8.9.0](https://nodejs.org/en/)

## Para comenzar

Debes hacer un fork del proyecto, para luego hacer un pull-request de tus respuestas al repositorio original.

```sh
git clone https://github.com/../nodo-prueba.git

```

Debes instalar las dependencias para el ejercicio #02:

```sh
cd nodo-prueba/P2/vue-test/
npm install
```

Para ejecutar la aplicación del ejercicio #02, una vez ubicado en la raiz de la carpeta debes ejecutar el siguiente comando:

```sh
npm run dev
```

Automáticamente se te abrirá en tu navegador una vista específicamente en la url "http://localhost:8080/"

Esta prueba sirve para determinar las capacidades a nivel lógicas en javascript, y las capacidades a nivel de frontend con el framework Vue JS.

## Desafíos

### 1. Logica Javascript
* En la carpeta de la prueba se encuentra una carpeta llamada "P1" donde tenemos un archivo llamado `logic-text.js`, en el encontraremos lo siguiente:

* 1 Arreglo con información de equipos de fútbol, 1 Arreglo con información de ligas de fútbol europeas, 1 arreglo asociando equipos de fútbol con las ligas donde compiten y finalmente un arreglo donde se asocian equipos de fútbol con la cantidad de victorias en la uefa champions league

* Este primer ejercicio consiste en realizar la lógica de un conjunto de funciones donde se piden cierto tipo de información que abarcan 1 2 3 o los 4 arreglos en conjunto.

### 2. Capacidades en frontend (Vue JS)
* Dentro de la carpeta "P2", encontraremos un proyecto llamado `vue-test`, en el cual existe la base de un proyecto realizado con `vue-cli (https://cli.vuejs.org/guide/)`, donde se muestra un listado de todos los personajes ficticios de la serie Game Of Thrones.

* La idea de este desafío es consultar el api publica de game of thrones `(https://api.got.show/doc/)`, donde se debe extraer el detalle de cada personaje a través de la siguiente url `(https://api.got.show/api/characters/byId/:id)` donde `":id"` es el id del personaje al cual se desea obtener la información.

* Como base ya el sistema realiza una consulta a la url `(https://api.got.show/api/characters/)`, donde se obtienen todos los personajes del api, y el cual contiene información genérica de los personajes `(donde se incluye el ":id" del personaje)`.

* El desafío consta con crear el componente para mostrar la información del detalle del personaje, este componente debe ser visualizado al accionar el botón `"ver detalle"`, encontrado en la tabla principal.

* Como bonus, si desea aplicar otros recursos del api siéntase libre de hacerlo.

* Cabe destacar que en el resto del cuerpo de este desafío se encuentran las dependencias y archivos necesarios para su funcionamiento `(leer README dentro de la carpeta)`.

* Siéntase libre de darle estilos al diseño y utilizar cualquier librería que pueda facilitarle el cumplimiento de este desafío `(por favor documentarla en el readme del proyecto)`

* Si por algún inconveniente no se maneja bien con Vue JS siéntase libre de realizar este mismo ejercicio con otro framework de su preferencia.

# LA PRUEBA NO TIENE LÍMITE DE TIEMPO, AUNQUE CUALQUIER ENTREGA POR SOBRE 1 DÍA SERÁ EVALUADA DE FORMA MÁS RIGUROSA

# ¡ÉXITO!




# SOLUCIONES

## 1. Logica Javascript
> En esta prueba no se utilizaron librerias adicionales.

### Comentarios en ejercicios

#### Ejercicios #1, #2, #3, #4, #5, #6, #7, #8, #9
En general, se utilizar para este ejercicio el metodo `Array.slice()` para no modificar la matriz original y asi generar una copia de tal, la que si podremos manipular con `Array.map` por ejemplo.

Algunos de los metodos utilizados furon:
1. `Array.slice` - devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.
1. `Array.map` - crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
1. `Array.filter` - crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
1. `Array.find` - devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
1. `Array.findIndex` - devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada.
1. `Array.sort` - ordena los elementos de un array localmente y devuelve el array.
1. `Array.reduce` - aplica una función a un acumulador y a cada valor de un array (de izquierda a derecha) para reducirlo a un único valor.


#### Ejercicio #8
En este ejercicio se pide "***No modificar arreglos originales para no alterar las respuestas anteriores al correr la solución***"
Por tanto se realizo una copia de las matrices originales y estas fueron modificas, dejando las originales sin cambios.
Lo anterior de todas formas deja algunas variables sin usar([Ver linea #175]( logic-test.js#L175 ).

// 8 Agregar un nuevo equipo con datos ficticios a "teams", asociarlo a la liga de Francia y agregar un total de 4 victorias en champions.
// Luego devolver el lugar que ocupa este equipo en el ranking de la pregunta 2.
// No modificar arreglos originales para no alterar las respuestas anteriores al correr la solución

#### Ejercicio #9
En este ejercicio se plantean dos formas de resolver el problema dado lo siguiente:
1. Las funciones declaradas como `async` de por si retornan una promesa, por tanto no *seria* necesario implementar `new Promise(...)`. 
2. Las funciones que no son declaradas como `async` no retornaran promesa alguna, salvo que se implemente el resultado como tal, usando por ejemplo `new Promise(...)`.


## 2. Capacidades en frontend (Vue JS)
### Angular v6.1
Para poder probar esta apliación, es necesario acceder a la carpeta contenedora `./P2/angular-test` para instalar las dependencias con el comando `npm install`,
Una vez instaladas las dependencias, se podra probar la aplicación con ejecutando el comando `ng serve`.

Esta aplicación utiliza las siguientes librerias adicionales:

1. @angular/material
2. @angular/animations
2. @angular/router


### ReactNative v16.5
> Esta aplicación requiere contar con emulador ya sea para Android y/o iOS o en su defecto, conectar un dispositivo movil mediente USB al equipo.

Para poder probar este test, es necesario acceder a la carpeta contenedora `./P2/reactnative-test` para instalar las dependencias con el comando `yarn install`,
Una vez instaladas las dependencias, se podra probar la aplicación con ejecutando cualquier a de los siguientes comandos

Esta aplicación utiliza las siguientes librerias adicionales:

1. react-native-elements
2. react-navigation

#### Android(Windows, Linux, OSX)
`npm run android`

#### iOS(solo OSX)
`npm run ios`


### Ionic v4
Para poder probar este test, es necesario acceder a la carpeta contenedora `./P2/ionic-test` para instalar las dependencias con el comando `npm install`,
Una vez instaladas las dependencias, se podra probar la aplicación con ejecutando el comando `ionic serve`.

Esta aplicación no utiliza librerias adicionales.

### Vue v2.5
Para poder probar este test, es necesario acceder a la carpeta contenedora `./P2/vue-test` para instalar las dependencias con el comando `npm install`,
Una vez instaladas las dependencias, se podra probar la aplicación con ejecutando el comando `npm run dev`.

Esta aplicación utiliza las siguientes librerias adicionales:

1. bootstrap
2. axios(`parte de la prueba original`)


### HTML + JavaScript(XHR)

Para esta prueba se implemento un sistema de llamadas XHR para cargar plantillas, ademas de la información obtenida desde la misma API de GoT.
Esta prueba no usa librerias adicionales, si bien utiliza sintaxis `ES6`, en su totalidad utiliza la API DOM compatible con ES5.
Para poder visualizar el ejemplo, es necesario servir `index.html` mediente el protocolo `http` o `https`, de lo contrario saltara error, pues requiere del uso de archivos locales, los cuales por politica de CORS no es posible acceder.

Incluye:
1. Buscador
2. Modal
3. Overlay
4. Lista
5. Detalle