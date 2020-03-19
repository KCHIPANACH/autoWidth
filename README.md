# autoWidth

Auto Width basico, de elementos de un slider depenpiendo del tamaño del padre(contenedor) de los elementos

Selector del contenedor de los slides o cartillas
```javascript
/*  "#slider-container" es el ID del elemento html  */
let bodyWidth = document.querySelector("#slider-container")
```
Selector de los slides o cartillas
```javascript
/* "slider-card" es el nombre de la clase del elemento HTML */
let card_slider = document.querySelectorAll(".slider-card")   
```
Función para actualizar el tamaño de los slides o cartillas, recibe como parametros la cantidad de slides o cartillas que deseas ver en pantalla y el margen entre ellas.
```javascript
    updateWidth(2, 5); 
```
Función para iniciar el autoScroll horizontal del contenedor, recibe como parametros la misma cantidad que deseas ver en pantalla, la que se usa en updateWidth
```javascript
    start(2);
```
Función para parar el autoScroll horizontal del contenedor, una vez inicializado nuevamente se reiniciara el scroll horizontal desde el comienzo
```javascript
    stop();
```



