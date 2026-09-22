const formulario = document.querySelector(".Formulario")

console.log(formulario);

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
});

const botonreserva = document.querySelector("#btnmisreservas");
const listareservas = document.querySelector("#listareservas");

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

