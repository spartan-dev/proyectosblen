# Paso 1 escoger tu proyecto

elegimos un proyecto y su api

## paso 2 escoger nuestro generador de componentes

En este caso usamos [https://material-ui.com/es/](https://material-ui.com/es/) material ui

### Genera tu base de ejercicio `create react app `

Con el comando:

```
npx create-react-app myApp
```

## Probar la api con postman o insomnia

la api a usar es [https://punkapi.com/documentation/v2](https://punkapi.com/documentation/v2) Cervezas hummm!!!

## Instalar las dependencias

instalaremos

## instalamos los paquetes de componentes en este caso

componentes de mnaterial ui [https://material-ui.com/es/](https://material-ui.com/es/)

## Instalar react router dom y configurtacion

dentro del src crear routescon sus componnetes y modificar el index

## Una ves que el router esta seteado puedes generar las cards para las rutas

puedes ir creando con el Link componente de react-router-dom link a los diferentes sitios dentro del mismo,
siempre y cuando no salgan de tu aplicacion si esto es necsario entonces si ocupas un anchor tradicional <a></a>

## Con la siguiente fase seria en el componente de all beers crear un fetch a la api de beers y traer todas las cervezas

Con un use effect y una funcion asincrona pudes llamar a la api y guardar el resultado en el estado para manipular esas cervezas

## El paso siguiente seria ir a una cerveza random con el mimsmo procedimiento de todas pero en este caso solo iras por una cerveza

con un useEffect podras ir con el fetch a por la api y traer una sola cerveza que tenga ms datos de ella

## Como paso siquiente ir a la api con el id de una cerveza i traer una unica cerveza

En tu router pudes generar esto con el path = "/beers/:id" esto generar la ruta de la url (localhost:3000/beers/123455)
