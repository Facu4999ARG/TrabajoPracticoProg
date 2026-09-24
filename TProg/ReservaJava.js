const formulario = document.querySelector(".Formulario");

const botonreserva = document.querySelector("#btnmisreservas");
const listareservas = document.querySelector("#listareservas");
const botoneliminar = document.querySelector("#btneliminar");
const botonmodificar = document.querySelector("#btnmodificar");

const reservaGuardada = localStorage.getItem("reserva");

if (reservaGuardada) {
    botoneliminar.style.display = "block";
    botonmodificar.style.display = "block";
} else {
    botoneliminar.style.display = "none";
    botonmodificar.style.display = "none";
}

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const personas = formulario.lugares.value;
    const fecha = formulario.fecha.value;
    const hora = formulario.hora.value;
    const nombre = formulario.nombre.value;
    const apellido = formulario.apellido.value;
    const correo = formulario.correo.value;

    const reserva = {
        personas: personas,
        fecha: fecha,
        hora: hora,
        nombre: nombre,
        apellido: apellido,
        correo: correo
    };

    localStorage.setItem("reserva", JSON.stringify(reserva));

    alert("¡Reserva hecha!");

    botoneliminar.style.display = "block";
    botonmodificar.style.display = "block";
});

botonreserva.addEventListener("click", function() {

    if (listareservas.style.display === "block") {

        listareservas.style.display = "none";

    } else {

        const reservaGuardada = JSON.parse(localStorage.getItem("reserva"));

        listareservas.style.display = "block";

        if (reservaGuardada) {

            listareservas.innerHTML =
                "<h3>Mis reservas</h3>" +
                "<p><strong>Personas:</strong> " + reservaGuardada.personas + "</p>" +
                "<p><strong>Fecha:</strong> " + reservaGuardada.fecha + "</p>" +
                "<p><strong>Hora:</strong> " + reservaGuardada.hora + "</p>" +
                "<p><strong>Nombre:</strong> " + reservaGuardada.nombre + "</p>" +
                "<p><strong>Apellido:</strong> " + reservaGuardada.apellido + "</p>" +
                "<p><strong>Correo:</strong> " + reservaGuardada.correo + "</p>";

        } else {

            listareservas.innerHTML = "<p>No hay reservas guardadas.</p>";

        }
    }
});

botonmodificar.addEventListener("click", function() {

    const reservaGuardada = JSON.parse(localStorage.getItem("reserva"));

    if (reservaGuardada) {

        formulario.lugares.value = reservaGuardada.personas;
        formulario.fecha.value = reservaGuardada.fecha;
        formulario.nombre.value = reservaGuardada.nombre;
        formulario.apellido.value = reservaGuardada.apellido;
        formulario.correo.value = reservaGuardada.correo;

        const horarios = document.querySelectorAll('input[name="hora"]');

        for (let i = 0; i < horarios.length; i++) {

            if (horarios[i].value === reservaGuardada.hora) {
                horarios[i].checked = true;
            }
        }
    }
});

botoneliminar.addEventListener("click", function() {

    localStorage.removeItem("reserva");

    listareservas.innerHTML = "";
    listareservas.style.display = "none";

    botoneliminar.style.display = "none";
    botonmodificar.style.display = "none";

    formulario.reset();

    alert("Reserva eliminada");
});
