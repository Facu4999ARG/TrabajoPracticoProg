# TrabajoPracticoProg
Tp programacion 2026 II
Nuestro proyecto fue inspirado y basado en un sitio web de reservas, primeramente empezando por cuatro lugares para reservar, entre estos, pizzeria, bodegon, parrilla y restaurante de sushi.
![foto del menu](capturas/inicioo.PNG)
siendo este el menu, estaria conformado primeramente por dos hrefs (conocenos, catalogo) mientras que tambien se encuentran las cuatro "tarjetas" principales, contando con un hover todos estos. Por ultimo, un footer con el nombre del sitio llamado "La Tradicional".

![foto reservas](capturas/hudd.PNG)
En las paginas para reservar se vuelven a encontrar los mismos hrefs colocados con un header (esta vez agregando otro href para el inicio), seguido por fotos ilustrativas de los platos, en este caso, sushi.
![reservas](capturas/reservass.PNG)
Las reservas se encuentran formadas por 6 campos (text, email, date, select, checkbox,), tambien cuenta con un boton para reservar y modificar la reserva.
![alerta](capturas/alertaa.PNG)
una vez realizada la reserva, saldra un alert demostrando que la reserva fue guardada en el localStorage, dado el caso, tambien estara la opcion de eliminar y modificar la reserva si es necesario.

con esto podriamos tener por terminado el CRUD:
Create/Crear: guardar una reserva en el localStorage.
Read/Leer: obtener la reserva y mostrarla en "Mis Reservas".
Update/Actualizar: recuperar la reserva y cargar sus datos nuevamente en el formulario.
Delete/Eliminar: borrar la reserva del localStorage.

*Como ejecutar y utilizar:*

1. Descargar o clonar el proyecto.
2. Abrir la carpeta `TProg` en Visual Studio Code.
3. Abrir `Inicio.html` con Live Server o directamente en el navegador.
4. Ingresar a Sushi, Pizzería, Parrilla o Bodegón para probar las reservas.
5. Rellenar los debidos campos como corresponde (elegir cantidad de personas, introducir nombre, apellido, etc).
6. oprimir el boton de "reservar" para haber realizado la reserva, tambien oprimir "mis reservas" para asegurarse de tener la reserva guardada.
7. seguir explorando el proyecto a tu gusto, cuenta con un apartado de "catalogo" y "conocenos" para quienes desean conocer mas sobre la pagina!

dejando esto en claro, nuestra division del trabajo fue:
css y javaScript: grupal
html:
bodegon: Matias villalba
Sushi: Facundo Ortiz
Parrilla: Simon Zacchino
Pizzeria: Ciro Sabariz
inicio, catalogo y conocenos: grupal
