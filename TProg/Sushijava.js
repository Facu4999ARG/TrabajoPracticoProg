const formulario = document.querySelector(".Formulario")

console.log(formulario);

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Reserva hecha con exito!")
});

