const formulario = document.querySelector('.Formulario');
const botonMisReservas = document.querySelector('#btnmisreservas');
const listaReservas = document.querySelector('#listareservas');
const botonEliminar = document.querySelector('#btneliminar');
const botonModificar = document.querySelector('#btnmodificar');

const restaurante = document.body.dataset.restaurante;
const claveReserva = 'reserva_' + restaurante;

const lugares = formulario.lugares;
const fecha = formulario.fecha;
const nombre = formulario.nombre;
const apellido = formulario.apellido;
const correo = formulario.correo;
const horarios = document.querySelectorAll('input[name="hora"]');

function mostrarError(id, mensaje) {
    document.querySelector(id).textContent = mensaje;
}

function validarLugares() {
    if (lugares.value === '') {
        mostrarError('#error-lugares', 'Seleccioná la cantidad de personas.');
        return false;
    }
    mostrarError('#error-lugares', '');
    return true;
}

function validarFecha() {
    if (fecha.value === '') {
        mostrarError('#error-fecha', 'Seleccioná una fecha.');
        return false;
    }

    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    const fechaElegida = new Date(fecha.value + 'T00:00:00');

    if (fechaElegida < hoy) {
        mostrarError('#error-fecha', 'La fecha no puede ser anterior a hoy.');
        return false;
    }

    mostrarError('#error-fecha', '');
    return true;
}

function validarHora() {
    const horaElegida = document.querySelector('input[name="hora"]:checked');
    if (!horaElegida) {
        mostrarError('#error-hora', 'Seleccioná un horario.');
        return false;
    }
    mostrarError('#error-hora', '');
    return true;
}

function validarNombre() {
    if (nombre.value.trim().length < 2) {
        mostrarError('#error-nombre', 'Ingresá un nombre válido.');
        return false;
    }
    mostrarError('#error-nombre', '');
    return true;
}

function validarApellido() {
    if (apellido.value.trim().length < 2) {
        mostrarError('#error-apellido', 'Ingresá un apellido válido.');
        return false;
    }
    mostrarError('#error-apellido', '');
    return true;
}

function validarCorreo() {
    const valor = correo.value.trim();
    if (valor === '' || !valor.includes('@') || !valor.includes('.')) {
        mostrarError('#error-correo', 'Ingresá un correo válido.');
        return false;
    }
    mostrarError('#error-correo', '');
    return true;
}

function limpiarErrores() {
    mostrarError('#error-lugares', '');
    mostrarError('#error-fecha', '');
    mostrarError('#error-hora', '');
    mostrarError('#error-nombre', '');
    mostrarError('#error-apellido', '');
    mostrarError('#error-correo', '');
}

function actualizarBotones() {
    const hayReserva = localStorage.getItem(claveReserva) !== null;
    botonEliminar.style.display = hayReserva ? 'block' : 'none';
    botonModificar.style.display = hayReserva ? 'block' : 'none';
}

lugares.addEventListener('change', validarLugares);
fecha.addEventListener('change', validarFecha);
nombre.addEventListener('input', validarNombre);
apellido.addEventListener('input', validarApellido);
correo.addEventListener('input', validarCorreo);
horarios.forEach(radio => radio.addEventListener('change', validarHora));

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    const lugaresValidos = validarLugares();
    const fechaValida = validarFecha();
    const horaValida = validarHora();
    const nombreValido = validarNombre();
    const apellidoValido = validarApellido();
    const correoValido = validarCorreo();

    if (!(lugaresValidos && fechaValida && horaValida && nombreValido && apellidoValido && correoValido)) {
        return;
    }

    const horaElegida = document.querySelector('input[name="hora"]:checked');
    const reserva = {
        personas: lugares.value,
        fecha: fecha.value,
        hora: horaElegida.value,
        nombre: nombre.value.trim(),
        apellido: apellido.value.trim(),
        correo: correo.value.trim()
    };

    localStorage.setItem(claveReserva, JSON.stringify(reserva));
    alert('¡Reserva hecha!');

    formulario.reset();
    limpiarErrores();
    listaReservas.style.display = 'none';
    actualizarBotones();
});

botonMisReservas.addEventListener('click', function () {
    if (listaReservas.style.display === 'block') {
        listaReservas.style.display = 'none';
        return;
    }

    const reservaGuardada = JSON.parse(localStorage.getItem(claveReserva));
    listaReservas.style.display = 'block';

    if (!reservaGuardada) {
        listaReservas.innerHTML = '<p>No hay reservas guardadas.</p>';
        return;
    }

    listaReservas.innerHTML = `
        <h3>Mi reserva</h3>
        <p><strong>Personas:</strong> ${reservaGuardada.personas}</p>
        <p><strong>Fecha:</strong> ${reservaGuardada.fecha}</p>
        <p><strong>Hora:</strong> ${reservaGuardada.hora}</p>
        <p><strong>Nombre:</strong> ${reservaGuardada.nombre}</p>
        <p><strong>Apellido:</strong> ${reservaGuardada.apellido}</p>
        <p><strong>Correo:</strong> ${reservaGuardada.correo}</p>
    `;
});

botonModificar.addEventListener('click', function () {
    const reservaGuardada = JSON.parse(localStorage.getItem(claveReserva));
    if (!reservaGuardada) return;

    lugares.value = reservaGuardada.personas;
    fecha.value = reservaGuardada.fecha;
    nombre.value = reservaGuardada.nombre;
    apellido.value = reservaGuardada.apellido;
    correo.value = reservaGuardada.correo;

    const radioHora = document.querySelector(`input[name="hora"][value="${reservaGuardada.hora}"]`);
    if (radioHora) radioHora.checked = true;

    limpiarErrores();
    listaReservas.style.display = 'none';
    formulario.scrollIntoView({ behavior: 'smooth' });
});

botonEliminar.addEventListener('click', function () {
    localStorage.removeItem(claveReserva);
    formulario.reset();
    limpiarErrores();
    listaReservas.innerHTML = '';
    listaReservas.style.display = 'none';
    actualizarBotones();
    alert('Reserva eliminada');
});

actualizarBotones();
